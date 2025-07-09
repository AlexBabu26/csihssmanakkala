
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">C.S.I. H.S.S.</h3>
            <p className="text-gray-400 mb-4">
              For the Partially Hearing, Manakkala
            </p>
            <p className="text-sm leading-relaxed">
              Empowering students with hearing challenges through quality education 
              and inclusive learning environments since 1981.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-blue-400 transition-colors">Academics</a></li>
              <li><a href="#admissions" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Management */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Management</h4>
            <p className="text-sm text-gray-400">
              Managed by Madhya Kerala Diocese of the Church of South India (CSI)
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                © 2024 C.S.I. H.S.S. Manakkala. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            Building bridges to success, one student at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
