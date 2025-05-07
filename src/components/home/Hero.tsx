
import React from 'react';
import PhoneCallout from './PhoneCallout';
import ServiceOptions from './ServiceOptions';

const Hero = () => {
  return (
    <section className="relative bg-mydelivery-blue py-24 md:py-32 flex-1 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-pattern absolute inset-0"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* 1. Phone Number - Front and Center */}
          <PhoneCallout />

          {/* 2 & 3. Service Selection - Send Parcel or Order Food */}
          <ServiceOptions />
        </div>
      </div>
    </section>
  );
};

export default Hero;
