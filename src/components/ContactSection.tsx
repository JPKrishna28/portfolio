import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const EMAILJS_PLACEHOLDER = {
  SERVICE_ID: 'service_punbbsm',
  TEMPLATE_ID: 'template_0ea8l39',
  PUBLIC_KEY: 'LOmSpwsuNn8J6oLTc',
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Input change handler with typed event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit handler with typed event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_PLACEHOLDER.SERVICE_ID,
        EMAILJS_PLACEHOLDER.TEMPLATE_ID,
        formRef.current,
        EMAILJS_PLACEHOLDER.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send email. Please try again later.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          <p className="mt-6 text-center max-w-2xl text-muted-foreground">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/5"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <span className="mr-3 text-accent">✉️</span> Get In Touch
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/10 transition-all outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/10 transition-all outline-none"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/10 transition-all outline-none"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/10 transition-all outline-none resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3 bg-green-500/20 border border-green-500/50 text-green-200 rounded-lg text-center"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3 bg-red-500/20 border border-red-500/50 text-red-200 rounded-lg text-center"
                >
                  {submitError}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
              <div className="space-y-8">
                <ContactInfo
                  label="Email"
                  value="perlajaswanthkrishna@gmail.com"
                  href="mailto:perlajaswanthkrishna@gmail.com"
                  icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                />
                <ContactInfo
                  label="Phone"
                  value="+91 80961 91416"
                  href="tel:+91 8096191416"
                  icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                />
                <ContactInfo
                  label="Location"
                  value="Nuzvid, Andhra Pradesh, India"
                  href="#"
                  icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="flex items-center p-4 rounded-xl transition-colors group"
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <div className="ml-6">
      <h4 className="text-sm font-medium text-muted-foreground mb-1">{label}</h4>
      <span className="text-lg text-white font-medium group-hover:text-accent transition-colors">
        {value}
      </span>
    </div>
  </motion.a>
);

export default ContactSection;
