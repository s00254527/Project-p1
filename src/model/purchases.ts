import {Schema } from "mongoose";
import { z } from "zod";

export interface IPurchase{
    id: string;//id for the id of the purchase
    type: string;//type of purchase, e.g. "food"
    amount: number;//amount of the purchase
    date: Date;//date of the purchase - this is for the monthly expenditure 
}

//this is the required model. Making it ensure that we have all of the information before we push

export const PurchaseModel = new Schema<IPurchase>({
    id: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
}, { timestamps: true }
);

//this is just for testing on the routes and ensuring the data is ok. 
export const purchaseZSchema = z.object({
    id: z.string(),
    type:z.string(),
    amount: z.number(),
    date: z.date().min(2026).optional(),
});