
"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, MicOff, Send, Paperclip, X, Check, Plus,
  ArrowLeft, ChevronRight, User, Bot, Tag
} from 'lucide-react';

const ChatInterface = ({ userType = 'jobseeker' }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(45); // Example progress value
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with Progress */}
      <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-900">AI Assistant</h1>
              <div className="flex items-center space-x-2">
                <Progress value={progress} className="h-2" />
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 py-6">
            {/* AI Welcome Message */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              <Card className="flex-1">
                <CardContent className="p-4">
                  <p className="text-gray-800">
                    Hi! I'm your AI assistant. I'll help you create a strong profile for job matching. 
                    Let's start with your work experience. Could you tell me about your most recent role?
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* User Response */}
            <div className="flex items-start space-x-3 justify-end">
              <Card className="flex-1">
                <CardContent className="p-4 bg-blue-50">
                  <p className="text-gray-800">
                    I was a Senior Software Engineer at Tech Corp for 3 years...
                  </p>
                </CardContent>
              </Card>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* AI Response with Suggestions */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-4 flex-1">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-gray-800 mb-4">
                      Great! Based on your experience, I suggest adding these skills to your profile:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>Cloud Architecture</span>
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>Kubernetes</span>
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>System Design</span>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* File Upload Progress */}
                <Alert className="bg-green-50 border-green-200">
                  <AlertDescription className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Paperclip className="h-4 w-4 text-green-500" />
                      <span>resume.pdf uploaded successfully</span>
                    </div>
                    <X className="h-4 w-4 text-gray-500 cursor-pointer" />
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                className="flex-shrink-0"
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? (
                  <MicOff className="h-5 w-5 text-red-500" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </Button>
              
              <Button variant="outline" className="flex-shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {isRecording && (
              <div className="mt-2 flex items-center justify-center space-x-2 text-red-500 text-sm">
                <span className="animate-pulse">●</span>
                <span>Recording... Click microphone to stop</span>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatInterface;