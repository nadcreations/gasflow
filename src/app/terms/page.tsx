"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import {
  FileText,
  Shield,
  AlertCircle,
  Users,
  CreditCard,
  Ban,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function GasflowTermsPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <AnimatedSection className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Gasflow by Biznhand — Last updated: January 2025
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <SectionWrapper className="bg-white dark:bg-slate-900 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-0">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
                  <FileText className="w-8 h-8 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  These Terms and Conditions constitute a legally binding
                  agreement between you and Biznhand (Pvt) Ltd ("Company", "we",
                  "us", or "our") concerning your access to and use of the
                  Gasflow platform, including any related services, mobile
                  applications, and features (collectively, the "Services").
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  By accessing or using Gasflow, you agree to be bound by these
                  Terms. If you do not agree with any part of these Terms, you
                  must not use our Services.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  <Users className="w-8 h-8 text-indigo-600" />
                  User Accounts
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Account Registration
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  To use Gasflow, you must create an account. You agree to:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>
                    Maintain and update your information to keep it accurate and
                    current
                  </li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized access or security
                    breach
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Account Eligibility
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  You must be at least 18 years old and have the legal capacity
                  to enter into contracts. By creating an account, you represent
                  that you meet these requirements.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Account Termination
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We reserve the right to suspend or terminate your account at
                  any time if you violate these Terms or engage in fraudulent,
                  illegal, or abusive behavior.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  <Shield className="w-8 h-8 text-purple-600" />
                  Acceptable Use
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You agree to use Gasflow only for lawful purposes and in
                  accordance with these Terms. You agree NOT to:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    Violate any applicable laws, regulations, or third-party
                    rights
                  </li>
                  <li>
                    Upload, transmit, or distribute any malicious code, viruses,
                    or harmful content
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems or other
                    users' accounts
                  </li>
                  <li>
                    Reverse engineer, decompile, or attempt to extract source
                    code from the platform
                  </li>
                  <li>
                    Use automated systems (bots, scrapers) without written
                    permission
                  </li>
                  <li>
                    Interfere with or disrupt the Services or servers connected
                    to the platform
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>
                    Use the Services for any illegal, fraudulent, or abusive
                    purpose
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  <CreditCard className="w-8 h-8 text-green-600" />
                  Subscription and Payment
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Subscription Plans
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Gasflow offers various subscription plans with different
                  features and pricing. By subscribing, you agree to pay the
                  applicable fees for your selected plan.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Billing and Renewals
                </h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    Subscriptions automatically renew at the end of each billing
                    cycle unless canceled
                  </li>
                  <li>
                    You authorize us to charge your payment method for renewal
                    fees in advance
                  </li>
                  <li>
                    We will notify you of upcoming charges at least 7 days
                    before billing
                  </li>
                  <li>
                    Price changes will be communicated 30 days in advance and
                    apply to subsequent billing cycles
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Refund Policy
                </h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>30-Day Money-Back Guarantee:</strong> New customers
                    can request a full refund within 30 days of initial purchase
                  </li>
                  <li>
                    <strong>Cancellation:</strong> You may cancel your
                    subscription anytime; service continues until the end of the
                    current billing period
                  </li>
                  <li>
                    <strong>No Partial Refunds:</strong> We do not provide
                    pro-rated refunds for mid-cycle cancellations
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Payment Methods
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We accept major credit cards, debit cards, and bank transfers.
                  All payments are processed securely through our payment
                  partners.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Intellectual Property
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Our Property
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  All content, features, and functionality of Gasflow, including
                  but not limited to software, text, graphics, logos, and
                  designs, are owned by Biznhand (Pvt) Ltd and protected by
                  copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Your Content
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  You retain all rights to the data and content you upload to
                  Gasflow. By using our Services, you grant us a limited license
                  to store, process, and display your content solely for the
                  purpose of providing the Services.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Trademarks
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  "Gasflow", "Biznhand", and related logos are trademarks of
                  Biznhand (Pvt) Ltd. You may not use these marks without our
                  prior written consent.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  Disclaimers and Limitations
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Service Availability
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  While we strive for 99.9% uptime, we do not guarantee
                  uninterrupted access to Gasflow. Services may be temporarily
                  unavailable due to maintenance, updates, or circumstances
                  beyond our control.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Disclaimer of Warranties
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  GASFLOW IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
                  WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Limitation of Liability
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, BIZNHAND SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR
                  BUSINESS OPPORTUNITIES.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Our total liability to you for any claims arising from these
                  Terms or your use of Gasflow shall not exceed the amount you
                  paid us in the 12 months preceding the claim.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Indemnification
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You agree to indemnify, defend, and hold harmless Biznhand,
                  its officers, directors, employees, and agents from any
                  claims, liabilities, damages, losses, or expenses arising
                  from:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>Your use or misuse of Gasflow</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your content or data uploaded to the platform</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Data Protection and Privacy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Your use of Gasflow is also governed by our Privacy Policy. We
                  are committed to protecting your data and complying with
                  applicable data protection laws including GDPR. Please review
                  our{" "}
                  <a
                    href="/products/gasflow/privacy"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Privacy Policy
                  </a>{" "}
                  for detailed information.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  <Ban className="w-8 h-8 text-orange-600" />
                  Termination
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  By You
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  You may terminate your account at any time by contacting
                  support or using the account closure feature. Upon
                  termination, you will retain access until the end of your
                  current billing period.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  By Us
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We may suspend or terminate your account immediately if you:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>Violate these Terms or our Acceptable Use Policy</li>
                  <li>Fail to pay subscription fees</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Pose a security risk to the platform or other users</li>
                </ul>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Effect of Termination
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Upon termination, your right to use Gasflow ceases
                  immediately. You may export your data within 30 days; after
                  that, we will delete your data in accordance with our Privacy
                  Policy.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Modifications to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective immediately upon posting to the
                  platform. We will notify you of material changes via email or
                  in-app notification. Continued use of Gasflow after changes
                  constitutes acceptance of the modified Terms.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Governing Law and Dispute Resolution
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Governing Law
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  These Terms are governed by the laws of Pakistan, without
                  regard to conflict of law principles.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6">
                  Dispute Resolution
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  In the event of any dispute, you agree to first contact us to
                  attempt informal resolution. If the dispute cannot be resolved
                  informally, it shall be resolved through binding arbitration
                  in Karachi, Pakistan.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  General Provisions
                </h2>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Severability:</strong> If any provision is found
                    unenforceable, the remaining provisions remain in effect
                  </li>
                  <li>
                    <strong>Waiver:</strong> Failure to enforce any right does
                    not constitute a waiver
                  </li>
                  <li>
                    <strong>Assignment:</strong> You may not assign these Terms;
                    we may assign them without notice
                  </li>
                  <li>
                    <strong>Entire Agreement:</strong> These Terms constitute
                    the entire agreement between you and Biznhand
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> We are not liable for delays
                    or failures due to circumstances beyond our control
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12">
                  Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  If you have questions about these Terms or need assistance:
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-6 not-prose">
                  <p className="text-slate-900 dark:text-white font-semibold mb-2">
                    Biznhand (Pvt) Ltd — Gasflow Division
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Email:{" "}
                    <a
                      href="mailto:legal@gasflow.com"
                      className="text-blue-600 hover:underline"
                    >
                      legal@gasflow.com
                    </a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Support:{" "}
                    <a
                      href="mailto:support@gasflow.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@gasflow.com
                    </a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Phone: +92 300 1234567
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Address: Karachi, Pakistan
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer variant="gasflow" />
      <FloatingCTA />
    </>
  );
}
