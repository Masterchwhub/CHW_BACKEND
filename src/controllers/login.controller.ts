import { Request, Response } from "express";
import axios from "axios";

export const validateToken = async (req: any, res: Response) => {
    try {
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
              'System': 'Security', // adjust content type based on your API requirements
              'Module': 'Authenticate', // adjust content type based on your API requirements
              'Controller': 'Authenticate', // adjust content type based on your API requirements
              'Action': 'Validate',
              'Content-Type': 'application/json',
            },
          }
        )
          .then(response => {
            // Send the response from the external API to the client
            res.json(response.data);
          })
          .catch(apiError => {
            console.error(apiError);
            res.status(500).send('Internal Server Error');
          });

      } catch (error) {
        console.error(error);
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
    res.json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


