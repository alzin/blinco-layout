import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, FileText, Video, ArrowLeft } from 'lucide-react';

const InputMethodSelection = ({ userType = 'jobseeker' }) => {
  const isJobSeeker = userType === 'jobseeker';
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">
              {isJobSeeker ? 'Share Your Profile' : 'Post Your Job'}
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {isJobSeeker 
              ? 'How would you like to share your information?' 
              : 'How would you like to describe your job?'}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Choose the method that works best for you. Our AI will guide you through the process.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chat Options */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chat with AI</h3>
              
              {/* Text Chat Option */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">Text Chat</h4>
                      <p className="text-gray-600 text-sm">
                        chat with our AI assistant
                      </p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Voice Chat Option */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Mic className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">Voice Chat</h4>
                      <p className="text-gray-600 text-sm">
                        Speak with our AI assistant
                      </p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Start Voice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upload Options */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Files</h3>
              
              {/* Document Upload Option */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">
                        {isJobSeeker ? 'Upload CV' : 'Upload Job Description'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {isJobSeeker 
                          ? 'PDF, DOC, or DOCX formats' 
                          : 'Share your job requirements'}
                      </p>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Upload
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Video Upload Option - Only for Job Seekers */}
              {isJobSeeker && (
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <Video className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">Upload Video</h4>
                        <p className="text-gray-600 text-sm">
                          Share a video introduction
                        </p>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        Upload
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need help? Our AI assistant can guide you through any method you choose.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InputMethodSelection;