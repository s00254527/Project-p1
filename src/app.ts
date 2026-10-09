import express, {Application, Request, Response} from "express" ; 
import {env} from "./config/env";
import {validate} from './middleware/auth.middleware';
import { purchaseZSchema } from "./model/purchases";
import PurchaseRoutes from '../src/routes/purchaseRoutes';
import { connectDB } from "./database/db";


const PORT = env.port; 
const app: Application = express(); 
app.use(express.json);
//vlaidation of the schemia 
app.use('/Api/V1/Purchases',validate(purchaseZSchema),PurchaseRoutes)


app.get("/Api/V1/Purchases", async (_req : Request, res: Response) => { 
    res.json({message: "Purchases working?"}); 
}); 

 

app.listen(PORT, () => { 
    console.log("Server is running on port", PORT); 
    }); 

const startServer = async() => {
    await connectDB();
    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();