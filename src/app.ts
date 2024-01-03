import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login/login.routes';
import helloRouter from './routes/helloWorld/hello.routes'; // Ajusta la ruta según tu estructura de carpetas
import byeRouter from './routes/byeWorld/bye.routes'; // Ajusta la ruta según tu estructura de carpetas
import 'dotenv/config';

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Rutas
app.use('/', loginRouter);
app.use('/', helloRouter);
app.use('/', byeRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;
