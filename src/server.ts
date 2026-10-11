
import app from './app';
import {env} from './config/env';
import { connectDB } from './database/db';

const port = env.port;
const startServer = async () =>{
    await connectDB();

    app.listen(port,(error) => {
    if(error){
        if(error instanceof Error){
            console.error("Error starting server:",error.message);
        }
        else{
            console.error(`Server is running on port ${port}`);
        }
    }});
}

startServer();