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
export const purchaseSchema = z.object({
    make: z.string().min(1, "Make is required"),
    model: z.string().min(1, "Model is required"),
    year: z.number().int().min(2026, "Year must be a valid year").max(new Date().getFullYear(), "Year cannot be in the future"),
    price: z.number().positive("Price must be a positive number"),
    mileage: z.number().int().nonnegative("Mileage must be a non-negative integer"),
    date: z.date("Date is required")
});