import { Request, Response,NextFunction } from "express";
import axios from "axios";


export const validateToken = async (req: any, res: Response, next: NextFunction) => {
    try {
        if (req.headers.authorization === undefined) {
            return res.status(403).json({ message: 'you do not have authorization!' });
        }
        // If the token is valid, make a request to the external API
        const externalApiUrlValidate = 'https://securityservicesapp.azurewebsites.net/api/Authenticate/validate';
        const token = req.headers.authorization.split(' ')[1];
        
        axios.post(
          externalApiUrlValidate,
          // Data payload goes here
          {},
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'System': 'ChwGateway', // adjust content type based on your API requirements
              'Module': 'ChwGateway', // adjust content type based on your API requirements
              'Controller': 'AuthController', // adjust content type based on your API requirements
              'Action': 'Validate',
              'Content-Type': 'application/json',
            },
          }
        )
          .then(response => {
            console.log('response',response.data.result)
            next()
          })
          .catch(apiError => {
            res.status(401).send(apiError.response.data.title);
          });

      } catch (error) {
        res.status(500).send('Internal Server Error');
      }
}

export const login = async (req: Request, res: Response) => {
    try {
        const externalApiUrl = 'https://securityservicesapp.azurewebsites.net/api/Authenticate/token';
                
        const response = await axios.post(
            externalApiUrl,
            null,  // No data in the request body
            {
                responseType: 'json',
                headers: { Authorization: req.headers.authorization },
            }
        );
        res.json({message: response.data});

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


