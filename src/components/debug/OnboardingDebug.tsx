"use client";
import React from "react";
import { useBusinessContext } from "@/provider/BusinessProvider";
import { useProfileContext } from "@/provider/ProfileProvider";
import { useAuth } from "@/hooks/auth/useAuth";
import { useBusinessByProfileId } from "@/server/usebusiness";
import { usePlanByBusiness } from "@/server/usePlan";

const OnboardingDebug: React.FC = () => {
  const auth = useAuth();
  const { profile } = useProfileContext();
  const { business, plan } = useBusinessContext();

  // Direct queries for debugging
  const { data: directBusiness, isLoading: directBusinessLoading } =
    useBusinessByProfileId(profile?.id ?? "", !!auth?.user && !!profile);
  const { data: directPlan, isLoading: directPlanLoading } = usePlanByBusiness(
    directBusiness?.id ?? ""
  );

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-md max-h-96 overflow-y-auto z-50">
      <h4 className="font-bold mb-2">🔍 Onboarding Debug</h4>

      <div className="space-y-2">
        <div>
          <strong>Auth:</strong>
          <div className="ml-2">
            User: {auth?.user ? "✅" : "❌"} ({auth?.user?.email})
            <br />
            Loading: {auth?.loading ? "⏳" : "✅"}
          </div>
        </div>

        <div>
          <strong>Profile:</strong>
          <div className="ml-2">
            Exists: {profile ? "✅" : "❌"} ({profile?.id})
            <br />
            Name: {profile?.displayName}
          </div>
        </div>

        <div>
          <strong>Business (Context):</strong>
          <div className="ml-2">
            Exists: {business?.id ? "✅" : "❌"} ({business?.id})
            <br />
            Name: {business?.name}
            <br />
            Loading: {directBusinessLoading ? "⏳" : "✅"}
          </div>
        </div>

        <div>
          <strong>Business (Direct Query):</strong>
          <div className="ml-2">
            Exists: {directBusiness?.id ? "✅" : "❌"} ({directBusiness?.id})
            <br />
            Name: {directBusiness?.name}
            <br />
            Loading: {directBusinessLoading ? "⏳" : "✅"}
          </div>
        </div>

        <div>
          <strong>Plan (Context):</strong>
          <div className="ml-2">
            Exists: {plan?.id ? "✅" : "❌"} ({plan?.id})
            <br />
            Name: {plan?.name}
            <br />
            Loading: {directPlanLoading ? "⏳" : "✅"}
          </div>
        </div>

        <div>
          <strong>Plan (Direct Query):</strong>
          <div className="ml-2">
            Exists: {directPlan?.id ? "✅" : "❌"} ({directPlan?.id})
            <br />
            Name: {directPlan?.name}
            <br />
            Loading: {directPlanLoading ? "⏳" : "✅"}
          </div>
        </div>

        <div>
          <strong>Current Path:</strong> {window.location.pathname}
        </div>

        <div>
          <strong>Expected Flow:</strong>
          <div className="ml-2">
            {!auth?.user ? "❌ Need Login" : "✅ Logged In"} →{" "}
            {!profile ? "❌ Need Profile" : "✅ Profile"} →{" "}
            {!directBusiness ? "❌ Need Business" : "✅ Business"} →{" "}
            {!directPlan ? "❌ Need Plan" : "✅ Plan"} → Dashboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingDebug;
