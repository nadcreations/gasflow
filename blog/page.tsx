"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  FileText,
  Video,
  Download,
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
import { Input } from "@/components/ui/input";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { fadeInUp, stagger } from "@/lib/motion";
import { Navbar } from "@/components/layout/Navbar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  { name: "All", count: 24 },
  { name: "Best Practices", count: 8 },
  { name: "Industry Insights", count: 6 },
  { name: "Product Updates", count: 5 },
  { name: "Customer Stories", count: 5 },
];

const featuredArticle = {
  title: "10 Ways to Optimize Your LPG Distribution Network",
  excerpt:
    "Learn proven strategies to improve efficiency, reduce costs, and deliver better service to your customers.",
  author: "Sarah Khan",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  category: "Best Practices",
  image: "/images/blog/featured.jpg",
  slug: "optimize-lpg-distribution",
};

const articles = [
  {
    title: "How Digital Transformation is Changing the LPG Industry",
    excerpt:
      "Explore how modern technology is revolutionizing traditional LPG distribution and what it means for your business.",
    author: "Ahmed Hassan",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Industry Insights",
    image: "/images/blog/digital-transformation.jpg",
    slug: "digital-transformation-lpg",
  },
  {
    title: "5 Features Your LPG Management Software Must Have",
    excerpt:
      "Essential capabilities that separate good software from great software in the LPG distribution business.",
    author: "Muhammad Ali",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    category: "Best Practices",
    image: "/images/blog/must-have-features.jpg",
    slug: "essential-software-features",
  },
  {
    title: "Customer Success Story: 50% Efficiency Increase",
    excerpt:
      "See how Karachi Gas Distributors transformed their operations with Gasflow and achieved remarkable results.",
    author: "Fatima Raza",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    category: "Customer Stories",
    image: "/images/blog/success-story.jpg",
    slug: "karachi-gas-success",
  },
  {
    title: "Understanding Multi-Branch Management Best Practices",
    excerpt:
      "Key strategies for effectively managing multiple LPG distribution centers from a single platform.",
    author: "Sarah Khan",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    image: "/images/blog/multi-branch.jpg",
    slug: "multi-branch-best-practices",
  },
  {
    title: "New Feature: Advanced Analytics Dashboard",
    excerpt:
      "Introducing our most requested feature - comprehensive analytics to help you make data-driven decisions.",
    author: "Ahmed Hassan",
    date: "Nov 15, 2024",
    readTime: "3 min read",
    category: "Product Updates",
    image: "/images/blog/analytics-update.jpg",
    slug: "analytics-dashboard-launch",
  },
  {
    title: "Reducing Delivery Times: A Complete Guide",
    excerpt:
      "Practical tips and strategies to optimize your delivery routes and improve customer satisfaction.",
    author: "Muhammad Ali",
    date: "Nov 8, 2024",
    readTime: "6 min read",
    category: "Best Practices",
    image: "/images/blog/delivery-optimization.jpg",
    slug: "delivery-optimization-guide",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Industry Report 2024",
    description: "Comprehensive analysis of LPG industry trends",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    icon: Video,
    title: "Product Walkthrough",
    description: "Complete video tutorial of Gasflow features",
    type: "Video",
    size: "45 min",
  },
  {
    icon: FileText,
    title: "Implementation Checklist",
    description: "Step-by-step guide to getting started",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    icon: FileText,
    title: "ROI Calculator Template",
    description: "Calculate potential savings with Gasflow",
    type: "Excel",
    size: "850 KB",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  📚 Resources & Insights
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Learn, Grow, and
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Succeed Together
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert insights, best practices, and resources to help you get
                the most out of Gasflow and grow your LPG business.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles, guides, and resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-blue-600" size={24} />
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                Featured Article
              </span>
            </div>
            <Card className="overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <BookOpen className="text-white" size={80} />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-4">
                    <span className="text-xs font-medium text-blue-900 dark:text-blue-100">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Button variant="gradient" size="lg" asChild>
                    <Link href={`/products/gasflow/blog/${featuredArticle.slug}`}>
                      Read Article <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Articles Section */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Latest{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                    <span className="ml-2 text-xs opacity-60">
                      ({category.count})
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {articles.map((article, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full group hover:scale-105 transition-transform duration-300">
                        <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <BookOpen className="text-white" size={48} />
                        </div>
                        <CardHeader>
                          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-2">
                            <span className="text-xs font-medium text-blue-900 dark:text-blue-100">
                              {article.category}
                            </span>
                          </div>
                          <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 dark:text-slate-400 mb-4">
                            {article.excerpt}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              {article.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              {article.readTime}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-4 w-full justify-between group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                            asChild
                          >
                            <Link href={`/products/gasflow/blog/${article.slug}`}>
                              Read More
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </SectionWrapper>

        {/* Resources Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Downloadable guides, templates, and tools to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                      <resource.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {resource.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4"
                      asChild
                    >
                      <a href="#">
                        <Download size={16} className="mr-2" />
                        Download
                      </a>
                    </Button>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Newsletter CTA */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Get the latest articles, guides, and industry insights delivered
                to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Subscribe
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
