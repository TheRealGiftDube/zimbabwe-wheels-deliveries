
import React from 'react';
import { Package, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServiceOptions = () => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        What would you like to do today?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        {/* Parcel Delivery Card */}
        <ServiceCard 
          title="Send a Parcel"
          description="Fast delivery across Zimbabwe"
          icon={Package}
          to="/services/parcel"
          colorClass="border-t-mydelivery-green"
          buttonText="Send Now"
          buttonColorClass="bg-mydelivery-green hover:bg-mydelivery-green/90"
        />

        {/* Food Delivery Card */}
        <ServiceCard 
          title="Order Food"
          description="Delivered hot and fresh"
          icon={Truck}
          to="/services/food"
          colorClass="border-t-mydelivery-yellow"
          buttonText="Order Now"
          buttonColorClass="bg-mydelivery-yellow hover:bg-mydelivery-yellow/90"
          textColorClass="text-mydelivery-blue"
        />
      </div>
    </>
  );
};

export default ServiceOptions;
