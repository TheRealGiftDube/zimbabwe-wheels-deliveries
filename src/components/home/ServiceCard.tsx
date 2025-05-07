
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  colorClass: string;
  buttonText: string;
  buttonColorClass: string;
  textColorClass?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  colorClass, 
  buttonText, 
  buttonColorClass,
  textColorClass = ''
}: ServiceCardProps) => {
  return (
    <Card className={`hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 ${colorClass} overflow-hidden`}>
      <CardContent className="p-0">
        <Link to={to} className="block">
          <div className={`${colorClass}/10 p-8 text-center`}>
            <div className={`w-20 h-20 rounded-full ${colorClass} mx-auto flex items-center justify-center mb-4`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
          <div className="p-6 bg-white">
            <Button className={`w-full ${buttonColorClass} ${textColorClass}`}>
              {buttonText}
            </Button>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
