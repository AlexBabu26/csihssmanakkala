
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 123, 191, 0.7), rgba(0, 123, 191, 0.7)), url('/lovable-uploads/c351c086-c3ce-43fb-9a4f-181fc608acec.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          C.S.I. H.S.S.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 animate-fade-in">
          For the Partially Hearing
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
          Manakkala • Empowering Dreams Since 1981
        </p>
        <div className="space-y-4 animate-fade-in">
          <p className="text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Where every child's potential is nurtured, and communication barriers become bridges to success
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Discover Our Journey
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
