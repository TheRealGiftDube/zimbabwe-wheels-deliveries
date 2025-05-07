
import React from 'react';
import { Phone } from 'lucide-react';

const PhoneCallout = () => {
  return (
    <div className="mb-14">
      <div className="bg-white rounded-full py-4 px-8 shadow-lg inline-flex items-center justify-center gap-3">
        <Phone className="h-8 w-8 text-mydelivery-green animate-pulse" />
        <span className="text-3xl md:text-4xl font-bold text-mydelivery-blue">
          0771 99 666 8
        </span>
      </div>
      <p className="text-white mt-3 text-xl">Call us now for fast delivery anywhere in Zimbabwe!</p>
    </div>
  );
};

export default PhoneCallout;
