import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const totalCertificates = 100; // Update this if you have more or fewer certificates

const certificates = Array.from({ length: totalCertificates }, (_, i) => ({
  id: i + 1,
  title: `Certificate ${i + 1}`,
  image: `/certificates/certificate${i + 1}.jpg`, // Use .png if needed
}));

const CertificatesSection: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10" id="certificates">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 object-cover rounded-t-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Certificate';
                }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-center">{certificate.title}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
