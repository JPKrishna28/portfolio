import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const EMAILJS_PLACEHOLDER = {
  SERVICE_ID: 'service_punbbsm',
  TEMPLATE_ID: 'template_0ea8l39',
  PUBLIC_KEY: 'LOmSpwsuNn8J6oLTc',
};

const inputClasses =
  'w-full p-3 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 focus:border-ring transition-colors outline-none';

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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Contact</h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a question or want to work together? Reach out using the form below or
            through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitSuccess && (
                <div className="p-3 border border-green-600/40 bg-green-600/10 text-green-700 dark:text-green-400 rounded-md text-center text-sm">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="p-3 border border-red-600/40 bg-red-600/10 text-red-700 dark:text-red-400 rounded-md text-center text-sm">
                  {submitError}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col justify-center">
            <h3 className="text-lg font-medium mb-6">Contact Information</h3>
            <div className="space-y-4">
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
  <a
    href={href}
    className="flex items-center p-3 rounded-md hover:bg-secondary transition-colors group"
  >
    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-foreground shrink-0">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <div className="ml-4 min-w-0">
      <h4 className="text-xs font-medium text-muted-foreground mb-0.5">{label}</h4>
      <span className="text-sm text-foreground font-medium break-all">
        {value}
      </span>
    </div>
  </a>
);

export default ContactSection;
