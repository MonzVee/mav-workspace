import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Services</h2>
        <p>No matter your size, project or need, we can help you, Get To Market FAST!</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>About US</h3>
          <p>
            We are a modern software development company, with entrepreneurship at our core.
            With over 19 years of entreprenurial experience we build products on the understanding that
            technology is merely a vehicle, in order to increase your brand and grow your business.

            Specialist in building Progressive Web Apps (PWA) for e-commerce applications, to grow and 
            engage your audience, WE GET TO MARKET FAST!
          </p>

          <h3>PWA for E-commerce</h3>
          <p>
           With the high operating costs and the geographical limitations of traditional
           brick and motar businesses, E-commerce is the future of retail and every business should have 
           a retail strategy.

           We specialise in creating blazing fast e-commerce PWA's that are intuitive and help build the clients trust in the brand
           and online platform. We take a multi-faceted approach in the e-commerce strategy by advising and creating content that
           increases sales, conversions and growth.
          </p>

          <hr />

          <h3>Shopify for E-commerce</h3>
          <p>
            Shopify is the simplest, most robust platform for e-commerce applications currently.
            If you plan to get to market fast, on a tight budget, Shopify is the way to go.

            <br />

            Our team of expert Shopify developers will have your site converting traffic into sales in no time.
            With a vast eco-system of apps and plugins all catered to e-commerce, have a chat with our Shopify 
            development team and let's sell some products!
          </p>

          <hr />

          <h3>Digital Marketing</h3>
          <p>
            Your brand isn't what you say it is, it's what Google says it is.
            <br/>
            Your brand is one of your most valuable assets. It's more than just a logo, it's your identity.
            We will help you identify how to showcase your business to your audience in the most effective manner.

            <br/>


            When it comes to social media, frequency is key as you want your content to show up in a variety of ways, but not to be annoying.

            <br/>

            Let us develop the right strategy to keep you top of mind with the desired impact.
          </p>

          <hr />

          <h3>CTO AS A SERVICE</h3>

          <p>
            Every business needs a digital strategy, and therefore a CTO (Chief Technical Officer), in order to conceptualise and implement it. However not
            every business can afford a full-time CTO.
            
            <br/>

            We consult regarding best practice adoption, a business-centric service delivery model and operational
            efficiency. We aim for continual service improvement, investing in fit-for-purpose technology, and in cultivating
            an environment that is monitored, metered and measured.

            <br/>

            We leverage technology in order to achieve a maximum ROI.
          </p>
        </div>
      </section>

      <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>YES, I WANT A Progressive Web App! </h2>
          <p>
            We do follow a tried and tested process, however the underlying goal is always TO GET YOU TO MARKET, FAST!

          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/Contact" className="button fit primary">
              I WANT A PWA!
            </a>
          </li>
          <li>
            <a href="/" className="button fit">
              Home
            </a>
          </li>
        </ul>
      </div>
    </section>
    </article>
  </Layout>
);

export default IndexPage;
