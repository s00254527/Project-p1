import { Router } from "express";
import { PurchaseController } from "../controllers/purchaseController";
import { purchaseZSchema } from "../model/purchases";
import { validate } from "../middleware/auth.middleware";

const router = Router();
const purchaseController = new PurchaseController();

//getting all purchases
router.get('/', purchaseController.getAllPurchases);

//validations from the middleware that validates that I/the user can submit a purchase. 
router.post('/', validate(purchaseZSchema), purchaseController.createPurchase);


//deletion of a pruchase.Im debating deleting everything after a month but ill have to ask
//una baout that
router.delete('/:Id',purchaseController.deletePurchase);

export default router;