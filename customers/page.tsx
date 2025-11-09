"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Quote,
  ArrowRight,
  Award,
  CheckCircle,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { fadeInUp, stagger } from "@/lib/motion";
import { Navbar } from "@/components/layout/Navbar";

const caseStudies = [
  {
    company: "Karachi Gas Distributors",
    industry: "LPG Distribution",
    location: "Karachi, Pakistan",
    employees: "50-100",
    logo: "/images/customers/kgd-logo.png",
    featured: true,
    challenge:
      "Managing multiple branches with paper-based records was causing delays, errors, and customer dissatisfaction.",
    solution:
      "Implemented Gasflow across all 5 branches with mobile apps for delivery drivers and real-time inventory tracking.",
    results: [
      { metric: "50%", label: "Faster Order Processing" },
      { metric: "35%", label: "Cost Reduction" },
      { metric: "99%", label: "Order Accuracy" },
      { metric: "4.8/5", label: "Customer Rating" },
    ],
    testimonial: {
      quote:
        "Gasflow has transformed our business. What used to take hours now takes minutes. Our customers are happier, and our team is more productive.",
      author: "Muhammad Asif",
      role: "Managing Director",
    },
  },
  {
    company: "Lahore LPG Traders",
    industry: "LPG Retail",
    location: "Lahore, Pakistan",
    employees: "20-50",
    logo: "/images/customers/llt-logo.png",
    challenge:
      "Limited visibility into inventory levels led to frequent stockouts and overstocking issues.",
    solution:
      "Deployed Gasflow's inventory management system with automated reordering and real-time alerts.",
    results: [
      { metric: "60%", label: "Reduced Stockouts" },
      { metric: "40%", label: "Lower Inventory Costs" },
      { metric: "80%", label: "Faster Invoicing" },
    ],
    testimonial: {
      quote:
        "We can now track every cylinder in real-time. The automated alerts have saved us from running out of stock multiple times.",
      author: "Ayesha Malik",
      role: "Operations Manager",
    },
  },
  {
    company: "Islamabad Energy Solutions",
    industry: "LPG Wholesale",
    location: "Islamabad, Pakistan",
    employees: "100-200",
    logo: "/images/customers/ies-logo.png",
    challenge:
      "Complex multi-branch operations required better coordination and centralized reporting.",
    solution:
      "Centralized all operations on Gasflow with role-based access for 150+ users across 10 branches.",
    results: [
      { metric: "70%", label: "Better Coordination" },
      { metric: "90%", label: "Reporting Efficiency" },
      { metric: "45%", label: "Time Savings" },
    ],
    testimonial: {
      quote:
        "The multi-branch dashboard gives us complete visibility. We can make decisions faster and serve our customers better.",
      author: "Imran Sheikh",
      role: "CEO",
    },
  },
];

const stats = [
  {
    number: "250+",
    label: "Happy Customers",
    description: "Businesses trust Gasflow",
  },
  {
    number: "1M+",
    label: "Transactions",
    description: "Processed monthly",
  },
  {
    number: "99.9%",
    label: "Uptime",
    description: "Always available",
  },
  {
    number: "4.9/5",
    label: "Satisfaction",
    description: "Average customer rating",
  },
];

const industries = [
  "LPG Distributors",
  "Gas Retailers",
  "Wholesale Suppliers",
  "Multi-Branch Networks",
  "Delivery Services",
  "Regional Chains",
];

export default function CustomersPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  ⭐ Customer Success Stories
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Real Results from
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Real Businesses
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                See how LPG businesses across Pakistan are using Gasflow to
                streamline operations, reduce costs, and delight customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Case Study */}
        {caseStudies
          .filter((cs) => cs.featured)
          .map((caseStudy, index) => (
            <SectionWrapper
              key={index}
              className="bg-slate-50 dark:bg-slate-950"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <Award className="text-blue-600" size={24} />
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">
                    Featured Success Story
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Company Info */}
                  <div>
                    <Card className="mb-8">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                            <Users className="text-white" size={40} />
                          </div>
                          <div className="text-right text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-1 justify-end mb-1">
                              <MapPin size={14} />
                              {caseStudy.location}
                            </div>
                            <div>{caseStudy.employees} employees</div>
                          </div>
                        </div>
                        <CardTitle className="text-3xl mb-2">
                          {caseStudy.company}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          {caseStudy.industry}
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Challenge
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Solution
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Results Achieved
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {caseStudy.results.map((result, idx) => (
                        <Card
                          key={idx}
                          className="text-center group hover:scale-105 transition-transform duration-300"
                        >
                          <CardContent className="pt-6">
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                              {result.metric}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">
                              {result.label}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-none">
                      <CardContent className="pt-6">
                        <Quote
                          className="text-white/30 mb-4"
                          size={48}
                        />
                        <p className="text-lg text-white mb-6 italic">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <div className="text-white">
                          <div className="font-semibold">
                            {caseStudy.testimonial.author}
                          </div>
                          <div className="text-sm text-blue-100">
                            {caseStudy.testimonial.role},{" "}
                            {caseStudy.company}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}

        {/* More Case Studies */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              More{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies
              .filter((cs) => !cs.featured)
              .map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <Users className="text-white" size={28} />
                        </div>
                        <div className="text-right text-xs text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <MapPin size={12} />
                            {caseStudy.location}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-1">
                        {caseStudy.company}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {caseStudy.industry}
                      </CardDescription>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Challenge
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Solution
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {result.metric}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-2">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          — {caseStudy.testimonial.author},{" "}
                          {caseStudy.testimonial.role}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
          </div>
        </SectionWrapper>

        {/* Industries Served */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Industries We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Gasflow is trusted by businesses across the LPG industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-6">
                    <CheckCircle className="mx-auto mb-2 text-blue-600" size={24} />
                    <div className="text-sm font-medium text-slate-900 dark:text-white">
                      {industry}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
                Join hundreds of LPG businesses already transforming their
                operations with Gasflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/products/gasflow/demo">
                    Request a Demo <ArrowRight className="ml-2" size={16} />
                  </Link>
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
