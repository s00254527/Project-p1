import {Schema } from "mongoose";
import { z } from "zod";

//was advised to create an enum
enum PurchaseType{
    Food = 'FOOD',
    Clothes = 'CLOTHES',
    Rent = 'RENT',
    Drink = 'DRINK',
    electricity= 'ELECTRICITY',
    Washing ='WASHING',
    Lesuire = 'LESUIRE',
    Fuel = 'FUEL',
    other ='OTHER'
}
export interface IPurchase{
    //removed id as there was no point in addding that 
    //since mongo has the id.
    
    //id: string;//id for the id of the purchase
    type: PurchaseType;//type of purchase, e.g. "food"
    amount: number;//amount of the purchase
    date: Date;//date of the purchase - this is for the monthly expenditure 
}

//this is the required model. Making it ensure that we have all of the information before we push

export const PurchaseModel = new Schema<IPurchase>({
   // id: { type: String, required: true },
   //had to change the object values for the enum
    type: { type: String, enum: Object.values(PurchaseType), required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
}, { timestamps: true }
);

//this is just for testing on the routes and ensuring the data is ok. 
export const purchaseZSchema = z.object({
    //id: z.string(),
    type:z.enum,
    amount: z.number(),
    date: z.coerce.date().min(new Date("2026-01-01")),
});