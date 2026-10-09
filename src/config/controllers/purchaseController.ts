import {Request, Response} from "express";
import { PurchaseService } from "../services/PurchaseService";
import { IPurchase } from "../model/purchases";



const purchaseService = new PurchaseService();


export class PurchaseController {
    //creating purchase
createPurchase = async(req: Request, res: Response): Promise<void> => {
        try {
            const purchaseData: IPurchase = req.body;
            const newPurchase = await purchaseService.createPurchase(purchaseData);
            res.status(201).json(newPurchase);
        } catch (error) {
            res.status(500).json({ error: "Failed to create purchase" });
        }
    }
//get all purchases
getAllPurchases = async (_req:Request, res:Response): Promise<void> => {
    try{
        const purchase = await purchaseService.getAllPurchases();
        res.status(200).json(purchase);
    }catch(error){
        res.status(500).json({message:'Error fetching purchases',error});
    }
};
//updating 
updatePurchases = async (req: Request, res: Response) : Promise<void> => {
    try{
        const id = Array.isArray(req.params.id)? req.params.id[0]: req.params.id;
        const updatedPurchase = await purchaseService.updatePurchase(id, req.body);
        
        if(!updatedPurchase){
            res.status(404).json({message :'Purchase not found'});
            return;
        }
        res.status(200).json(updatedPurchase);
    }catch (error){
        res.status(500).json({message : 'Error updating Purchase',error});
    }
};
//deleting 
deletePurchase = async(_req: Request, res : Response): Promise<void> => {
 const id = Array.isArray(_req.params.id)? _req.params.id[0] : _req.params.id;
try{
 const deletePurchase = await purchaseService.deletePurchase(id);
 if(!deletePurchase){
    res.status(404).json({message: 'Purchase not found'});
    return;
 }
}catch(error){
 res.status(200).json({success:true,
    data:`Purchase sucessfully deleted with id of ${_req.params.id}`
 });
}
};
};