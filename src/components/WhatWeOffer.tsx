import { Pill, Truck, Clock, Shield, Phone, Heart } from 'lucide-react';

export default function WhatWeOffer() {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Services',
      description: 'Fast and accurate prescription filling with expert pharmacist consultation.',
      color: 'bg-blue-500',
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Free delivery for orders over $50. Get your medicines at your doorstep.',
      color: 'bg-emerald-500',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your health concerns.',
      color: 'bg-purple-500',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All medications are sourced from certified manufacturers.',
      color: 'bg-orange-500',
    },
    {
      icon: Phone,
      title: 'Online Consultation',
      description: 'Connect with licensed pharmacists from the comfort of your home.',
      color: 'bg-pink-500',
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track your medication schedule and health progress with our app.',
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive pharmacy services designed to meet all your healthcare needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
