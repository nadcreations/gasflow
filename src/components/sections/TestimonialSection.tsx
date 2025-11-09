"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Muhammad Asif",
    role: "Managing Director",
    company: "Karachi Gas Distributors",
    quote:
      "Gasflow transformed our business operations. We've seen 50% improvement in efficiency and our customers are happier than ever.",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    role: "Operations Manager",
    company: "Lahore LPG Traders",
    quote:
      "The real-time inventory tracking has been a game-changer. No more stockouts or overstocking issues. Highly recommended!",
    rating: 5,
  },
  {
    name: "Imran Sheikh",
    role: "CEO",
    company: "Islamabad Energy Solutions",
    quote:
      "Best investment we've made for our business. The multi-branch dashboard gives us complete visibility and control.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <SectionWrapper className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          See what our customers have to say about Gasflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <Quote className="text-blue-600 mb-4" size={32} />
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={16}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
