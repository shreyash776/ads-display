import React from 'react';
import '@styles/globals.css';
import Nav from './components/Nav';
const RootLayout: React.FC = ({ children }) => {
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
