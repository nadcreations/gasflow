"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  CreditCard,
  Building2,
  Phone,
  MessageCircle,
  CheckCircle,
  Crown,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

interface PlanDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    id: string;
    name: string;
    price: string;
    currency: string;
    description: string;
    billingCycle: "monthly" | "yearly";
    features?: any;
  } | null;
  billingPeriod: "monthly" | "yearly";
}

const PlanDetailsDialog: React.FC<PlanDetailsDialogProps> = ({
  isOpen,
  onClose,
  plan,
  billingPeriod,
}) => {
  if (!plan) return null;

  const price = parseFloat(plan.price);
  const yearlyDiscount = 20;
  const finalPrice =
    billingPeriod === "yearly" ? price * ((100 - yearlyDiscount) / 100) : price;

  const bankDetails = {
    bankName: "Allied Bank Limited",
    accountTitle: "Gasflow Solutions",
    accountNumber: "1234-5678-9012-3456",
    iban: "PK36ABCD1234567890",
    branchCode: "1234",
    swiftCode: "ALLBPKKA",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "+923155913409"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `Hi! I'm interested in purchasing the ${
        plan.name
      } plan (${billingPeriod} billing) for $${Math.round(
        finalPrice
      )}/month. Please assist me with the payment process.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const isPaidPlan = plan.name !== "Free" && price > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              {plan.name === "Basic" ? (
                <Crown className="w-6 h-6 text-white" />
              ) : plan.name === "Premium" ? (
                <Zap className="w-6 h-6 text-white" />
              ) : (
                <CreditCard className="w-6 h-6 text-white" />
              )}
            </div>
            {plan.name} Plan Details
          </DialogTitle>
          <DialogDescription>
            Complete payment information and bank details for your subscription
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Plan Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.name} Plan
                </h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">
                  {plan.currency} {Math.round(finalPrice)}
                </div>
                <div className="text-sm text-gray-600">
                  per{" "}
                  {billingPeriod === "yearly"
                    ? "month (billed yearly)"
                    : "month"}
                </div>
                {billingPeriod === "yearly" && (
                  <Badge className="bg-green-100 text-green-700 mt-1">
                    Save {yearlyDiscount}%
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {isPaidPlan ? (
            <>
              {/* Bank Details */}
              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">
                    Bank Transfer Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Bank Name</div>
                        <div className="font-medium">
                          {bankDetails.bankName}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(bankDetails.bankName, "Bank Name")
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">
                          Account Title
                        </div>
                        <div className="font-medium">
                          {bankDetails.accountTitle}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(
                            bankDetails.accountTitle,
                            "Account Title"
                          )
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">
                          Account Number
                        </div>
                        <div className="font-medium">
                          {bankDetails.accountNumber}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(
                            bankDetails.accountNumber,
                            "Account Number"
                          )
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">IBAN</div>
                        <div className="font-medium">{bankDetails.iban}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(bankDetails.iban, "IBAN")
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Branch Code</div>
                        <div className="font-medium">
                          {bankDetails.branchCode}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(bankDetails.branchCode, "Branch Code")
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">SWIFT Code</div>
                        <div className="font-medium">
                          {bankDetails.swiftCode}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          copyToClipboard(bankDetails.swiftCode, "SWIFT Code")
                        }
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Payment Instructions
                </h3>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Transfer the exact amount:{" "}
                      <strong>
                        {plan.currency} {Math.round(finalPrice)}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Use your business name as reference in the transfer
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Send payment screenshot via WhatsApp for quick activation
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Your plan will be activated within 2-4 hours after
                      verification
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      We are available from{" "}
                      <span className="font-bold text-blue-900">
                        10:00 AM to 11:00 PM
                      </span>{" "}
                      for support and activation.
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* WhatsApp Contact */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-gray-900">Need Help?</h3>
                  <p className="text-sm text-gray-600">
                    Contact us on WhatsApp for payment assistance
                  </p>
                </div>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact on WhatsApp
                </Button>
              </div>
            </>
          ) : (
            /* Free Plan Message */
            <div className="text-center py-8">
              <div className="bg-green-100 p-6 rounded-xl border border-green-200">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  Free Plan - No Payment Required!
                </h3>
                <p className="text-green-700">
                  You can start using Gasflow with our free plan immediately. No
                  payment or setup required.
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanDetailsDialog;
