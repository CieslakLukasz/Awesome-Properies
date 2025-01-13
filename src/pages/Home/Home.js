import React from "react";
import "./Home.less";

const Home = () => {
  return (
    <>
      <div id="main_banner">
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
      </div>

      <section>
        <h2>Rekomendowane Oferty</h2>
        <p>Najlepsze oferty wybrane specjalnie dla Ciebie!</p>
      </section>

      <section>
        <h2>SEO Strefa</h2>
        <p>jakas strefa seo</p>
      </section>
    </>
  );
};

export default Home;
