import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Long-time Customer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'HealthCare Pharmacy has been my go-to for years. The staff is incredibly knowledgeable and always takes time to answer my questions. Their home delivery service is a lifesaver!',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Citizen',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As a senior with multiple prescriptions, I appreciate their medication management program. They help me stay organized and never miss a dose. Truly exceptional care!',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Working Professional',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The online consultation feature is amazing! I can get expert advice without leaving my office. Fast, convenient, and professional service every time.',
    },
    {
      name: 'David Thompson',
      role: 'Family Man',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'They take care of prescriptions for my entire family. The pharmacists remember us by name and always provide personalized recommendations. Feels like family!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who trust us with their health
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  activeIndex === index ? 'ring-4 ring-emerald-500 scale-105' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-emerald-200" />

                  <div className="flex items-center mb-6 relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 group-hover:border-emerald-500 transition-colors duration-300"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <div className="text-white/90">Average Rating</div>
              </div>

              <div className="w-px h-20 bg-white/30 hidden md:block"></div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
                <div className="text-white/90">Happy Customers</div>
              </div>

              <div className="w-px h-20 bg-white/30 hidden md:block"></div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-white/90">Satisfaction Rate</div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <p className="text-xl text-white/90 mb-6">
              Experience the difference of personalized pharmaceutical care
            </p>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
