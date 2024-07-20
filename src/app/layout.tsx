"use client";

import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ProgressMenuProvider } from "~/context/ProgressMenuContext";
import { ModalProvider } from "~/context/ModalContext";
import { TodoProvider } from "~/context/TodoContext";
import { ThemeProvider } from "~/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
        <div>
          <ThemeProvider>
            <TodoProvider>
              <ModalProvider>
                <ProgressMenuProvider>{children}</ProgressMenuProvider>
              </ModalProvider>
            </TodoProvider>
          </ThemeProvider>
        </div>
        <footer className="text-center py-6 font-medium dark:text-slate-400">Creation • Eric Sia</footer>
      </body>
    </html>
  );
}


