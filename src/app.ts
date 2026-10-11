import express, {Application, Request, Response} from "express" ; 
import {env} from "./config/env";
import PurchaseRoutes from '../src/routes/purchaseRoutes';
import { connectDB } from "./database/db";


const PORT = env.port; 
const app: Application = express(); 
app.use(express.json());
app.use('/Api/V1/Purchases', PurchaseRoutes);


app.get("/Api/V1/Purchases", async (_req : Request, res: Response) => { 
    res.json({message: "Purchases working?"}); 
}); 


const startServer = async() => {
    await connectDB();
    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();