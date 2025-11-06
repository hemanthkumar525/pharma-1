import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              Your Health, Our Priority
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Complete Care for{' '}
              <span className="text-emerald-600 relative inline-block">
                Your Health
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12">
                  <path d="M0 8 Q100 0 200 8" stroke="#10b981" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Experience professional pharmacy services with expert care, quality medicines, and personalized health solutions delivered right to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <div className="bg-emerald-600 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/356054/pexels-photo-356054.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pharmacy professional"
                className="rounded-3xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Certified & Trusted</div>
                    <div className="font-bold text-gray-900">FDA Approved</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl animate-float animation-delay-2000">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
