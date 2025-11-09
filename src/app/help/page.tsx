"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Zap,
  Users,
  Settings,
  CreditCard,
  HelpCircle,
  PlayCircle,
  FileText,
  MessageCircle,
} from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const categories = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick guides to help you set up and start using Gasflow",
    articles: 8,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Learn how to manage users, roles, and permissions",
    articles: 12,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Set up your account and customize Gasflow to your needs",
    articles: 15,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Everything about invoicing, payments, and subscriptions",
    articles: 10,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Reports & Analytics",
    description: "Generate insights and understand your business data",
    articles: 14,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Solutions to common problems and error messages",
    articles: 18,
    gradient: "from-red-500 to-pink-500",
  },
];

const popularArticles = [
  "How to set up your first business account",
  "Adding and managing team members",
  "Creating your first invoice",
  "Understanding the analytics dashboard",
  "Setting up multi-branch operations",
  "Mobile app installation guide",
  "Importing existing customer data",
  "Configuring payment methods",
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'Click on "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox. You can also change your password from Settings > Account > Security.',
  },
  {
    question: "Can I use Gasflow offline?",
    answer:
      "Yes, the mobile app supports offline mode. Your data will automatically sync when you reconnect to the internet. However, real-time features like notifications require an internet connection.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      'Go to Settings > Billing & Subscription, click "Upgrade Plan," select your desired tier, and complete the payment. Your new features will be activated immediately.',
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-grade encryption, regular security audits, and maintain SOC 2 compliance. All data is backed up daily and stored securely on AWS infrastructure.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export all your data anytime. Go to Settings > Data Management > Export Data. You can choose CSV, Excel, or JSON format.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@gasflow.com, use the in-app chat feature, or call us at +92 300 1234567 during business hours (9am-6pm PKT, Monday-Friday).",
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                How can we{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  help you?
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
                Search our knowledge base or browse categories to find answers
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for articles, guides, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find detailed guides and tutorials organized by topic
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <StaggerItem key={index}>
                <GlassCard gradient={false} hover>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {category.description}
                      </p>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {category.articles} articles →
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>

        {/* Popular Articles */}
        <SectionWrapper className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Popular Articles
                </h2>
              </div>

              <ul className="space-y-3">
                {popularArticles.map((article, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {article}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Video Tutorials
                </h2>
              </div>

              <div className="space-y-4">
                <GlassCard hover>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 rounded-xl flex items-center justify-center mb-3">
                    <PlayCircle className="w-16 h-16 text-slate-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Getting Started with Gasflow
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    5:32 minutes
                  </p>
                </GlassCard>

                <GlassCard hover>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 dark:from-slate-800 dark:via-purple-900 dark:to-slate-900 rounded-xl flex items-center justify-center mb-3">
                    <PlayCircle className="w-16 h-16 text-slate-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Advanced Analytics Features
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    8:45 minutes
                  </p>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </SectionWrapper>

        {/* FAQs */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Quick answers to common questions
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 dark:border-slate-800 rounded-2xl px-6 data-[state=open]:bg-blue-50/50 dark:data-[state=open]:bg-blue-950/20 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        {/* Contact Support */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <AnimatedSection className="text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Our support team is available 24/7 to assist you with any
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/gasflow/demo"
                className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/products/gasflow/demo"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
