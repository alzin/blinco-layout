import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserRound, Briefcase } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-blue-900">Blinco</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find Your Perfect Match with AI
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Whether you're looking for a job or hiring talent, our AI-powered platform makes the perfect match.
          </p>

          {/* User Type Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Job Seeker Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <UserRound size={48} className="text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">I'm a Job Seeker</h3>
                  <p className="text-gray-600 mb-6">
                    Upload your CV or chat with our AI to find your dream job
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Employer Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Briefcase size={48} className="text-green-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">I'm an Employer</h3>
                  <p className="text-gray-600 mb-6">
                    Find the perfect candidates for your job openings
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start Hiring
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 mt-12 bg-gray-50">
        <div className="container mx-auto text-center text-gray-600">
          <p>© 2024 Blinco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;