import { Award, Users, Target, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const achievements = [
    { icon: Award, label: 'Licensed & Certified', value: '100%' },
    { icon: Users, label: 'Expert Pharmacists', value: '50+' },
    { icon: Target, label: 'Accuracy Rate', value: '99.9%' },
  ];

  const features = [
    'State-of-the-art pharmacy facilities',
    'Experienced and caring professionals',
    'Wide range of medications and health products',
    'Personalized medication counseling',
    'Insurance and billing assistance',
    'Competitive pricing and discounts',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="About our pharmacy"
                className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-3xl"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {achievements.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="text-center">
                          <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                          <div className="text-xs text-gray-600">{item.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Healthcare Partner Since 2008
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At HealthCare Pharmacy, we're committed to providing exceptional pharmaceutical care with a personal touch. Our team of experienced pharmacists and healthcare professionals is dedicated to ensuring you receive the best possible service and guidance for your health needs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in building lasting relationships with our community, offering not just medications, but comprehensive health solutions that improve lives every day.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="bg-emerald-100 p-1 rounded-full group-hover:bg-emerald-600 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
