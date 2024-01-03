import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login/login.routes';
import { authenticateMiddleware } from './middleware/authenticate'; // Ajusta la ruta según tu estructura de carpetas
import 'dotenv/config';

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Rutas públicas sin autenticación
app.use('/', loginRouter);

// Rutas protegidas con autenticación
app.use('/api', authenticateMiddleware, /* Otras rutas protegidas */);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;
