import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/knex.js';
import { User } from '../models/user.js';

const router = express.Router();

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    req.user = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET!) as User;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

function omitPassword(user: User) {
  const { password: _, ...safe } = user;
  return safe;
}

router.use(isAuthenticated);

router.get('/', async (_req: Request, res: Response) => {
  const users = await db('users').select('*');
  res.json(users.map(omitPassword));
});

router.get('/:id', async (req: Request, res: Response) => {
  const user = await db('users').where({ id: req.params.id }).first();
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(omitPassword(user));
});

router.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const [id] = await db('users').insert({ name, email, password: hashed });
  const user = await db('users').where({ id }).first();
  res.status(201).json(omitPassword(user));
});

router.put('/:id', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const updates: Partial<User> = { name, email };
  if (password) updates.password = await bcrypt.hash(password, 10);
  await db('users').where({ id: req.params.id }).update(updates);
  const user = await db('users').where({ id: req.params.id }).first();
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(omitPassword(user));
});

router.delete('/:id', async (req: Request, res: Response) => {
  const deleted = await db('users').where({ id: req.params.id }).delete();
  if (!deleted) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
});

export default router;
