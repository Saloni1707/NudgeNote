"use client"
import React, { useState, useEffect } from 'react';
import { Bell, Shield, Clock, Brain, CheckCircle, Zap, Target, Smartphone, Lock, ArrowRight, Star } from 'lucide-react';

const NudgeNoteLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Context-Aware Reminders",
      description: "Set reminders that understand your situation and adapt accordingly",
      color: "bg-yellow-200 rotate-2",
      textColor: "text-yellow-800"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Perfect Timing",
      description: "Get nudges exactly when you need them most",
      color: "bg-blue-200 -rotate-1",
      textColor: "text-blue-800"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Alerts",
      description: "Receive alerts tailored specifically to your habits and preferences",
      color: "bg-green-200 rotate-1",
      textColor: "text-green-800"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy-First Design",
      description: "Your data stays private with our secure, trust-first approach",
      color: "bg-purple-200 -rotate-2",
      textColor: "text-purple-800"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Simple Dashboard",
      description: "Manage all your tasks with an intuitive, clean interface",
      color: "bg-pink-200 rotate-3",
      textColor: "text-pink-800"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Create in Seconds",
      description: "Set up new nudges effortlessly in just a few clicks",
      color: "bg-orange-200 -rotate-1",
      textColor: "text-orange-800"
    }
  ];

  const StickyNote = ({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay: number }) => (
    <div 
      className={`sticky-note ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <style jsx>{`
        .sticky-note {
          transition: transform 0.1s ease-out;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1);
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Floating Sticky Notes Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <StickyNote children="" className="absolute top-20 left-10 bg-yellow-200 w-16 h-16 rotate-12 float-animation" delay={0} />
        <StickyNote children="" className="absolute top-40 right-20 bg-pink-200 w-12 h-12 -rotate-6 float-animation" delay={1} />
        <StickyNote children="" className="absolute bottom-40 left-20 bg-green-200 w-14 h-14 rotate-6 float-animation" delay={2} />
        <StickyNote children="" className="absolute top-60 left-1/2 bg-blue-200 w-10 h-10 -rotate-12 float-animation" delay={0.5} />
        <StickyNote children="" className="absolute bottom-20 right-10 bg-purple-200 w-18 h-18 rotate-3 float-animation" delay={1.5} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">NudgeNote</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Daily
              <span className="gradient-text block">Nudge Companion</span>
            </h1>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay organized and on track every day with smart notifications that keep you focused
            </p>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Sticky Notes */}
      <section id="features" className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Why Choose NudgeNote?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay organized and focused, designed with simplicity in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${feature.color.includes('rotate') ? '' : 'rotate-1'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${feature.textColor} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`${feature.textColor} opacity-80`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">
            Get Started in 3 Simple Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-yellow-200 p-8 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-yellow-800 text-6xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Sign Up Securely</h3>
                <p className="text-yellow-700">Create your account with our secure authentication system</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-200 p-8 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-blue-800 text-6xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Create Your Nudges</h3>
                <p className="text-blue-700">Set up personalized reminders and notifications effortlessly</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-green-200 p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-green-800 text-6xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Stay Focused</h3>
                <p className="text-green-700">Receive smart notifications that keep you on track</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust NudgeNote to keep them organized and focused every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">NudgeNote</span>
              </div>
              <p className="text-gray-400">
                Your trusted daily nudge companion for staying organized and focused.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NudgeNote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NudgeNoteLanding;