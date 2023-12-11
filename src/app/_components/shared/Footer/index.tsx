// components/Footer.js
"use client"
const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-around">
        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: support@startup.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">Terms of Service | Privacy Policy</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Startup Headquarters: 123 Adventure Street, Cityville, Countryland
        </p>
      </div>
    </div>
  );
};

export default Footer;
