import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/venobox/venobox.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/plugin_theme_css.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/responsive.css"
        />
        <script src="/assets/js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="/assets/js/vendor/jquery-3.5.1.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/isotope.pkgd.min.js"></script>
        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/jquery.nivo.slider.pack.js"></script>
        <script src="/assets/js/slick.min.js"></script>
        <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="/venobox/venobox.min.js"></script>
        <script src="/assets/js/jquery.appear.js"></script>
        <script src="/assets/js/jquery.knob.js"></script>
        <script src="/assets/js/BeerSlider.js"></script>
        <script src="/assets/js/theme-pluginjs.js"></script>
        <script src="/assets/js/jquery.meanmenu.js"></script>
        <script src="/assets/js/ajax-mail.js"></script>
        <script src="/assets/js/theme.js"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
