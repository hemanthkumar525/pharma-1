import { Award, Heart, GraduationCap } from 'lucide-react';

export default function OurTeam() {
  const team = [
    {
      name: 'Dr. Jennifer Adams',
      role: 'Chief Pharmacist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '15 Years',
      specialty: 'Clinical Pharmacy',
      description: 'Specialized in medication therapy management and patient counseling.',
    },
    {
      name: 'Dr. Robert Martinez',
      role: 'Senior Pharmacist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '12 Years',
      specialty: 'Compounding',
      description: 'Expert in custom medication preparation and formulation.',
    },
    {
      name: 'Dr. Lisa Thompson',
      role: 'Pharmacy Manager',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '10 Years',
      specialty: 'Geriatric Care',
      description: 'Focused on elderly patient care and chronic disease management.',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Clinical Pharmacist',
      image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '8 Years',
      specialty: 'Diabetes Care',
      description: 'Specialized in diabetes management and patient education.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Caring Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to your health and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-70"></div>

                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {member.experience}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-emerald-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2 text-emerald-600" />
                  <span className="font-semibold">{member.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Certified Excellence</h4>
            <p className="text-gray-600">
              All our pharmacists are board-certified with continuous education
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Compassionate Care</h4>
            <p className="text-gray-600">
              We treat every patient with empathy, respect, and personalized attention
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Expert Knowledge</h4>
            <p className="text-gray-600">
              Combined 45+ years of pharmaceutical experience at your service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
