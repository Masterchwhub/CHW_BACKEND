import { Request, Response } from "express";

export const byeWorld = async (req: Request, res: Response) => {
    try {
        res.json({ message: 'Bye world!!' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};