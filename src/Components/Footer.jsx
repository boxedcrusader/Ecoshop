function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo-foot.png" alt="" />
            <p className="text-sm">
              Your company tagline or a brief description goes here. It could be a few lines about what your company does or stands for.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <a href="mailto:info@company.com" className="hover:text-blue-500">info@company.com</a>
              </li>
              <li>
                <span>Phone: </span>
                <a href="tel:+123456789" className="hover:text-blue-500">+123 456 789</a>
              </li>
              <li>
                <span>Address: </span>
                <p>123 Street, City, Country</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
