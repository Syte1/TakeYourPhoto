"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import "./globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const signUp = () => {
    supabase.auth.signUp({
      email: "belalk@live.ca",
      password: "test12",
    });
  };
  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "belalk@live.ca",
      password: "test12",
    });
  };
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
