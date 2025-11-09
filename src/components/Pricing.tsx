"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const plans = [
  {
    name: "Starter",
    price: "Rs. 9,999",
    period: "/month",
    features: [
      "Single branch management",
      "Up to 100 customers",
      "Basic inventory tracking",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "Rs. 19,999",
    period: "/month",
    popular: true,
    features: [
      "Multi-branch management (up to 5)",
      "Unlimited customers",
      "Advanced analytics",
      "Mobile & web apps",
      "Priority support",
      "Custom reports",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited branches",
      "Unlimited everything",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
      "On-premise option",
    ],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Simple,{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transparent Pricing
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include a 14-day
          free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${plan.popular ? "border-2 border-blue-600 shadow-xl scale-105" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {plan.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/demo">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
