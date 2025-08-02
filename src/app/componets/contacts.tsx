"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import FloatingElements from "./floatingElements";
import { cardContainerVariants, cardHoverVariants, sectionTitleVariants, titleUnderlineVariants } from "../variants/cardVariants";
import { formVariants } from "../variants/contactVariant";

// Données de contact
const contactData = [
  {
    type: "Email",
    icon: <Mail className="w-8 h-8" />,
    value: "mariusrakotonandrianina@gmail.com",
    link: "mailto:mariusrakotonandrianina@gmail.com",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    borderColorInitial: "rgba(59, 130, 246, 0.2)",
    borderColorHover: "rgb(96, 165, 250)",
    titleGradient: "from-blue-400 via-blue-600 to-cyan-500"
  },
  {
    type: "Téléphone",
    icon: <Phone className="w-8 h-8" />,
    value: "+261 34 14 443 77",
    link: "tel:+261341444377",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    borderColorInitial: "rgba(59, 130, 246, 0.2)",
    borderColorHover: "rgb(96, 165, 250)",
    titleGradient: "from-blue-400 via-blue-600 to-cyan-500"
  },
  {
    type: "Localisation",
    icon: <MapPin className="w-8 h-8" />,
    value: "Antananarivo, Madagascar",
    link: "#",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    borderColorInitial: "rgba(59, 130, 246, 0.2)",
    borderColorHover: "rgb(96, 165, 250)",
    titleGradient: "from-blue-400 via-blue-600 to-cyan-500"
  },
  {
    type: "LinkedIn",
    icon: <Linkedin className="w-8 h-8" />,
    value: "Dimithry Marius Rakotonandrianina",
    link: "https://www.linkedin.com/in/dimithry-marius-rakotonandrianina-b801bb293/",
    color: "from-blue-600/10 to-blue-800/10",
    borderColor: "border-blue-600/20",
    borderColorInitial: "rgba(37, 99, 235, 0.2)",
    borderColorHover: "rgb(59, 130, 246)",
    titleGradient: "from-blue-500 via-blue-700 to-blue-900"
  },
  {
    type: "GitHub",
    icon: <Github className="w-8 h-8" />,
    value: "Rakotonandrianina",
    link: "https://github.com/Mariusrakotonandrianina",
    color: "from-gray-500/10 to-slate-500/10",
    borderColor: "border-gray-500/20",
    borderColorInitial: "rgba(107, 114, 128, 0.2)",
    borderColorHover: "rgb(156, 163, 175)",
    titleGradient: "from-gray-400 via-gray-600 to-slate-500"
  }
];

export default function Contacts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Configuration EmailJS - Remplacez par vos vraies clés
  const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  };

  const validateEmailJSConfig = () => {
    const missingKeys = [];
    if (!emailjsConfig.serviceId) missingKeys.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
    if (!emailjsConfig.templateId) missingKeys.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
    if (!emailjsConfig.publicKey) missingKeys.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
    
    if (missingKeys.length > 0) {
      console.error('Missing EmailJS environment variables:', missingKeys);
      return false;
    }
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    // Validate EmailJS configuration before attempting to send
    if (!validateEmailJSConfig()) {
      setStatus('error');
      console.error('EmailJS is not properly configured. Please check your environment variables.');
      return;
    }
    
    setIsLoading(true);
    setStatus('idle');
  
    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      );
  
      console.log('Email envoyé avec succès:', result.text);
      setStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contacts" 
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-2 sm:py-3 md:py-4 lg:pt-12" 
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
      </div>

      <FloatingElements/>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardContainerVariants}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Titre de la section */}
          <motion.div 
            className="text-center mb-8 lg:mb-12"
            variants={sectionTitleVariants}
          >
            <motion.div className="relative inline-block mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                Contactez-moi
              </h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"
                variants={titleUnderlineVariants}
              />
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto px-4">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
            {/* Informations de contact */}
            <motion.div
              variants={cardContainerVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                Mes coordonnées
              </h3>
              
              {contactData.map((contact, index) => (
                <motion.a
                  key={contact.type}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial="rest"
                  whileInView="visible"
                  whileHover="hover"
                  variants={cardHoverVariants}
                  className="group relative block w-full cursor-pointer"
                >
                  <motion.div
                    className={`relative p-4 sm:p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${contact.color} transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--primary))]/10 bg-[hsl(var(--background))]/30`}
                    style={{
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: contact.borderColorInitial
                    }}
                    whileHover={{
                      borderColor: contact.borderColorHover,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Effet de brillance au hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(45deg, transparent 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)`
                      }}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div 
                        className="p-3 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <h4 className={`text-lg font-bold bg-gradient-to-r ${contact.titleGradient} bg-clip-text text-transparent`}>
                          {contact.type}
                        </h4>
                        <p className="text-[hsl(var(--muted-foreground))] text-sm sm:text-base">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              variants={formVariants}
              className="relative lg:mt-16" // Ajout de margin-top sur desktop pour aligner avec la première carte
            >
              <motion.div
                className="relative p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10 bg-[hsl(var(--background))]/30 border border-[hsl(var(--border))]/30"
                whileHover={{
                  borderColor: "hsl(var(--primary))",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                  Envoyez-moi un message
                </h3>

                <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--background))]/50 border border-[hsl(var(--border))]/30 text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="Votre email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--background))]/50 border border-[hsl(var(--border))]/30 text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--background))]/50 border border-[hsl(var(--border))]/30 text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--background))]/50 border border-[hsl(var(--border))]/30 text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-300 resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />

                  {/* Champs cachés pour EmailJS */}
                  <input type="hidden" name="to_name" value="Marius" />
                  <input type="hidden" name="visitor_name" value={formData.user_name} />
                  <input type="hidden" name="visitor_email" value={formData.user_email} />
                  <input type="hidden" name="date_sent" value={new Date().toLocaleDateString('fr-FR')} />

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>

                  {/* Messages de statut */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                    >
                      Message envoyé avec succès !
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                    >
                      Erreur lors de l'envoi. Veuillez réessayer.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
    </section>
  );
}   