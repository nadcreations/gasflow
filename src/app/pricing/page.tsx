"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import Pricing from "@/components/Pricing";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Shield, Zap, HeadphonesIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

const benefits = [
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with SOC 2 compliance",
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Get started in minutes, not days",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Always here when you need us",
  },
  {
    icon: Check,
    title: "No Hidden Fees",
    description: "What you see is what you pay",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Simple,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Choose the plan that fits your business. No hidden fees, no
                surprises.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Detailed Feature Comparison */}
        <SectionWrapper className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Feature Breakdown
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Compare plans and choose the features that fit your business needs
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Step 1: Core Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Core Business Management
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Customer Management
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Unlimited customer profiles</li>
                    <li>• Purchase history tracking</li>
                    <li>• Credit/debit management</li>
                    <li>• Customer segmentation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Inventory Control
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Real-time stock tracking</li>
                    <li>• Low stock alerts</li>
                    <li>• Cylinder tracking</li>
                    <li>• Multi-location inventory</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Sales & Invoicing
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Digital invoices</li>
                    <li>• Multiple payment methods</li>
                    <li>• Partial payment support</li>
                    <li>• Automatic calculations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Analytics & Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Advanced Analytics & Insights
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Real-Time Dashboards
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Live sales tracking</li>
                    <li>• Revenue analytics</li>
                    <li>• Performance metrics</li>
                    <li>• Custom date ranges</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Comprehensive Reports
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Sales reports</li>
                    <li>• Profit/loss statements</li>
                    <li>• Customer analytics</li>
                    <li>• Export to PDF/Excel</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Business Intelligence
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Trend analysis</li>
                    <li>• Forecasting tools</li>
                    <li>• Customer insights</li>
                    <li>• Performance benchmarks</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Team & Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Team Management & Operations
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    User Access Control
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Role-based permissions</li>
                    <li>• Multi-user support</li>
                    <li>• Activity logging</li>
                    <li>• Secure authentication</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Multi-Branch Support
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Centralized management</li>
                    <li>• Branch-wise reporting</li>
                    <li>• Inter-branch transfers</li>
                    <li>• Consolidated analytics</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Mobile Applications
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• iOS & Android apps</li>
                    <li>• Offline mode support</li>
                    <li>• Real-time sync</li>
                    <li>• Push notifications</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4: Integration & Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Security & Integrations
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Enterprise Security
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Data encryption</li>
                    <li>• Daily backups</li>
                    <li>• SOC 2 compliance</li>
                    <li>• Secure cloud hosting</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Third-Party Integrations
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• Payment gateways</li>
                    <li>• Accounting software</li>
                    <li>• SMS notifications</li>
                    <li>• API access</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Support & Training
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-7">
                    <li>• 24/7 email support</li>
                    <li>• Phone support</li>
                    <li>• Video tutorials</li>
                    <li>• Onboarding assistance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Benefits Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Gasflow?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every plan comes with these essential benefits
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Join hundreds of LPG businesses already using Gasflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="rounded-full bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="/products/gasflow/demo">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
    </>
  );
}
