"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";
import {
  BarChart3,
  Smartphone,
  Users,
  Shield,
  Cloud,
  Zap,
  FileText,
  TrendingUp,
  Bell,
  Package,
  MapPin,
  CreditCard,
} from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Comprehensive insights at your fingertips",
    details: [
      "Live sales tracking and revenue monitoring",
      "Customer behavior and purchase patterns",
      "Inventory levels across all locations",
      "Team performance metrics",
      "Customizable reports and exports",
      "Predictive analytics for demand forecasting",
    ],
    image: "/images/features/analytics.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Applications",
    description: "Manage your business from anywhere",
    details: [
      "Native iOS and Android mobile apps",
      "Responsive web application",
      "Offline mode with automatic sync",
      "Real-time notifications and alerts",
      "QR code scanning for quick operations",
      "Customer-facing mobile ordering app",
    ],
    image: "/images/features/mobile.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Multi-Branch Management",
    description: "Control all locations from one dashboard",
    details: [
      "Centralized branch overview",
      "Individual branch performance tracking",
      "Inter-branch inventory transfers",
      "Branch-specific user permissions",
      "Consolidated reporting across branches",
      "Branch comparison and benchmarking",
    ],
    image: "/images/features/branches.png",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Never run out of stock or overstock",
    details: [
      "Real-time cylinder tracking",
      "Automatic low-stock alerts",
      "Batch and serial number tracking",
      "Stock movement history",
      "Automated reorder points",
      "Supplier management integration",
    ],
    image: "/images/features/inventory.png",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CreditCard,
    title: "Automated Billing & Invoicing",
    description: "Generate invoices in seconds",
    details: [
      "Professional digital invoices",
      "Multiple payment methods support",
      "Automatic payment reminders",
      "Credit/debit tracking",
      "Tax calculation and compliance",
      "WhatsApp and SMS invoice delivery",
    ],
    image: "/images/features/billing.png",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    description: "Efficient delivery planning",
    details: [
      "Optimized delivery routes",
      "GPS tracking for delivery staff",
      "Real-time delivery status updates",
      "Customer location mapping",
      "Estimated delivery time calculations",
      "Proof of delivery with photos",
    ],
    image: "/images/features/routes.png",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Digital Record Keeping",
    description: "All your data, perfectly organized",
    details: [
      "Customer purchase history",
      "Transaction records with search",
      "Document attachment and storage",
      "Automated data backup",
      "Audit trail for compliance",
      "Data export in multiple formats",
    ],
    image: "/images/features/records.png",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Make data-driven decisions",
    details: [
      "Sales trends and forecasting",
      "Profit margin analysis",
      "Customer lifetime value tracking",
      "Seasonal pattern identification",
      "Competitor benchmarking",
      "Growth opportunity insights",
    ],
    image: "/images/features/intelligence.png",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay informed, always",
    details: [
      "Low inventory alerts",
      "Payment due reminders",
      "New order notifications",
      "System updates and announcements",
      "Custom notification rules",
      "Multi-channel delivery (App, Email, SMS)",
    ],
    image: "/images/features/notifications.png",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade protection",
    details: [
      "Bank-level data encryption",
      "Role-based access control",
      "Two-factor authentication",
      "Regular security audits",
      "GDPR compliance",
      "Automatic security updates",
    ],
    image: "/images/features/security.png",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Reliable, scalable, and fast",
    details: [
      "AWS-powered infrastructure",
      "99.9% uptime guarantee",
      "Automatic data backup",
      "Scalable as you grow",
      "Global CDN for fast access",
      "Disaster recovery protection",
    ],
    image: "/images/features/cloud.png",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Integrations & API",
    description: "Connect with your favorite tools",
    details: [
      "RESTful API access",
      "Webhook support",
      "Accounting software integration",
      "Payment gateway connections",
      "Custom integration development",
      "Third-party app marketplace",
    ],
    image: "/images/features/integrations.png",
    gradient: "from-amber-500 to-yellow-500",
  },
];

export default function GasflowFeaturesPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  All Features
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Run Your LPG Business
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
                Powerful features designed to streamline operations, boost
                efficiency, and drive growth.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <Link href="/products/gasflow/demo">Get Started Free</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Grid */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <StaggerContainer className="space-y-20">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  {/* Feature Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      {feature.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <GlassCard gradient>
                      <div className="aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 rounded-xl flex items-center justify-center">
                        <div className="text-center p-8">
                          <feature.icon
                            className={`w-20 h-20 mx-auto mb-4 text-transparent bg-gradient-to-br ${feature.gradient} bg-clip-text`}
                          />
                          <p className="text-slate-500 dark:text-slate-400 font-medium">
                            {feature.title}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience All These Features?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Start your free trial today and see how Gasflow can transform your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="rounded-full bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="/products/gasflow">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/products/gasflow/demo">Schedule a Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
