import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header/Index';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
