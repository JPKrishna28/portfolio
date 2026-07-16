import type { ReactNode } from 'react';
import Background from './Background';
import FloatingDock from './FloatingDock';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col text-foreground relative">
      <Background />
      <FloatingDock />

      <main className="flex-grow flex flex-col relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
