import React from 'react';
import { Helmet } from 'react-helmet';

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  providerName: string;
  providerUrl: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceType,
  description,
  providerName,
  providerUrl
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": providerName,
      "url": providerUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
