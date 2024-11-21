"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Check,
  X,
  CreditCard,
  Star,
  Clock,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Crown,
  ChevronLeft,
  Loader2,
  Calendar,
} from "lucide-react";

type Plan = {
  name: string;
  price: { monthly: number; yearly: number };
  features: string[];
  popular?: boolean;
  limitations?: string[];
};

type PlanKey = "free" | "pro" | "enterprise";

const plans: Record<PlanKey, Plan> = {
  free: {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    features: [
      "View 3 matches per job",
      "Basic profile creation",
      "Standard support",
    ],
    limitations: [
      "Limited match visibility",
      "No direct contact",
      "Basic analytics",
    ],
  },
  pro: {
    name: "Professional",
    price: { monthly: 29, yearly: 290 },
    features: [
      "View all matches",
      "Direct candidate contact",
      "Advanced analytics",
      "Priority support",
      "Custom job alerts",
      "Profile highlighting",
    ],
    popular: true,
  },
  enterprise: {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom API access",
      "Team collaboration",
      "Advanced reporting",
      "White-label options",
    ],
  },
};

const SubscriptionInterface = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanSelection = (plan: PlanKey) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {!showPayment ? (
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get access to premium features and find the perfect match faster
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-8">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
                <span className="ml-2 text-xs text-green-600 font-normal">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(plans).map(([key, plan]) => (
              <Card
                key={key}
                className={`relative ${
                  plan.popular ? "border-blue-500 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                    <div className="text-4xl font-bold mb-2">
                      ${plan.price[billingCycle]}
                      <span className="text-base font-normal text-gray-600">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations?.map((limitation, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-400"
                      >
                        <X className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      key === "free"
                        ? "bg-gray-500 hover:bg-gray-600"
                        : plan.popular
                        ? "bg-blue-500 hover:bg-blue-600"
                        : ""
                    }`}
                    onClick={() => handlePlanSelection(key as PlanKey)}
                  >
                    {key === "free" ? "Current Plan" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        /* Payment Form */
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-lg mx-auto">
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => setShowPayment(false)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Plans
            </Button>

            <Card>
              <CardContent className="p-6">
                {selectedPlan && (
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {plans[selectedPlan].name}
                      </h2>
                      <p className="text-gray-600">
                        {billingCycle === "yearly"
                          ? "Annual"
                          : "Monthly"}{" "}
                        subscription
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        ${plans[selectedPlan].price[billingCycle]}
                      </div>
                      <p className="text-sm text-gray-600">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </p>
                    </div>
                  </div>
                )}

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Information
                    </label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <CreditCard className="h-4 w-4 mr-2" />
                    )}
                    Subscribe Now
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment processing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionInterface;
