import { Request, Response } from "express";

export const helloWorld = async (req: Request, res: Response) => {
    try {
        res.json({ message: 'Hello world!!' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

