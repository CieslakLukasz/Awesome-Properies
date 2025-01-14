import React from "react";
import "./Home.less";
import Section from "../../components/Section/Section.js";
import apartments from "../../data/tempOffersData.js";

const Home = () => {
  console.log(apartments);
  return (
    <>
      <Section id="main_banner">
        <figure>
          <picture>
            <source
              srcSet="/images/desktop.webp"
              media="(min-width: 1024px)"
              type="image/webp"
            />
            <source srcSet="/images/desktop.png" media="(min-width: 1024px)" />
            <source srcSet="/images/mobile.webp" type="image/webp" />
            <source srcSet="/images/mobile.png" />
            <img src="/images/mobile.png" alt="Amazing properties" />
          </picture>
          <figcaption>
            <h1>Amazing properties</h1>
          </figcaption>
        </figure>
      </Section>

      <Section
        title="Rekomendowane Oferty"
        className="recommended-offers background_zone">
        <p>Najlepsze oferty wybrane specjalnie dla Ciebie!</p>
      </Section>

      <Section title="SEO Strefa" className="seo-section">
        <p>jakas strefa seo</p>
      </Section>
    </>
  );
};

export default Home;
