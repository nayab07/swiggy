import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    setFormStatus("Thank you for contacting us. We will get back to you soon!");
    // You can add form submission logic here (e.g., sending the data to an API)
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="contact-info">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Our Contact Information</h2>
          <ul className="text-lg text-gray-700">
            <li className="mb-4">
              <strong className="text-pink-600">Phone:</strong> +1 800 123 4567
            </li>
            <li className="mb-4">
              <strong className="text-pink-600">Email:</strong> support@fooddelivery.com
            </li>
            <li className="mb-4">
              <strong className="text-pink-600">Address:</strong> 123 Food Street, Cityville, State, 12345
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="text-2xl font-semibold text-pink-500 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="6"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
              >
                Send Message
              </button>
            </div>

            {formStatus && (
              <div className={`text-center mt-4 ${formStatus.includes("Thank") ? "text-green-600" : "text-red-600"}`}>
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
