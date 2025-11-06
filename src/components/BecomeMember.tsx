import { Gift, Percent, Star, CreditCard } from 'lucide-react';

export default function BecomeMember() {
  const benefits = [
    {
      icon: Percent,
      title: '20% Off',
      description: 'Exclusive discounts on all purchases',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Gift,
      title: 'Free Gifts',
      description: 'Monthly wellness product samples',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Priority Service',
      description: 'Skip the line with express checkout',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: CreditCard,
      title: 'Reward Points',
      description: 'Earn points with every purchase',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Special Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Become A Member
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our exclusive membership program and unlock amazing benefits for better health savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Start Saving?
              </h3>
              <p className="text-gray-600 text-lg">
                Join thousands of happy members who save money and enjoy exclusive benefits every month.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No annual fees or hidden charges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cancel anytime, no questions asked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Instant access to all member benefits</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $9.99<span className="text-lg text-gray-600 font-normal">/month</span>
                </div>
                <p className="text-sm text-gray-500">First month free for new members</p>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
              />
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Now - First Month Free
              </button>
              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
