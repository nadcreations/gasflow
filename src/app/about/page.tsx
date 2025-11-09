"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Linkedin,
  Mail,
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

const values = [
  {
    icon: Target,
    title: "Customer First",
    description:
      "We build solutions that truly solve our customers' problems and exceed their expectations.",
  },
  {
    icon: Heart,
    title: "Innovation",
    description:
      "We constantly innovate to stay ahead and deliver cutting-edge solutions for the LPG industry.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working together with our customers and partners to achieve mutual success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality products and services at all times.",
  },
];

const team = [
  {
    name: "Muhammad Ali",
    role: "Founder & CEO",
    image: "/images/team/ceo.jpg",
    bio: "15+ years experience in SaaS and LPG industry",
    linkedin: "#",
    email: "ali@biznhand.com",
  },
  {
    name: "Sarah Khan",
    role: "Head of Product",
    image: "/images/team/product.jpg",
    bio: "Product leader with passion for user experience",
    linkedin: "#",
    email: "sarah@biznhand.com",
  },
  {
    name: "Ahmed Hassan",
    role: "CTO",
    image: "/images/team/cto.jpg",
    bio: "Tech expert specializing in cloud infrastructure",
    linkedin: "#",
    email: "ahmed@biznhand.com",
  },
  {
    name: "Fatima Raza",
    role: "Head of Customer Success",
    image: "/images/team/cs.jpg",
    bio: "Dedicated to ensuring customer satisfaction",
    linkedin: "#",
    email: "fatima@biznhand.com",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Biznhand was founded with a vision to digitize the LPG industry in Pakistan.",
  },
  {
    year: "2021",
    title: "Gasflow Launched",
    description:
      "Released the first version of Gasflow to help LPG businesses go digital.",
  },
  {
    year: "2022",
    title: "100+ Businesses",
    description:
      "Reached a milestone of serving over 100 LPG businesses nationwide.",
  },
  {
    year: "2023",
    title: "Mobile Apps Released",
    description:
      "Launched iOS and Android apps for on-the-go business management.",
  },
  {
    year: "2024",
    title: "Regional Expansion",
    description:
      "Expanded operations to serve LPG businesses across South Asia.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  🌟 About Biznhand
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Empowering LPG Businesses
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Through Technology
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                We're on a mission to transform the LPG industry with modern,
                easy-to-use software that helps businesses grow and thrive in
                the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-600 to-purple-600 border-none">
                <CardHeader className="text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Target className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-3xl text-white mb-4">
                    Our Mission
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    To empower LPG distributors and dealers with cutting-edge
                    technology that simplifies operations, increases efficiency,
                    and drives growth. We believe every business deserves access
                    to world-class management tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-indigo-600 to-purple-600 border-none">
                <CardHeader className="text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Eye className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-3xl text-white mb-4">
                    Our Vision
                  </CardTitle>
                  <CardDescription className="text-indigo-100 text-lg">
                    To become the leading technology partner for the LPG
                    industry across South Asia and beyond. We envision a future
                    where every LPG business operates seamlessly with digital
                    tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Values Section */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Our Core
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Values
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The principles that guide everything we do at Biznhand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center group hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="text-white" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {value.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Timeline/Milestones Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Key milestones that shaped Gasflow into what it is today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-transparent"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team Section */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The talented people behind Gasflow who work hard every day to
                serve you better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full group hover:scale-105 transition-transform duration-300">
                    <CardContent className="pt-6">
                      <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                        <Users className="text-white" size={80} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {member.bio}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={member.linkedin}>
                            <Linkedin size={16} />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={`mailto:${member.email}`}>
                            <Mail size={16} />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Stats Section */}
        <SectionWrapper className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Active Businesses</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Transactions Processed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                Whether you're looking to transform your LPG business or join
                our growing team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/products/gasflow/demo">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
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
