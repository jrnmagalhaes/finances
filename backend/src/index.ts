import express, { Request, Response } from 'express';
import cors from 'cors';
import passport from 'passport';
import db from './database/knex.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World with TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  db.raw('SELECT 1').then(() => console.log('DB connected')).catch(console.error);
});
