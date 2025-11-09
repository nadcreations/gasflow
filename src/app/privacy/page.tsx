"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { Shield, Lock, Eye, Database, Bell, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function GasflowPrivacyPage() {
  return (
    <>
      <Navbar variant="gasflow" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <AnimatedSection className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Gasflow by Biznhand — Last updated: January 2025
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <SectionWrapper className="bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                  Your Privacy Matters
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  At Gasflow, we take your privacy seriously. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our gas distribution management
                  platform. Please read this privacy policy carefully.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  <Database className="w-8 h-8 text-indigo-600" />
                  Information We Collect
                </h2>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                  Personal Information
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    phone number, company name, and business address
                  </li>
                  <li>
                    <strong>Business Data:</strong> Customer information,
                    inventory records, transaction history, and billing
                    information
                  </li>
                  <li>
                    <strong>Location Data:</strong> GPS coordinates for delivery
                    tracking and route optimization
                  </li>
                  <li>
                    <strong>Device Information:</strong> Device type, operating
                    system, browser type, IP address, and mobile device
                    identifiers
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Log data, feature usage, and
                    interaction with our platform
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                  Automatically Collected Information
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When you access Gasflow, we automatically collect certain
                  information including:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>Usage patterns and preferences</li>
                  <li>
                    Technical information about your device and connection
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Performance and error reports</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  <Eye className="w-8 h-8 text-purple-600" />
                  How We Use Your Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We use the information we collect for various purposes:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Service Delivery:</strong> To provide, maintain, and
                    improve Gasflow platform features
                  </li>
                  <li>
                    <strong>Account Management:</strong> To manage your account,
                    authenticate users, and provide customer support
                  </li>
                  <li>
                    <strong>Business Operations:</strong> To process
                    transactions, generate invoices, and manage inventory
                  </li>
                  <li>
                    <strong>Analytics & Insights:</strong> To analyze usage
                    trends and provide business intelligence features
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you updates,
                    newsletters, and important notifications
                  </li>
                  <li>
                    <strong>Security:</strong> To detect, prevent, and address
                    fraud, security risks, and technical issues
                  </li>
                  <li>
                    <strong>Compliance:</strong> To comply with legal
                    obligations and regulatory requirements
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  <Users className="w-8 h-8 text-green-600" />
                  Information Sharing
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly
                    authorize us to share specific information
                  </li>
                  <li>
                    <strong>Service Providers:</strong> With third-party vendors
                    who perform services on our behalf (cloud hosting, payment
                    processing, analytics)
                  </li>
                  <li>
                    <strong>Business Partners:</strong> With integration
                    partners when you explicitly connect third-party services
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    court order, or government request
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>Protection of Rights:</strong> To protect the
                    rights, property, and safety of Gasflow, our users, and the
                    public
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 font-semibold mb-6">
                  We do not sell your personal information to third parties.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  <Lock className="w-8 h-8 text-red-600" />
                  Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We implement industry-standard security measures to protect
                  your information:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Encryption:</strong> All data transmitted between
                    your device and our servers is encrypted using TLS/SSL
                  </li>
                  <li>
                    <strong>Data at Rest:</strong> Sensitive data is encrypted
                    in our databases using AES-256 encryption
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Role-based access controls
                    and multi-factor authentication
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> Periodic security
                    assessments and penetration testing
                  </li>
                  <li>
                    <strong>Compliance:</strong> SOC 2 Type II certified and
                    GDPR compliant
                  </li>
                  <li>
                    <strong>Backups:</strong> Daily automated backups with
                    secure storage and disaster recovery
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  Data Retention
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We retain your information for as long as necessary to provide
                  our services and comply with legal obligations:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Active Accounts:</strong> Data is retained while
                    your account is active
                  </li>
                  <li>
                    <strong>Closed Accounts:</strong> After account closure,
                    data is retained for 90 days then permanently deleted
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> Some data may be
                    retained longer to comply with tax, accounting, or legal
                    requirements
                  </li>
                  <li>
                    <strong>Aggregated Data:</strong> Anonymized and aggregated
                    data may be retained indefinitely for analytics
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  Your Rights and Choices
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Export:</strong> Download your data in a portable
                    format (CSV, JSON)
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Restrict Processing:</strong> Limit how we use your
                    information
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:privacy@gasflow.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    privacy@gasflow.com
                  </a>
                  .
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  <Bell className="w-8 h-8 text-yellow-600" />
                  Cookies and Tracking
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                  <li>Maintain your session and authentication</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze usage patterns and improve our platform</li>
                  <li>Provide personalized content and features</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  You can control cookies through your browser settings. Note
                  that disabling cookies may affect platform functionality.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  Children's Privacy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Gasflow is not intended for users under the age of 18. We do
                  not knowingly collect personal information from children. If
                  you believe we have collected information from a child, please
                  contact us immediately.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  International Data Transfers
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your information in
                  accordance with this Privacy Policy and applicable laws.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  Changes to This Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We may update this Privacy Policy periodically. We will notify
                  you of significant changes via email or through the platform.
                  Continued use of Gasflow after changes constitutes acceptance
                  of the updated policy.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
                  Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  If you have questions or concerns about this Privacy Policy or
                  our data practices:
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 not-prose mt-6">
                  <p className="text-slate-900 dark:text-white font-semibold mb-2">
                    Biznhand (Pvt) Ltd — Gasflow Division
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Email:{" "}
                    <a
                      href="mailto:privacy@gasflow.com"
                      className="text-blue-600 hover:underline"
                    >
                      privacy@gasflow.com
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
