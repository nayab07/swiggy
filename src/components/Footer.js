import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading food delivery service bringing delicious meals right to your doorsteps. Our aim is to provide fast, reliable, and affordable delivery service.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-pink-400">Home</a></li>
              <li><a href="/about" className="hover:text-pink-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-pink-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: support@fooddelivery.com</p>
            <p className="text-sm">Address: 123 Food Street, Banglore, India</p>
          </div>
      
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">
            &copy; 2025 FoodDelivery, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
  