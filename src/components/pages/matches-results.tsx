import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, Star, Lock, Mail, Phone, MapPin, 
  Briefcase, GraduationCap, ChevronRight, Eye
} from 'lucide-react';

const MatchesResults = () => {
  // Mock data for demonstration
  const visibleMatches = [
    {
      id: 1,
      name: "Sarah Miller",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      education: "MS Computer Science",
      experience: "8 years",
      matchScore: 95,
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      id: 2,
      name: "James Wilson",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      education: "BS Computer Science",
      experience: "5 years",
      matchScore: 88,
      skills: ["JavaScript", "TypeScript", "MongoDB", "Docker"]
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "Frontend Engineer",
      company: "Creative Tech",
      location: "Seattle, WA",
      education: "BS Software Engineering",
      experience: "4 years",
      matchScore: 82,
      skills: ["React", "Vue.js", "CSS", "UI/UX"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Your Matches</h1>
              <p className="text-sm text-gray-500">10 candidates found</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Visible Matches */}
          <div className="space-y-6 mb-8">
            {visibleMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    {/* Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-semibold text-blue-600">
                            {match.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{match.name}</h3>
                          <p className="text-gray-600">{match.title}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{match.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{match.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <GraduationCap className="h-4 w-4" />
                          <span>{match.education}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Star className="h-4 w-4" />
                          <span>{match.company}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {match.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Match Score */}
                    <div className="ml-6 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-green-500">{match.matchScore}%</span>
                      </div>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full">
                          <Mail className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Locked Matches */}
          <Card className="bg-gradient-to-b from-white to-gray-50 border-dashed">
            <CardContent className="p-8 text-center">
              <Lock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">
                7 More High-Quality Matches Available
              </h3>
              <p className="text-gray-600 mb-6">
                Unlock all matches including candidates with match scores up to 98%
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>

          {/* Premium Features Preview */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card className="text-center p-4">
              <CardContent>
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <h4 className="font-semibold mb-1">Best Matches First</h4>
                <p className="text-sm text-gray-600">Access to top-rated candidates</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent>
                <Phone className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold mb-1">Direct Contact</h4>
                <p className="text-sm text-gray-600">Connect with candidates instantly</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent>
                <ChevronRight className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold mb-1">Unlimited Access</h4>
                <p className="text-sm text-gray-600">View all matching profiles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatchesResults;