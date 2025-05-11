import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Contact Me</h2>
          <div className="w-20 h-1 bg-primary rounded" />
          <p className="mt-6 text-center max-w-2xl text-muted-foreground">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary"
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
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary"
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
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary"
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
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitSuccess && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="p-3 bg-red-100 text-red-800 rounded-md">{submitError}</div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo label="Email" value="perlajaswanthkrishna@gmail.com" href="mailto:perlajaswanthkrishna@gmail.com" />
                <ContactInfo label="Phone" value="+91 80961 91416" href="tel:+91 8096191416" />
                <ContactInfo label="Location" value="Nuzvid, Andhra Pradesh, India" href="#" />
              </div>
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
}: {
  label: string;
  value: string;
  href: string;
}) => (
  <div className="flex items-start">
    <div className="mt-1 bg-primary/10 p-2 rounded-full">
      <span className="w-5 h-5 text-primary">📍</span>
    </div>
    <div className="ml-4">
      <h4 className="text-sm font-medium text-muted-foreground">{label}</h4>
      <a href={href} className="text-foreground hover:text-primary transition-colors">
        {value}
      </a>
    </div>
  </div>
);

export default ContactSection;
