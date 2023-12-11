import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
app.use(express.json());
app.use(cors());

// app.use('/api/users', userRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
