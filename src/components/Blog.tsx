import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'Understanding Antibiotic Resistance: What You Need to Know',
      excerpt: 'Learn about the growing concern of antibiotic resistance and how proper medication use can help combat this global health issue.',
      image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Health Education',
      date: 'Nov 1, 2025',
      readTime: '5 min read',
      author: 'Dr. Jennifer Adams',
    },
    {
      title: 'Managing Chronic Conditions: Tips for Medication Adherence',
      excerpt: 'Discover effective strategies to stay on track with your medication routine and improve your long-term health outcomes.',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Wellness Tips',
      date: 'Oct 28, 2025',
      readTime: '4 min read',
      author: 'Dr. Robert Martinez',
    },
    {
      title: 'Seasonal Allergies: Prevention and Treatment Options',
      excerpt: 'Expert advice on managing seasonal allergies with over-the-counter medications and lifestyle modifications.',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Preventive Care',
      date: 'Oct 25, 2025',
      readTime: '6 min read',
      author: 'Dr. Lisa Thompson',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health & Wellness Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert insights, health tips, and the latest pharmaceutical news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">By {article.author}</span>
                  <button className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
