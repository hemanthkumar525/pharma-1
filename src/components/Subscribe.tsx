import { Mail, Bell, Gift } from 'lucide-react';

export default function Subscribe() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptLTQgNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6bS00IDR2MmgtMnYtMmgyem0wLTR2MmgtMnYtMmgyem0tNCA0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Stay Connected
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Subscribe Now for Wellness and Care Insights
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get expert health tips, exclusive offers, and the latest updates delivered straight to your inbox
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Weekly Newsletter</h4>
                <p className="text-sm text-gray-600">Health tips & advice</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Special Alerts</h4>
                <p className="text-sm text-gray-600">Product launches</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="bg-emerald-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Exclusive Offers</h4>
                <p className="text-sm text-gray-600">Member discounts</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  I agree to receive promotional emails and health tips. You can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now - Get 10% Off Your First Order
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Join over 25,000 subscribers who trust us for their health information
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-white/80">Subscribers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/80">Articles Published</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-white/80">Content Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">Weekly</div>
              <div className="text-white/80">New Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
