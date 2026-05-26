"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  Download,
  Send,
  Printer
} from "lucide-react";
import { formatGhs } from "@/lib/currency";
import { inventory } from "@/lib/demo-data";

type Quote = {
  customer: string;
  phone: string;
  request: string;
  status: string;
};

type InvoiceItem = {
  id: string;
  name: string;
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
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [amountPaid, setAmountPaid] = useState(0);
  const [notes, setNotes] = useState("");
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    quantity: 1,
    unitPrice: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const total = subtotal - discount;
  const balance = total - amountPaid;

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.unitPrice > 0) {
      setItems([
        ...items,
        {
          id: `item-${Date.now()}`,
          name: newItem.name,
          quantity: newItem.quantity,
          unitPrice: newItem.unitPrice
        }
      ]);
      setNewItem({ id: "", name: "", quantity: 1, unitPrice: 0 });
    }
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSelectInventory = (item: any) => {
    setNewItem({
      id: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.price
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate receipt/invoice
      const invoiceData = {
        reference: `INV-${Date.now()}`,
        date: new Date().toISOString(),
        customer: quote.customer,
        phone: quote.phone,
        items: items,
        subtotal: subtotal,
        discount: discount,
        total: total,
        amountPaid: amountPaid,
        balance: balance,
        paymentMethod: paymentMethod,
        notes: notes
      };

      // Here you would typically save to database
      console.log("Invoice created:", invoiceData);

      // Show success message
      alert(`✓ Invoice created successfully!\nReference: ${invoiceData.reference}\nTotal: ${formatGhs(total)}`);

      // Reset form
      setItems([]);
      setDiscount(0);
      setAmountPaid(0);
      setNotes("");
      setPaymentMethod("Cash");

      onSuccess();
    } catch (error) {
      console.error("Error creating invoice:", error);
      alert("Error creating invoice. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
      {/* Invoice Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Customer</p>
            <p className="text-lg font-bold text-gray-900">{quote.customer}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="text-lg font-bold text-gray-900">{quote.phone}</p>
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Invoice Items</h3>

        {/* Quick Select from Inventory */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Quick Add from Inventory</p>
          <select
            value=""
            onChange={(e) => {
              const selectedInventory = inventory.find((inv) => inv.id === e.target.value);
              if (selectedInventory) {
                handleSelectInventory(selectedInventory);
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            title="Select an item from inventory"
            aria-label="Select item from inventory"
          >
            <option value="">Select an item...</option>
            {inventory.map((inv) => (
              <option key={inv.id} value={inv.id}>
                {inv.name} - {formatGhs(inv.price)}/{inv.unit}
              </option>
            ))}
          </select>
        </div>

        {/* Manual Item Entry */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
          <p className="text-sm font-medium text-gray-700">Or Add Item Manually</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Quantity"
              min="1"
              step="0.01"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: parseFloat(e.target.value) || 1 })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Unit Price"
              min="0"
              step="0.01"
              value={newItem.unitPrice}
              onChange={(e) => setNewItem({ ...newItem, unitPrice: parseFloat(e.target.value) || 0 })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleAddItem}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        {/* Items List */}
        {items.length > 0 ? (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Item Name</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Unit Price</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Total</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900">{item.name}</td>
                    <td className="px-4 py-3 text-right text-gray-900">{item.quantity}</td>
                    <td className="px-4 py-3 text-right text-gray-900">{formatGhs(item.unitPrice)}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">
                      {formatGhs(item.quantity * item.unitPrice)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                        title="Remove item from invoice"
                        aria-label="Remove item from invoice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">No items added yet</p>
          </div>
        )}
      </div>

      {/* Totals Section */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold text-gray-900">{formatGhs(subtotal)}</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Discount:</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={discount}
            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
            className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0.00"
            title="Enter discount amount"
            aria-label="Discount amount"
          />
        </div>
        <div className="border-t border-gray-300 pt-3 flex justify-between">
          <span className="text-lg font-semibold text-gray-900">Total:</span>
          <span className="text-lg font-bold text-blue-600">{formatGhs(total)}</span>
        </div>
      </div>

      {/* Payment Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select
              value={paymentMethod}
              title="Select payment method"
              aria-label="Payment method"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Cash">Cash</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cheque">Cheque</option>
              <option value="Credit">Credit</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount Paid</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amountPaid}
              placeholder="0.00"
              title="Enter amount paid"
              aria-label="Amount paid"
              onChange={(e) => setAmountPaid(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {balance !== 0 && (
          <div className={`p-3 rounded-lg ${balance > 0 ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"}`}>
            <p className={balance > 0 ? "text-red-800" : "text-green-800"}>
              {balance > 0 ? `Balance Due: ${formatGhs(balance)}` : `Change: ${formatGhs(Math.abs(balance))}`}
            </p>
          </div>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any additional notes or terms..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
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
          onClick={onCancel}
          className="flex-1 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
