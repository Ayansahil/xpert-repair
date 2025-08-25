import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [state, handleFormspreeSubmit] = useForm("meoljdgg");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s()-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Submit to Formspree
    await handleFormspreeSubmit(e);

    // If successful, clear form
    if (state.succeeded) {
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle the name field mapping
    if (name === 'name') {
      setFormData((prev) => ({ ...prev, fullName: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    const errorKey = name === 'name' ? 'fullName' : name;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: "" }));
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Xpert Repair,

    I need help with an appliance. Here are the details:

   *Appliance Type:* (e.g., LED TV, AC, Fridge)
   *Brand & Model:* (if known)
   *The Problem:* (e.g., Not cooling, making noise)
   *My Preferred Time:* (e.g., Today evening)

   Please contact me. Thank you!`
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Fix Your
            <span className="text-blue-600 block">Appliance Today?</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a free quote and schedule your repair service. Our xpert
            technicians are ready to help you get your appliances back to
            perfect working condition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-red-800 mb-2">
                    Emergency Service Available
                  </h2>
                  <p className="text-red-700 text-sm leading-relaxed">
                    24/7 emergency repair services for critical appliances.
                    Additional charges may apply for after-hours service.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="tel:+8878804847"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">Call Now</h2>
                  <p className="text-gray-600">8878804847</p>
                  <p className="text-sm text-blue-600">Click to call now</p>
                </div>
              </a>

              <a
                href={`https://wa.me/8878804847?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">WhatsApp</h2>
                  <p className="text-gray-600">Quick Response</p>
                  <p className="text-sm text-green-600">Message us instantly</p>
                </div>
              </a>

              <a
                href="mailto:contact@xpertrepair.com?subject=Appliance Repair Service Request"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">Email</h2>
                  <p className="text-gray-600">contact@xpertrepair.com</p>
                  <p className="text-sm text-purple-600">Send us an email</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">
                    Service Area
                  </h2>
                  <p className="text-gray-600">City-wide Coverage</p>
                  <p className="text-sm text-orange-600">We come to you</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="font-semibold text-gray-900 mb-4">
                Business Hours
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-gray-900">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between font-semibold text-red-600 mt-3 pt-3 border-t border-gray-200">
                  <span>Emergency Service:</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for contacting Xpert Repair. We have received your
                    message and will respond within 24 hours. For urgent
                    repairs, please call us directly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Get Your Free Quote
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out the form below and we will get back to you with a
                      personalized quote for your appliance repair needs.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    itemScope
                    itemType="https://schema.org/ContactPage"
                  >
                    {/* Full Name Field */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                          errors.fullName
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                          errors.email
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                          errors.phone
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none ${
                          errors.message
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Hi, I need an appliance repair service...  
Appliance: [e.g. Washing Machine, Fridge, AC]  
Model: [e.g. LG 7kg, Samsung Double Door]  
Problem: [e.g. Not cooling, making noise, not starting]  
Preferred Time: [e.g. Today evening, Tomorrow morning]  
Please contact me."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-600"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                        state.submitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      } text-white`}
                    >
                      {state.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We will respond within 24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;