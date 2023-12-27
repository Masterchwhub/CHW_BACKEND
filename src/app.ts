import 'dotenv/config'
import express from "express";
import cors from 'cors'
import loginRouter from './routes/login/login.routes'


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;
