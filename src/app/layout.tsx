import '@styles/globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import React, { ReactNode } from 'react';


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
