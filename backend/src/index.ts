import express, { Request, Response } from 'express';
import db from './database/knex.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World with TypeScript!' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    db.raw('SELECT 1').then(() => console.log('DB connected')).catch(console.error);
});
