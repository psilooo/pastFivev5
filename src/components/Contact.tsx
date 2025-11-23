import React, { useState } from 'react';
import { Mail, Send, ExternalLink } from 'lucide-react';

const FORM_ENDPOINT = 'https://formspree.io/f/mgvldrvb';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setErrorMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,           // used as Reply-To by Formspree
          message: formData.message,
          _subject: 'New message from your site', // optional custom subject
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(
          data?.errors?.map((e: any) => e.message).join(', ') ||
          'Something went wrong. Please try again.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl mb-12 glitch-text" data-text="CONTACT">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-white/20 p-8">
            <h3 className="font-bebas text-2xl mb-6">SEND MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot (spam trap) */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-white/20 p-3 font-courier text-sm focus:border-white/50 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 p-3 font-courier text-sm focus:border-white/50 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border border-white/20 p-3 font-courier text-sm focus:border-white/50 outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-white/20 p-3 font-courier text-sm hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'SENDING...' : 'SEND'}</span>
                <Send className="w-4 h-4" />
              </button>

              {/* Inline feedback */}
              {status === 'success' && (
                <p className="text-xs font-courier text-green-400/80 mt-2" role="status" aria-live="polite">
                  Message sent. I’ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs font-courier text-red-400/80 mt-2" role="alert" aria-live="assertive">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas text-xl mb-2">EMAIL</h3>
              <a href="mailto:contact@portfolio.com" className="font-courier text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@pastfivestudios.com</span>
              </a>
            </div>

            <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas text-xl mb-2">LOCATION</h3>
              <p className="font-courier text-sm opacity-60">
                WORLDWIDE<br />
                24/7 ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (fixed, static) */}
      <footer className="fixed bottom-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="font-courier text-xs opacity-70">
            © 2025 PASTFIVE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-courier text-xs opacity-70">
            DESIGNED WITH CHAOS BY PSILO
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
