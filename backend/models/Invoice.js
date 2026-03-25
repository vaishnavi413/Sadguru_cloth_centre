import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    invoiceNo: Number,
    invoiceDate: String,
    dueDate: String,
    clientName: String,
    clientGST: String,
    clientAddress: String,
    placeOfSupply: String,
    gstRate: Number,
    items: [
        {
            particulars: String,
            hsn: String,
            qty: Number,
            rate: Number,
            amount: Number,
        },
    ],
    totals: {
        taxableAmount: Number,
        taxAmount: Number,
        roundOff: Number,
        grandTotal: Number,
    },
    businessName: String
}, { timestamps: true });

const Invoice = mongoose.model("Invoice", InvoiceSchema, "sadguruClothDB");
export default Invoice;
