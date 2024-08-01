import '@styles/globals.css';
import Nav from './components/Nav';
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
      </body>
    </html>
  );
};

export default RootLayout;
