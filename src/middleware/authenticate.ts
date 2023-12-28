import { Request, Response, NextFunction } from 'express';

export const authenticateMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  // Aquí deberías agregar la lógica para verificar y validar el token
  // Puedes utilizar bibliotecas como 'jsonwebtoken' para trabajar con tokens JWT

  // Si el token es válido, puedes continuar con la siguiente función de middleware
  next();
};
