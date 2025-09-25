'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import DecorativeElements from '@/components/common/DecorativeElements'
import { AuthMode } from '@/app/page'

interface AuthLayoutProps {
  children: ReactNode
  authMode: AuthMode
}

export default function AuthLayout({ children, authMode }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Decorative Elements */}
        <DecorativeElements />
        
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Hero Image */}
          <div className="lg:w-1/2 relative bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col justify-center items-center text-white p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">
                Travellista Tours
              </h1>
              <p className="text-lg lg:text-xl opacity-90 max-w-md">
                Travel is the only purchase that enriches you in ways beyond material wealth
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full max-w-md h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Adventure"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Bottom decorative landmarks */}
            <div className="absolute bottom-0 right-0 opacity-20">
              <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
                {/* Taj Mahal silhouette */}
                <path d="M100 20 L85 35 L85 50 L115 50 L115 35 Z" fill="currentColor" />
                <circle cx="100" cy="20" r="8" fill="currentColor" />
                <path d="M90 50 L90 60 L110 60 L110 50" fill="currentColor" />
                
                {/* Building silhouettes */}
                <rect x="130" y="30" width="15" height="30" fill="currentColor" />
                <rect x="150" y="25" width="12" height="35" fill="currentColor" />
                <rect x="165" y="35" width="10" height="25" fill="currentColor" />
                <rect x="180" y="20" width="15" height="40" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          {/* Right Side - Auth Form */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}