import type { ReactNode } from 'react';
import Background from './Background';
import FloatingDock from './FloatingDock';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col text-foreground relative selection:bg-primary/30 selection:text-primary-foreground">
      <Background />
      <FloatingDock />
      <ThemeToggle />

      <main className="flex-grow flex flex-col relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
