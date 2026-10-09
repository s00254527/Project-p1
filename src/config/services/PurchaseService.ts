import id from "zod/v4/locales/id.js";
import { IPurchase, PurchaseModel } from "../model/purchases";
import {HydratedDocument, model} from "mongoose";

//importing the purchase model.
const Purchase = model<IPurchase>("Purchase", PurchaseModel);
//creating the new functions to call the service and await on the data. 
export class PurchaseService {
    //creating a purchase 
    async createPurchase(purchaseData: IPurchase): Promise<HydratedDocument<IPurchase>> {
        const purchase = new Purchase(purchaseData);
        return await purchase.save();
    }
//getting all purhcases
    async getAllPurchases(): Promise<HydratedDocument<IPurchase>[]> {
        return await Purchase.find();
    }
//updating a purchase by id 
    async updatePurchase(id: string, purchaseData: Partial<IPurchase>): Promise<HydratedDocument<IPurchase> | null> {
        return await Purchase.findByIdAndUpdate(id, purchaseData, { returnDocument: "after" });
    }
//deleting a purchase by id 
    async deletePurchase(id: string): Promise<HydratedDocument<IPurchase> | null> {
        return await Purchase.findByIdAndDelete(id);
    }





}
