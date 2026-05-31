import express, { Request, Response } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/knex.js';
import { User } from '../models/user.js';

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email: string, password: string, done: (err: any, user?: any, info?: any) => void) => {
    try {
      const user = await db('users').where({ email }).first();
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), (req: Request, res: Response) => {
  const { password: _, ...user } = req.user as User;
  const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '8h' });
  res.json({ token, user });
});

export default router;
