import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import './all.scss';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const setLayoutClass = () => {
    let pathName = window.location.pathname.replace('/', '');
    switch (pathName) {
      case 'learn':
      case 'listen':
      case 'look':
      case 'live':
        return pathName;
      case '':
        return '';
      default:
        return 'not-found';
    }
  };

  return (
    <div className={`layout ${setLayoutClass()}`}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navigation />
      <main className="container">{children}</main>
      <MobileNav />
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
