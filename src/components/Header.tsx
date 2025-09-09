"use client";

import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { menuData } from '@/lib/data';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  ...menuData.map((item) => ({
    href: `/menu/${item.slug}`,
    label: item.title,
  })),
  { href: '/contact', label: 'Contact' },
  { href: '/admin/gallery', label: 'Gallery Admin' },
];

export function Header() {
  return (
    <header className={cn('sticky top-0 z-50 w-full bg-primary shadow-md')}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-full">
          <div className="flex items-center space-x-4 px-8">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Button
                  asChild
                  variant="ghost"
                  className="text-white hover:bg-primary/80 hover:text-white text-base font-normal"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
                {index < navLinks.length - 1 && <span className="text-white/50">|</span>}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
              <nav className="flex flex-col h-full">
                <div className="p-4 border-b bg-primary">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <div className="flex-grow flex flex-col items-center gap-2 p-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-card-foreground hover:text-primary transition-colors w-full text-center py-2 rounded-md hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="p-4 mt-auto border-t">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Free Catering Quote</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
