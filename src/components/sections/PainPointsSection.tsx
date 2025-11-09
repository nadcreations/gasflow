"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    problem: "Manual paper-based records",
    solution: "Digital cloud-based system",
  },
  {
    problem: "Inventory tracking errors",
    solution: "Real-time automated tracking",
  },
  {
    problem: "Delayed billing processes",
    solution: "Instant automated invoicing",
  },
  {
    problem: "Poor customer visibility",
    solution: "Complete customer insights",
  },
];

export function PainPointsSection() {
  return (
    <SectionWrapper className="bg-white dark:bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Say Goodbye to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Business Headaches
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {painPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-2 mb-4">
                  <X className="text-red-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.problem}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-green-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-900 dark:text-white font-medium text-sm">
                    {item.solution}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
