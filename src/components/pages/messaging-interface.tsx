"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, Send, Paperclip, MoreVertical, 
  Phone, Video, User, Clock, Check, Image,
  ChevronLeft, Smile
} from 'lucide-react';

const MessagingInterface = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  // Mock data
  const chats = [
    {
      id: 0,
      name: "Sarah Miller",
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      unread: 2,
      online: true,
      lastMessage: "Thanks for considering my application...",
      lastTime: "2m ago"
    },
    {
      id: 1,
      name: "James Wilson",
      role: "Product Manager",
      company: "Innovation Labs",
      unread: 0,
      online: false,
      lastMessage: "When would be a good time to schedule...",
      lastTime: "1h ago"
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "UX Designer",
      company: "Design Co",
      unread: 0,
      online: true,
      lastMessage: "Here's my portfolio as requested",
      lastTime: "3h ago"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      content: "Hi! Thanks for reaching out regarding the Senior Software Engineer position.",
      time: "10:30 AM",
      status: "read"
    },
    {
      id: 2,
      sender: "me",
      content: "Hello Sarah! Yes, your profile caught my attention. I'd love to discuss your experience with cloud architecture.",
      time: "10:32 AM",
      status: "read"
    },
    {
      id: 3,
      sender: "them",
      content: "Of course! I've been working extensively with AWS and have led several major cloud migration projects.",
      time: "10:33 AM",
      status: "read"
    },
    {
      id: 4,
      sender: "me",
      content: "That's exactly what we're looking for. Would you be available for a technical interview this week?",
      time: "10:35 AM",
      status: "sent"
    }
  ];

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Chat List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 text-left ${
                selectedChat === chat.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {chat.lastTime}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-1">
                    {chat.role} • {chat.company}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{chat.unread}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="md:hidden">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="font-semibold">{chats[selectedChat].name}</h2>
              <p className="text-sm text-gray-600">
                {chats[selectedChat].role} • {chats[selectedChat].company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'} rounded-lg px-4 py-2 shadow-sm`}>
                <p className="mb-1">{msg.content}</p>
                <div className={`flex items-center justify-end gap-1 text-xs ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                  <span>{msg.time}</span>
                  {msg.sender === 'me' && (
                    msg.status === 'read' ? (
                      <div className="flex">
                        <Check className="h-3 w-3" />
                        <Check className="h-3 w-3 -ml-1" />
                      </div>
                    ) : (
                      <Check className="h-3 w-3" />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-5 w-5" />
            </Button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="ghost" size="sm">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="sm">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;