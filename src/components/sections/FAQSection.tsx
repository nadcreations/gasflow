"use client";

import React from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get started with Gasflow?",
    answer:
      "You can start using Gasflow within 24 hours. After signing up, our team will help you set up your account, import your data, and train your staff. Most businesses are fully operational within 2-3 days.",
  },
  {
    question: "Do I need any special hardware or equipment?",
    answer:
      "No special hardware is required. Gasflow works on any modern computer, tablet, or smartphone with an internet connection. You can use your existing devices.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption to protect your data. All information is stored securely in the cloud with daily backups. We follow industry-standard security practices and are compliant with data protection regulations.",
  },
  {
    question: "Can I try Gasflow before purchasing?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform and see if it's the right fit for your business.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including email, phone, and live chat. All plans include onboarding assistance and training. Professional and Enterprise plans get priority support and a dedicated account manager.",
  },
  {
    question: "Can Gasflow handle multiple branches?",
    answer:
      "Yes! Gasflow is built for multi-branch operations. You can manage unlimited branches from a single dashboard, with centralized reporting and individual branch controls.",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Everything you need to know about Gasflow.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
