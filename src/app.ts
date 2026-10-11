import express, {Application} from "express" ; 
import PurchaseRoutes from '../src/routes/purchaseRoutes';


const app: Application = express();   
app.use(express.json());
app.use('/Api/V1/Purchases', PurchaseRoutes);

export default app;


