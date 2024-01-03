

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface AuthenticatedRequest extends Request {
  user?: any; // Puedes ajustar el tipo según la estructura de tu usuario
}

export const authenticateMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  try {
    // Verificar y decodificar el token
    const jwtSecret = process.env.JWT_SECRET || 'default_secret';
const decoded = jwt.verify(token, jwtSecret);
 // Puedes hacer más validaciones aquí según tus necesidades
    // Por ejemplo, verificar la expiración, el emisor, etc.

    // Adjunta la información del usuario decodificada al objeto de solicitud para que esté disponible en las rutas protegidas
    req.user = decoded;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};
