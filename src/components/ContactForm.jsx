import React, { useState } from 'react';
import { useContactStore } from '../stores/contactStore';
import { contactSchema } from '../schemas/contactSchema';
import { toast } from 'sonner';

export default function ContactForm() {
  const { name, email, message, setName, setEmail, setMessage, reset } = useContactStore();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate using Zod
    const result = contactSchema.safeParse({ name, email, message });

    if (!result.success) {
      // Map errors
      const newErrors = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setErrors({});
    toast.success(`Message sent! Thanks, ${name}.`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-4 transition-all duration-300"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Contact Us
      </h2>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  );
}