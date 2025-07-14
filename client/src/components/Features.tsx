
import { Heart, BookOpen, Users2, Trophy, Lightbulb, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "Creating a nurturing space where every student feels valued and supported in their educational journey."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From Grade 1 to 12 with specialized teaching methods adapted for partially hearing students."
    },
    {
      icon: Users2,
      title: "Expert Faculty",
      description: "Dedicated teachers trained in special education and communication techniques for hearing-impaired students."
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Proven track record of academic success and student achievements across all grade levels."
    },
    {
      icon: Lightbulb,
      title: "Innovative Methods",
      description: "Modern teaching techniques and technology integration to enhance learning experiences."
    },
    {
      icon: Shield,
      title: "Safe Learning Space",
      description: "A secure and comfortable environment that promotes confidence and personal growth."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">C.S.I. H.S.S.</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every child deserves quality education. Our specialized approach ensures 
            that hearing challenges never become barriers to success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
