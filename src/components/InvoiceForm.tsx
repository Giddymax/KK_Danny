"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Plus,
  Trash2,
  Send,
  Printer,
  X
} from "lucide-react";
import { formatGhs } from "@/lib/currency";
import { inventory } from "@/lib/demo-data";
import { brand, phoneLine } from "@/lib/brand";

type Quote = {
  customer: string;
  phone: string;
  request: string;
  status: string;
};

type InvoiceItem = {
  id: string;
  no: number;
  description: string;
  quantity: number;
  unitPrice: number;
};

type InvoiceFormProps = {
  quote: Quote;
  onSuccess: () => void;
  onCancel: () => void;
};

export function InvoiceForm({ quote, onSuccess, onCancel }: InvoiceFormProps) {
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState("Prices and delivery dates should be confirmed before supply.");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemQty, setNewItemQty] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generatedAt = new Date();
  const invoiceDate = generatedAt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const validUntil = new Date(generatedAt);
  validUntil.setDate(validUntil.getDate() + 14);
  const validityDate = validUntil.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleAddItem = () => {
    if (newItemDescription && newItemQty && newItemPrice) {
      const qty = parseFloat(newItemQty);
      const price = parseFloat(newItemPrice);
      if (qty > 0 && price > 0) {
        setItems([
          ...items,
          {
            id: `item-${Date.now()}`,
            no: items.length + 1,
            description: newItemDescription,
            quantity: qty,
            unitPrice: price
          }
        ]);
        setNewItemDescription("");
        setNewItemQty("");
        setNewItemPrice("");
      }
    }
  };

  const handleRemoveItem = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated.map((item, idx) => ({ ...item, no: idx + 1 })));
  };

  const handleSelectInventory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const inv = inventory.find((i) => i.id === selectedId);
      if (inv) {
        setNewItemDescription(inv.name);
        setNewItemPrice(inv.price.toString());
      }
    }
  };

  const generateInvoiceReference = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const invoiceData = {
        reference: generateInvoiceReference(),
        date: generatedAt.toISOString(),
        customer: quote.customer,
        phone: quote.phone,
        items: items,
        subtotal: subtotal,
        discount: discount,
        total: total,
        notes: notes
      };

      console.log("Invoice created:", invoiceData);
      alert(`✓ Invoice created successfully!\nReference: ${invoiceData.reference}\nTotal: ${formatGhs(total)}`);

      setItems([]);
      setDiscount(0);
      setNotes("Prices and delivery dates should be confirmed before supply.");
      onSuccess();
    } catch (error) {
      console.error("Error creating invoice:", error);
      alert("Error creating invoice. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      {/* Quote-style Invoice Form - matching printout format */}
      <div className="bg-white border border-gray-300 rounded-lg p-8 space-y-6 print:shadow-none print:border-0">
        
        {/* Header - Business Info */}
        <header className="flex gap-4 pb-6 border-b border-gray-300">
          <div className="flex-shrink-0">
            <Image src={brand.logo} alt={`${brand.name} logo`} width={80} height={50} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{brand.name}</h2>
            <p className="text-sm text-gray-700">{brand.tagline}</p>
            <p className="text-sm text-gray-600">{brand.address}</p>
            <p className="text-sm text-gray-600">{brand.location}</p>
            <p className="text-sm text-gray-600">Tel: {phoneLine}</p>
          </div>
          
          {/* Title Block */}
          <div className="text-right border-l border-gray-300 pl-6">
            <h1 className="text-2xl font-bold text-gray-900">INVOICE</h1>
            <p className="text-sm text-gray-700">Ref: {generateInvoiceReference()}</p>
            <p className="text-sm text-gray-700">Date: {invoiceDate}</p>
            <p className="text-sm text-gray-700">Valid until: {validityDate}</p>
          </div>
        </header>

        {/* Customer Info Section */}
        <section className="grid grid-cols-2 gap-6 py-4 border-b border-gray-300">
          <div>
            <span className="block text-xs font-semibold text-gray-600 uppercase">Prepared for</span>
            <strong className="block text-lg text-gray-900">{quote.customer || "Customer"}</strong>
            {quote.phone && <p className="text-sm text-gray-700">{quote.phone}</p>}
          </div>
          <div>
            <span className="block text-xs font-semibold text-gray-600 uppercase">Status</span>
            <strong className="block text-lg text-gray-900">{quote.status}</strong>
          </div>
        </section>

        {/* Line Items Table */}
        <section className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Add Items to Invoice</p>
            <div className="flex gap-2 mb-3">
              <select
                onChange={handleSelectInventory}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                title="Select item from inventory"
                aria-label="Quick select from inventory"
              >
                <option value="">Quick select from inventory...</option>
                {inventory.map((inv) => (
                  <option key={inv.id} value={inv.id}>
                    {inv.name} - {formatGhs(inv.price)}/{inv.unit}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input
                type="text"
                placeholder="Description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Qty"
                min="0.01"
                step="0.01"
                value={newItemQty}
                onChange={(e) => setNewItemQty(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Unit Price"
                min="0"
                step="0.01"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Item
              </button>
            </div>
          </div>

          {/* Items Table - matching quote printout format */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-400 bg-gray-100">
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900 w-12">No.</th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900 flex-1">Description</th>
                <th className="px-3 py-2 text-right text-sm font-semibold text-gray-900 w-20">Qty</th>
                <th className="px-3 py-2 text-right text-sm font-semibold text-gray-900 w-24">Unit Price</th>
                <th className="px-3 py-2 text-right text-sm font-semibold text-gray-900 w-24">Amount</th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-gray-900 w-12">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-900 font-semibold">{item.no}</td>
                    <td className="px-3 py-2 text-sm text-gray-900">{item.description}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-900">{item.quantity}</td>
                    <td className="px-3 py-2 text-sm text-right text-gray-900">{formatGhs(item.unitPrice)}</td>
                    <td className="px-3 py-2 text-sm text-right font-semibold text-gray-900">
                      {formatGhs(item.quantity * item.unitPrice)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-gray-500 text-sm">
                    No items added yet
                  </td>
                </tr>
              )}
              {/* Empty rows for spacing in printout */}
              {Array.from({ length: Math.max(0, 4 - items.length) }).map((_, idx) => (
                <tr key={`empty-${idx}`} className="border-b border-gray-200 h-8">
                  <td colSpan={6}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Summary Section */}
        <section className="grid grid-cols-2 gap-6 py-6 border-t border-gray-300">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Add terms and conditions..."
            />
          </div>

          {/* Totals Box */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-gray-900">Subtotal</span>
              <span className="text-gray-900">{formatGhs(subtotal)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-gray-900">Discount</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                className="w-28 px-2 py-1 border border-gray-300 rounded text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                title="Discount amount"
                aria-label="Discount amount"
              />
            </div>
            <div className="border-t-2 border-gray-400 pt-2 flex justify-between">
              <span className="font-bold text-lg text-gray-900">TOTAL</span>
              <span className="font-bold text-lg text-blue-600">{formatGhs(total)}</span>
            </div>
          </div>
        </section>

        {/* Footer - Signatures */}
        <footer className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-300">
          <div>
            <span className="block text-xs font-semibold text-gray-600 uppercase mb-6">Prepared by</span>
            <strong className="block text-gray-900">{brand.name}</strong>
          </div>
          <div>
            <span className="block text-xs font-semibold text-gray-600 uppercase mb-6">Customer Signature</span>
            <div className="w-32 h-16 border-t-2 border-gray-400"></div>
          </div>
        </footer>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 print:hidden">
          <button
            type="submit"
            disabled={items.length === 0 || isSubmitting}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Creating Invoice..." : "Create Invoice"}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
