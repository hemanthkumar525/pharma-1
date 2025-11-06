import { Shield, Clock, Award, Heart, Users, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Accredited',
      description: 'Fully licensed pharmacy with all necessary certifications and compliance standards.',
      stats: '100% Certified',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast prescription processing with same-day pickup and next-day delivery options.',
      stats: 'Under 15 mins',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'All medications sourced from approved manufacturers with strict quality controls.',
      stats: '5-Star Rated',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Compassionate service focused on your health and wellness journey.',
      stats: '50K+ Served',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced pharmacists with extensive knowledge in medication therapy.',
      stats: '50+ Experts',
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Advanced digital systems for accurate prescriptions and health tracking.',
      stats: 'AI-Powered',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Best Choice for Your Health
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred pharmacy for thousands of satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className="text-emerald-600 font-bold text-lg mb-2">{reason.stats}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {reason.description}
                  </p>

                  <div className="flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="mr-2">Discover more</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help you with any concerns or queries you may have
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
