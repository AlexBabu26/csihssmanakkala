
import { Users, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, value: "1981", label: "Established" },
    { icon: GraduationCap, value: "1-12", label: "Grades" },
    { icon: Users, value: "Co-Ed", label: "Education" },
    { icon: MapPin, value: "Adoor", label: "Location" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nurturing Minds,
                <span className="text-blue-600"> Breaking Barriers</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 1981, C.S.I. H.S.S. for the Partially Hearing, Manakkala has been a beacon of hope 
                and excellence in inclusive education. Managed by the Madhya Kerala Diocese of the CSI, 
                we've dedicated over four decades to empowering students with hearing challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the picturesque Adoor block of Pathanamthitta district, Kerala, our school 
                provides a comprehensive educational journey from Grade 1 through 12, complete with 
                an attached pre-primary section that ensures early childhood development.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/c22c04c1-dbc3-4f05-bad6-2a8bedbe06fe.png" 
                alt="C.S.I. H.S.S. School Building"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">40+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
