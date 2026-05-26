"use client";

import { useState } from "react";
import {
  FileText,
  Plus,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  X
} from "lucide-react";
import { quotes } from "@/lib/demo-data";
import { InvoiceForm } from "@/components/InvoiceForm";

type Quote = {
  customer: string;
  phone: string;
  request: string;
  status: string;
};

export default function QuotesPage() {
  const [quotesList, setQuotesList] = useState<Quote[]>(quotes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  const filteredQuotes = quotesList.filter(
    (quote) =>
      quote.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.phone.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "reviewed":
        return "bg-purple-100 text-purple-800";
      case "quoted":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
      case "reviewed":
        return <AlertCircle className="w-4 h-4" />;
      case "quoted":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const handleCreateInvoice = (quote: Quote) => {
    setSelectedQuote(quote);
    setShowInvoiceForm(true);
  };

  const handleInvoiceCreated = () => {
    setShowInvoiceForm(false);
    setSelectedQuote(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quotes</h1>
          <p className="text-gray-600 mt-1">Manage customer quotes and create invoices</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by customer name or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {showInvoiceForm && selectedQuote ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Creating Invoice for {selectedQuote.customer}</p>
                <p className="text-sm text-gray-600">{selectedQuote.phone}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowInvoiceForm(false);
                setSelectedQuote(null);
              }}
              className="text-gray-400 hover:text-gray-600"
              title="Close invoice form"
              aria-label="Close invoice form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <InvoiceForm
            quote={selectedQuote}
            onSuccess={handleInvoiceCreated}
            onCancel={() => {
              setShowInvoiceForm(false);
              setSelectedQuote(null);
            }}
          />
        </div>
      ) : (
        /* Quotes List */
        <div className="grid gap-4">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No quotes found</p>
            </div>
          ) : (
            filteredQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{quote.customer}</h3>
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(quote.status)}`}>
                        {getStatusIcon(quote.status)}
                        {quote.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">📞 {quote.phone}</p>
                    <p className="text-gray-700 mb-3">{quote.request}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCreateInvoice(quote)}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Invoice
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
