import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

// Translation types
type TranslationKey = 
  | 'nav.home' | 'nav.services' | 'nav.about' | 'nav.contact'
  | 'hero.title' | 'hero.description' | 'hero.bookSession' | 'hero.ourServices'
  | 'services.title' | 'services.subtitle'
  | 'services.recording.title' | 'services.recording.description'
  | 'services.mixing.title' | 'services.mixing.description'
  | 'services.mastering.title' | 'services.mastering.description'
  | 'services.production.title' | 'services.production.description'
  | 'services.coaching.title' | 'services.coaching.description'
  | 'services.live.title' | 'services.live.description'
  | 'about.title' | 'about.subtitle' | 'about.description1' | 'about.description2'
  | 'about.stats.projects' | 'about.stats.experience' | 'about.stats.artists' | 'about.stats.support'
  | 'about.features.equipment.title' | 'about.features.equipment.description'
  | 'about.features.rooms.title' | 'about.features.rooms.description'
  | 'about.features.team.title' | 'about.features.team.description'
  | 'about.features.turnaround.title' | 'about.features.turnaround.description'
  | 'contact.title' | 'contact.subtitle'
  | 'contact.form.name' | 'contact.form.email' | 'contact.form.service' | 'contact.form.message' | 'contact.form.submit' | 'contact.form.success'
  | 'contact.form.service.recording' | 'contact.form.service.mixing' | 'contact.form.service.mastering' | 'contact.form.service.production' | 'contact.form.service.coaching' | 'contact.form.service.live'
  | 'contact.info.location.title' | 'contact.info.location.address'
  | 'contact.info.phone.title' | 'contact.info.phone.number'
  | 'contact.info.email.title' | 'contact.info.email.address'
  | 'contact.info.hours.title' | 'contact.info.hours.weekdays' | 'contact.info.hours.weekends'
  | 'footer.logo.subtitle' | 'footer.quickLinks' | 'footer.services' | 'footer.contactInfo'
  | 'footer.address' | 'footer.copyright' | 'footer.privacy' | 'footer.terms';

