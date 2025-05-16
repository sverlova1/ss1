import React from 'react';
import { Helmet } from 'react-helmet';

interface LocalBusinessSchemaProps {
  name: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  url: string;
  areaServed: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  image,
  address,
  telephone,
  url,
  areaServed
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry,
    },
    "telephone": telephone,
    "url": url,
    "areaServed": {
      "@type": "Place",
      "name": areaServed,
    },
	"openingHours": [
    "Mo-Fr 10:00-19:00", // с понедельника по пятницу с 10 до 19
    "Sa-Su 10:00-16:00"  // в выходные с 10 до 16
  ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
