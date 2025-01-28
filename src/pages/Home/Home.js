import React from "react";
import "./Home.less";
import Section from "../../components/Section/Section.js";
import Recomendations from "../../components/Recomendations/Recomendations.js";
import Cms from "../../components/Cms/Cms.js";
import apartments from "../../data/tempOffersData.js";
import { cms1, cms2 } from "../../data/cmsData.js";

const Home = () => {
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

      {cms1 && (
        <Section title={cms1.title} className="seo-section">
          <Cms {...cms1} />
        </Section>
      )}

      <Section
        title="Rekomendowane Oferty"
        className="recommended-offers background_zone">
        <Recomendations list={apartments} />
        <p>Najlepsze oferty wybrane specjalnie dla Ciebie!</p>
      </Section>

      {cms2 && (
        <Section title={cms2.title} className="seo-section">
          <Cms {...cms2} />
        </Section>
      )}
    </>
  );
};

export default Home;
