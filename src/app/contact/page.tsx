"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Headphones,
  Calendar,
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { GradientButton } from "@/components/shared/GradientButton";
import { fadeInUp, stagger } from "@/lib/motion";
import { Navbar } from "@/components/layout/Navbar";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "sales@biznhand.com",
    action: "mailto:sales@biznhand.com",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+92 300 1234567",
    action: "tel:+923001234567",
    color: "from-purple-600 to-purple-700",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Lahore, Pakistan",
    action: "#",
    color: "from-indigo-600 to-indigo-700",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon-Sat: 9 AM - 6 PM",
    action: "#",
    color: "from-cyan-600 to-cyan-700",
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team",
    availability: "Available 24/7",
  },
  {
    icon: Headphones,
    title: "Phone Support",
    description: "Speak with an expert",
    availability: "Mon-Sat 9 AM - 6 PM",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a time that works for you",
    availability: "Pick your time",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  💬 Get in Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                We're Here to
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Help You Succeed
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Have questions about Gasflow? Want to schedule a demo? Our team
                is ready to help you transform your LPG business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-slate-900 dark:text-white font-medium">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Contact Form & Info */}
        <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject *
                    </label>
                    <Select name="subject" required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <GradientButton size="lg" type="submit" className="w-full">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </GradientButton>
                </form>
              ) : (
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Other Ways to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="group hover:scale-[1.02] transition-transform duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                          <option.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            {option.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {option.description}
                          </CardDescription>
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            {option.availability}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p className="font-semibold">Our Office</p>
                    <p className="text-sm text-blue-100">
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking
              for?{" "}
              <a
                href="#contact-form"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact us
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly can I get started?",
                a: "You can start using Gasflow within 24 hours of signing up. We'll help you set up your account and import your data.",
              },
              {
                q: "Do you offer training?",
                a: "Yes! We provide comprehensive onboarding and training for your team, along with ongoing support and resources.",
              },
              {
                q: "What about data security?",
                a: "Your data is encrypted and stored securely in the cloud with daily backups. We follow industry-standard security practices.",
              },
              {
                q: "Can I try before buying?",
                a: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{faq.q}</CardTitle>
                    <CardDescription>{faq.a}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
