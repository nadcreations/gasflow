"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, BarChart3, Shield, Users, Cloud, Smartphone } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import Pricing from "@/components/Pricing";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { fadeInUp, stagger } from "@/lib/motion";
import { Navbar } from "@/components/layout/Navbar";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track sales, inventory, and customer behavior with live dashboards and reports.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description:
      "Manage your business from anywhere with dedicated apps for teams and customers.",
  },
  {
    icon: Users,
    title: "Multi-Branch Management",
    description:
      "Control and monitor multiple locations from a single centralized platform.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with role-based access and data encryption.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description:
      "Access your data securely from anywhere, with automatic backups.",
  },
  {
    icon: Zap,
    title: "Instant Invoicing",
    description:
      "Generate professional invoices and receipts in seconds with automation.",
  },
];

export default function GasflowPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  🚀 The Future of LPG Management
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Manage Your LPG Business
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  In One Platform
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Gasflow is a complete cloud-based management system for LPG
                distributors and dealers. Automate billing, track inventory,
                manage customers, and get real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/products/gasflow/demo">Request Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products/gasflow/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <BarChart3 size={80} className="mx-auto mb-4" />
                    <p className="text-xl font-semibold">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Everything You Need to
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Run Your Business
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Powerful features designed specifically for the LPG industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full group hover:scale-105 transition-transform duration-300 py-6">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="text-white" size={28} />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Pain Points & Benefits Section */}
        <PainPointsSection />

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Modernize Your LPG Business?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                Join leading LPG businesses already using Gasflow to streamline
                operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/products/gasflow/demo">Get Started Free</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
