import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      to_name: "CashFolio",
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
      `,
    };

    try {
      const response = await emailjs.send(
        "service_vcum7cs",
        "template_nv6ssff",
        templateParams,
        "pJAnS4P7bWWT373XX"
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We will get back to you soon.",
          duration: 4000,
          className: "bg-[#1f1f1f] text-white border-none",
        });
        setFormData({ name: "", phone: "", email: "" });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
        duration: 4000,
        className: "bg-[#1f1f1f] text-white border-none",
      });
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#121212] text-white pt-24">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#fff",
            border: "none",
          },
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us today. We're here to help you with any
            questions you might have.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[600px] mx-auto bg-[#1f1f1f] p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
