import {Request,Response,NextFunction} from 'express';
import {z} from 'zod';

//this is all of the clensing and validation for the middleware. 
export const validate = (Schema: z.ZodObject<any>) =>(
 req:Request, res:Response, next:NextFunction
): void => {
    const validation = Schema.safeParse(req.body);
    if(!validation.success){
        res.status(400).json({
            message:'Validation Failed',
            errors: validation.error.issues
        });
        return;
    }
    req.body = validation.data
    next();
};
   
