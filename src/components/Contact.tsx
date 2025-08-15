import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "safidy.rakotonirina@example.com",
      href: "mailto:safidy.rakotonirina@example.com"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Madagascar",
      href: null
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+261 XX XX XXX XX",
      href: "tel:+261xxxxxxxxx"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:safidy.rakotonirina@example.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contactez-moi</h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Je suis toujours intéressé par de nouveaux projets et opportunités. 
                Que ce soit pour une collaboration, un stage ou simplement pour discuter 
                de technologie, n'hésitez pas à me contacter !
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-xl card-shadow card-hover">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.label}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-lg ${social.color} transition-all duration-300 card-hover`}
                      title={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-background"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-background"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;