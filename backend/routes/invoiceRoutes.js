import express from "express";
import {
  createInvoice,
  getInvoices,
  getInvoiceByCustomer,
  downloadInvoicePDF,
  deleteInvoice,
  updateInvoice,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/", createInvoice);
router.get("/", getInvoices);
router.get("/search/:name", getInvoiceByCustomer);
router.get("/download/:id", downloadInvoicePDF);
router.delete("/:id", deleteInvoice);
router.put("/:id", updateInvoice);

export default router;
