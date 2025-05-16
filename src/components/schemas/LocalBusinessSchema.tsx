import { Helmet } from 'react-helmet';

export const LocalBusinessSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Агентство IT Услуг",
        // ...
      })}
    </script>
  </Helmet>
);