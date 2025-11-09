"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GradientButton } from "@/components/shared/GradientButton";
import { Navbar } from "@/components/layout/Navbar";

export default function GasflowDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                See Gasflow in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Action
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Schedule a personalized demo or get in touch with our team to
                learn how Gasflow can transform your business.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Demo & Contact Form */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="demo" className="w-full">
              <TabsList className="grid w-full grid-cols-2 pb-14 mb-12">
                <TabsTrigger
                  value="demo"
                  className="text-lg flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Demo
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="text-lg flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </TabsTrigger>
              </TabsList>

              {/* Demo Tab */}
              <TabsContent value="demo">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <AnimatedSection>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Book Your Free Demo
                      </h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Get a personalized walkthrough of Gasflow tailored to
                        your business needs.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                              30-Minute Session
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Interactive demo customized to your industry
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                              Q&A Session
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Ask our experts anything about Gasflow
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                              Free Trial Access
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Get started with a free trial after the demo
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                              No Commitment
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Absolutely free with no obligation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection>
                    <GlassCard gradient={false}>
                      {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Work Email *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Phone Number *
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+92 300 1234567"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Company Name *
                            </label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              required
                              placeholder="ABC Gas Distribution"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Number of Employees
                            </label>
                            <select
                              name="employees"
                              value={formData.employees}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Select range</option>
                              <option value="1-10">1-10</option>
                              <option value="11-50">11-50</option>
                              <option value="51-200">51-200</option>
                              <option value="200+">200+</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Message (Optional)
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Tell us about your requirements..."
                            />
                          </div>

                          <GradientButton
                            type="submit"
                            size="lg"
                            className="w-full text-center"
                            icon={Send}
                          >
                            Schedule Demo
                          </GradientButton>

                          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                            By submitting, you agree to our Privacy Policy and
                            Terms of Service.
                          </p>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            Request Submitted!
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            Our team will contact you within 24 hours to
                            schedule your demo.
                          </p>
                        </motion.div>
                      )}
                    </GlassCard>
                  </AnimatedSection>
                </div>
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <AnimatedSection>
                    <GlassCard gradient={false}>
                      {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Get in Touch
                          </h3>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+92 300 1234567"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Company Name
                            </label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="ABC Gas Distribution"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                              Message *
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="How can we help you?"
                            />
                          </div>

                          <GradientButton
                            type="submit"
                            size="lg"
                            className="w-full"
                            icon={Send}
                          >
                            Send Message
                          </GradientButton>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            Message Sent!
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            We'll get back to you as soon as possible.
                          </p>
                        </motion.div>
                      )}
                    </GlassCard>
                  </AnimatedSection>

                  <AnimatedSection>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Contact Information
                      </h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Have questions? Our team is here to help you succeed.
                      </p>

                      <div className="space-y-6">
                        <GlassCard>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                              <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                Email Us
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                For general inquiries and support
                              </p>
                              <a
                                href="mailto:support@gasflow.com"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                support@gasflow.com
                              </a>
                            </div>
                          </div>
                        </GlassCard>

                        <GlassCard>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                Call Us
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                Monday - Friday, 9am - 6pm PKT
                              </p>
                              <a
                                href="tel:+923001234567"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                +92 300 1234567
                              </a>
                            </div>
                          </div>
                        </GlassCard>

                        <GlassCard>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                                Visit Us
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                Biznhand Office
                                <br />
                                Lahore, Pakistan
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
