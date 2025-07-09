
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Manakkala, Adoor Block", "Pathanamthitta District", "Kerala, India"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 XXXX XXXXXX", "Office Hours Only"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@csihssmanakkala.edu.in", "admissions@csihssmanakkala.edu.in"]
    },
    {
      icon: Clock,
      title: "School Hours",
      details: ["Monday - Friday", "9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to begin your child's journey with us? We're here to answer all your questions 
            and guide you through the admission process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-blue-100 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
