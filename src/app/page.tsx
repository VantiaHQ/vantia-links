'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { profileData, linksData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { incrementClickCount } from '@/lib/supabase';


export default function Home() {
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState(false);
  

  return (
    <main className="animated-grid-background flex flex-col items-center p-4 overflow-x-hidden">
      <div className="relative z-10 w-full max-w-md mx-auto pt-16">
        <header className="text-center space-y-4 px-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Image 
            src="/images/full-logo-negativo-color-vertical.png" 
            alt="Vantia Logo"
            width={240}
            height={128}
            className="mx-auto"
            priority
          />
          <div>
            <p className="text-muted-foreground text-xl mt-2 font-headline">{profileData.bio}</p>
          </div>
        </header>
        
        <section className="space-y-4">
          {linksData.map((link, index) => (
            <Button
              key={link.id}
              asChild
              variant="outline"
              className="w-full h-16 bg-card hover:bg-card/75 hover:scale-[1.02] transition-all duration-500 ease-in-out shadow-lg border-border hover:border-primary/50 hover:shadow-primary/20 hover:shadow-[0_0_20px] animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <Link 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between px-4"
                onClick={() => incrementClickCount(link.id)}
              >
                <div className="flex items-center gap-4">
                  <link.Icon className="w-8 h-8 text-primary" />
                  <span className="text-3xl text-foreground/90 font-headline">{link.title}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            </Button>
          ))}
        </section>
      </div>
      
      <div 
        onClick={() => setIsFirstButtonClicked(true)} 
        className="fixed bottom-0 left-0 h-[100px] w-1/2 z-20 cursor-default" 
        aria-label="Reveal dashboard link"
      ></div>

      {isFirstButtonClicked && (
        <Link 
          href="/dashboard" 
          className="fixed bottom-0 right-0 h-[100px] w-1/2 z-20 cursor-default" 
          aria-label="Go to dashboard"
        ></Link>
      )}
    </main>
  );
}