type Translations = Record<TranslationKey, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Portuguese translations (default)
const translations: Record<Language, Translations> = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',

    // Hero section
    'hero.title': 'Lab 73 - Espaço para Experimentação Musical',
    'hero.description': 'Bem-vindo ao Lab 73, onde a criatividade encontra a experimentação. Um espaço inovador em desenvolvimento, dedicado a ensaios, gravações e descobertas musicais. Aqui, todos estão sempre aprendendo e se desenvolvendo.',
    'hero.bookSession': 'Agendar Sessão',
    'hero.ourServices': 'Nossos Serviços',

    // Services section
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Serviços de áudio profissionais desenvolvidos para dar vida à sua visão musical',
    'services.recording.title': 'Gravação',
    'services.recording.description': 'Gravação profissional multicanal com equipamentos de última geração e salas acusticamente tratadas.',
    'services.mixing.title': 'Mixagem',
    'services.mixing.description': 'Serviços especializados de mixagem para trazer equilíbrio, clareza e profundidade às suas composições musicais.',
    'services.mastering.title': 'Masterização',
    'services.mastering.description': 'Polimento final e otimização para suas faixas garantindo que soem perfeitas em qualquer sistema de reprodução.',
    'services.production.title': 'Produção',
    'services.production.description': 'Serviços completos de produção musical desde arranjo até entrega final, personalizados para sua visão artística.',
    'services.coaching.title': 'Coaching Vocal',
    'services.coaching.description': 'Coaching vocal profissional para ajudar artistas a melhorar sua técnica e performance.',
    'services.live.title': 'Sessões Ao Vivo',
    'services.live.description': 'Capture a energia de performances ao vivo com nossa configuração de gravação multi-câmera e áudio.',

    // About section
    'about.title': 'Sobre o Lab 73',
    'about.subtitle': 'Onde a Música Encontra a Experimentação',
    'about.description1': 'O Lab 73 é um espaço experimental em desenvolvimento dedicado à exploração musical. Ainda não inaugurado como estúdio profissional, é um laboratório criativo onde artistas podem ensaiar, gravar e experimentar. Nossa proposta é criar um ambiente para novas experiências musicais.',
    'about.description2': 'Como o nome sugere, é um Lab - um lugar onde todos estarão sempre se desenvolvendo e aprendendo algo novo. Nossa visão é proporcionar um espaço para além de ensaios e gravações, focando em experimentações e descobertas musicais que enriquecem a jornada artística de cada pessoa.',
    'about.stats.projects': 'Projetos Completos',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.artists': 'Artistas Satisfeitos',
    'about.stats.support': 'Suporte Disponível',
    'about.features.equipment.title': 'Equipamentos Premium',
    'about.features.equipment.description': 'Consoles de mixagem, monitores e instrumentos padrão da indústria',
    'about.features.rooms.title': 'Salas Acusticamente Tratadas',
    'about.features.rooms.description': 'Múltiplos espaços de gravação otimizados para diferentes instrumentos',
    'about.features.team.title': 'Equipe Especializada',
    'about.features.team.description': 'Engenheiros e produtores experientes dedicados ao seu sucesso',
    'about.features.turnaround.title': 'Entrega Rápida',
    'about.features.turnaround.description': 'Fluxo de trabalho eficiente para cumprir seus prazos sem comprometer a qualidade',

    // Contact section
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para criar algo incrível? Vamos começar a conversa.',
    'contact.form.name': 'Seu Nome',
    'contact.form.email': 'Seu Email',
    'contact.form.service': 'Selecione um serviço',
    'contact.form.service.recording': 'Gravação',
    'contact.form.service.mixing': 'Mixagem',
    'contact.form.service.mastering': 'Masterização',
    'contact.form.service.production': 'Produção',
    'contact.form.service.coaching': 'Coaching Vocal',
    'contact.form.service.live': 'Sessões Ao Vivo',
    'contact.form.message': 'Conte-nos sobre seu projeto...',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.success': 'Obrigado pela sua mensagem! Entraremos em contato em breve.',
    'contact.info.location.title': 'Localização do Estúdio',
    'contact.info.location.address': '123 Music Street<br />Sound City, SC 12345',
    'contact.info.phone.title': 'Telefone',
    'contact.info.phone.number': '+1 (555) 123-4567',
    'contact.info.email.title': 'Email',
    'contact.info.email.address': 'hello@lab73studio.com',
    'contact.info.hours.title': 'Horário do Estúdio',
    'contact.info.hours.weekdays': 'Segunda - Sexta: 9:00 - 22:00',
    'contact.info.hours.weekends': 'Sábado - Domingo: 10:00 - 20:00',

    // Footer section
    'footer.logo.subtitle': 'Espaço Experimental para Música e Criatividade',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.contactInfo': 'Informações de Contato',
    'footer.address': '123 Music Street, Sound City',
    'footer.copyright': 'Lab 73 Studio. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero section
    'hero.title': 'Lab 73 - Space for Musical Experimentation',
    'hero.description': 'Welcome to Lab 73, where creativity meets experimentation. An innovative developing space dedicated to rehearsals, recordings, and musical discoveries. Here, everyone is always learning and developing.',
    'hero.bookSession': 'Book a Session',
    'hero.ourServices': 'Our Services',

    // Services section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional audio services tailored to bring your musical vision to life',
    'services.recording.title': 'Recording',
    'services.recording.description': 'Professional multi-track recording with state-of-the-art equipment and acoustically treated rooms.',
    'services.mixing.title': 'Mixing',
    'services.mixing.description': 'Expert mixing services to bring balance, clarity, and depth to your musical compositions.',
    'services.mastering.title': 'Mastering',
    'services.mastering.description': 'Final polish and optimization for your tracks to ensure they sound great on any playback system.',
    'services.production.title': 'Production',
    'services.production.description': 'Full music production services from arrangement to final delivery, tailored to your artistic vision.',
    'services.coaching.title': 'Vocal Coaching',
    'services.coaching.description': 'Professional vocal coaching to help artists improve their technique and performance.',
    'services.live.title': 'Live Sessions',
    'services.live.description': 'Capture the energy of live performances with our multi-camera and audio recording setup.',

    // About section
    'about.title': 'About Lab 73',
    'about.subtitle': 'Where Music Meets Experimentation',
    'about.description1': 'Lab 73 is an experimental space in development dedicated to musical exploration. Not yet inaugurated as a professional studio, it\'s a creative laboratory where artists can rehearse, record, and experiment. Our proposal is to create an environment for new musical experiences.',
    'about.description2': 'As the name suggests, it\'s a Lab - a place where everyone will always be developing and learning something new. Our vision is to provide a space beyond rehearsals and recordings, focusing on experimentation and musical discoveries that enrich each person\'s artistic journey.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.experience': 'Years Experience',
    'about.stats.artists': 'Happy Artists',
    'about.stats.support': 'Support Available',
    'about.features.equipment.title': 'Premium Equipment',
    'about.features.equipment.description': 'Industry-standard mixing consoles, monitors, and instruments',
    'about.features.rooms.title': 'Acoustically Treated Rooms',
    'about.features.rooms.description': 'Multiple recording spaces optimized for different instruments',
    'about.features.team.title': 'Expert Team',
    'about.features.team.description': 'Experienced engineers and producers dedicated to your success',
    'about.features.turnaround.title': 'Fast Turnaround',
    'about.features.turnaround.description': 'Efficient workflow to meet your deadlines without compromising quality',

    // Contact section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to create something amazing? Let\'s start the conversation.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.service': 'Select a service',
    'contact.form.service.recording': 'Recording',
    'contact.form.service.mixing': 'Mixing',
    'contact.form.service.mastering': 'Mastering',
    'contact.form.service.production': 'Production',
    'contact.form.service.coaching': 'Vocal Coaching',
    'contact.form.service.live': 'Live Sessions',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you for your message! We\'ll get back to you soon.',
    'contact.info.location.title': 'Studio Location',
    'contact.info.location.address': '123 Music Street<br />Sound City, SC 12345',
    'contact.info.phone.title': 'Phone',
    'contact.info.phone.number': '+1 (555) 123-4567',
    'contact.info.email.title': 'Email',
    'contact.info.email.address': 'hello@lab73studio.com',
    'contact.info.hours.title': 'Studio Hours',
    'contact.info.hours.weekdays': 'Monday - Friday: 9:00 AM - 10:00 PM',
    'contact.info.hours.weekends': 'Saturday - Sunday: 10:00 AM - 8:00 PM',

    // Footer section
    'footer.logo.subtitle': 'Experimental Space for Music and Creativity',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactInfo': 'Contact Info',
    'footer.address': '123 Music Street, Sound City',
    'footer.copyright': 'Lab 73 Studio. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt'); // Default to Portuguese

  useEffect(() => {
    const savedLanguage = localStorage.getItem('lab73-language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lab73-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['pt'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};