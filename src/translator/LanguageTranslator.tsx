import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "pt";

const translations = {
  en: {
    // --- NAVIGATION ---
    nav_home: "Home",
    nav_about: "About",
    nav_exp: "Experiences",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    // --- HERO (RESTAURADO IGUAL À IMAGEM) ---
    hero_greeting: "Hi! I'm João Henrique!",
    hero_role: "Computer Engineer, Developer and Software Architect",
    hero_btn_contact: "Contact",
    hero_btn_projects: "View Projects",
    term_line1: "Software Engineer",
    term_line2: "Fullstack-Developer VueJs Javascript Java Springboot SQL",
    term_line3: "Angular Typescript AWS",

    // --- ABOUT SECTION (TEXTO COMPLETO) ---
    about_title: "About Me",
    about_p1:
      "My name is João Henrique, and I believe that technology can transform realities and shape the future. I aim to build solutions that make a positive impact on people's lives, optimize processes, and deliver innovation always with purpose, quality and impact. I want to inspire and support those who are starting their career in technology, and also learn and grow from my colleagues and mentors to become the best version of myself.",
    about_p2:
      "I am a Computer Engineer graduated from Engineering College of Sorocaba (FACENS) and about to finish my postgraduate specialization in Software Architecture from Engineering College of Sorocaba. I am a developer passionate about creating, improving and learning new things, the combination of these with strategic thinking i am able to deliver scalable and reliable solutions.",
    about_p3:
      " I have over 3 years of experience as a developer, primarily focused on front-end development with Vue.js, but also with knowledge building API's in Java using the Spring Boot ecosystem. I also contributed to database migrations in SQL, API integrations, workflow automations and documentation of projects.",
    about_p4:
      "I am a team player and a fast learner, in my first year of internship i was recognized for proposing the refactoring and modernization of the company's legacy systems using the concept of responsive design, resulting in increased demand for new projects. In that time i was also responsible for the new front-end patterns and best practices.",
    about_p5:
      "My professional drive goes to beyond code. I want to contribute to projects that impact people, companies and communities. I amcommited to continuous growth and development myself, whether by learning new technologies, improving my communication skills, or exploring creative solutions. My purpose is to grow, build, and collaborate in shaping a more innovative and efficient environment.",

    // --- EXPERIENCE SECTION ---
    exp_title: "Some of my experiences",
    exp_cv_button: "You can find out more here in my CV",
    
    // --- PROJECTS SECTION ---
    proj_section_title: "Latest Projects",
    proj_btn_website: "View Website",
    proj_btn_github: "View on GitHub",
    proj_btn_youtube: "Watch on YouTube",
    proj_modal_about: "About this project",

    // Angular portfolio
    proj_angular_desc: "This is a portfolio made with Angular.",
    proj_angular_full:
      "This project is a portfolio made with Angular to showcase my skills and learning progress in this framework.",

    // Smart Fleet
    proj_smart_desc: "Fullstack project with Spring Boot and Angular.",
    proj_smart_full:
      "Smart Fleet is a modern fleet-tracking application designed to monitor vehicles in real time and streamline fleet operations. It provides a secure login experience, a clean user interface, and a reliable API for managing and accessing tracking data. Built with Angular on the frontend and Spring Boot on the backend, Smart Fleet delivers a scalable foundation for location tracking, vehicle status monitoring, and future fleet-management features.",

    // Resort website React
    proj_resort_desc: "A resort website built with React.js",
    proj_resort_full:
      "This project is a responsive luxury resort website built using React where you can find rooms to rent. It features multiple sections including home, about, services, rooms, gallery, testimonials, and contact. The website is designed to provide an engaging user experience with smooth navigation and visually appealing layouts.",
    // picpay challenge
    proj_picpay_desc: "Backend project build in Java and Spring Boot.",
    proj_picpay_full:
      "Project build for Picpay's backend-challenge, using Spring Boot. A simple API to simulate a payment system.",

    // QrCode
    proj_qrcode_desc:
      "A simple QR Code generator using Java Spring Boot and AWS.",
    proj_qrcode_full:
      "A simple QR Code generator where i was able to improve my knowledge in Java Spring Boot and AWS services as S3 and Lambda.",
    // --- SERVICES SECTION ---
    
    // --- MEDIA SECTION ---
  
    // --- SKILLS & TESTIMONIALS & CONTACT ---
    skills_title: "Featured Skills",
    skill_cat_lang: "Programming Languages",
    skill_cat_web: "Web Development",
    skill_cat_tools: "Tools",
    skill_cat_other: "Other Technologies",

    contact_title: "Get in touch!",
    contact_schedule: "Schedule a meeting with me here.",
    contact_email_label: "EMAIL",
    contact_thank_1: "Thank you!",
    // contact_thank_2: "You",
    contact_rights: "All rights reserved.",

     // --- CV MODAL ---
     cv_modal_title: "Download My Resume",
     cv_modal_btn_pt: "Portuguese Version",
     cv_modal_btn_en: "English Version",

     // --- Exerience Modal ---
     exp_modal_about: "About this experience",
     exp_modal_link: "Company Website",
     exp_huawei_jun: "I developed and modernized critical Full Stack logistics systems using Vue.js, Java Spring Boot, and Node.js, leading a legacy refactoring initiative that improved UX and boosted new project demand by 15%. Additionally, I automated transport verification and billing processes, cutting processing time by 80% through API Gateway and PostgreSQL integrations. I also optimized database performance during a migration to PostgreSQL, implementing caching strategies and query refactoring that reduced response times by 30%.",
     exp_huawei_it: "I developed the front-end of a Supply Chain system using Vue.js, JavaScript, HTML, and CSS, which resulted in a 30% increase in logistics efficiency. My role involved implementing and integrating REST APIs to ensure scalability and seamless system communication. I also focused on operational optimization by automating manual workflows with low-code platforms to eliminate repetitive tasks. Furthermore, I authored detailed technical documentation to ensure strategic alignment between development and business stakeholders."
  },

  pt: {
    // --- NAVEGAÇÃO ---
    nav_home: "Início",
    nav_about: "Sobre",
    nav_exp: "Experiências",
    nav_projects: "Projetos",
    nav_skills: "Habilidades",
    nav_contact: "Contato",

    // --- HERO ---
    hero_greeting: "Olá! Eu sou João Henrique!",
    hero_role:
      "Engenheiro de Computação, Desenvolvedor e Arquiteto de Software",
    hero_btn_contact: "Contato",
    hero_btn_projects: "Ver Projetos",
    term_line1: "Engenheiro de Software",
    term_line2:
      "Desenvolvedor Full Stack Vue.js, JavaScript, Java, Spring Boot, SQL",
    term_line3: "Angular, TypeScript, AWS",

    // --- SOBRE ---
    about_title: "Sobre Mim",
    about_p1:
      "Meu nome é João Henrique e acredito que a tecnologia pode transformar realidades e moldar o futuro. Meu objetivo é construir soluções que impactem positivamente a vida das pessoas, otimizar processos e entregar inovação sempre com propósito, qualidade e impacto. Quero inspirar e apoiar aqueles que estão iniciando suas carreiras em tecnologia, além de aprender e crescer com meus colegas e mentores para me tornar a melhor versão de mim mesmo.",
    about_p2:
      "Sou Engenheiro de Computação formado pela Faculdade de Engenharia de Sorocaba (FACENS) e estou prestes a concluir minha pós-graduação em Arquitetura de Software pela Faculdade de Engenharia de Sorocaba. Sou um desenvolvedor apaixonado por criar, aprimorar e aprender coisas novas, e a combinação disso com pensamento estratégico me permite entregar soluções escaláveis ​​e confiáveis.",
    about_p3:
      "Tenho mais de 3 anos de experiência como desenvolvedor, principalmente focado em desenvolvimento front-end com Vue.js, mas também com conhecimento em construção de APIs em Java usando o ecossistema Spring Boot. Também contribuí para migrações de banco de dados em SQL, integrações de API, automações de fluxo de trabalho e documentação de projetos.",
    about_p4:
      "Sou um profissional que trabalha bem em equipe e aprendo rápido. No meu primeiro ano de estágio, fui reconhecido por propor a refatoração e a modernização dos sistemas legados da empresa usando o conceito de design responsivo, o que resultou em maior demanda por novos projetos. Nesse período, também fui responsável pelos novos padrões e melhores práticas de front-end.",
    about_p5:
      "Minha motivação profissional vai além do código. Quero contribuir para projetos que impactem pessoas, empresas e comunidades. Estou comprometido com o meu próprio crescimento e desenvolvimento contínuos, seja aprendendo novas tecnologias, aprimorando minhas habilidades de comunicação ou explorando soluções criativas. Meu propósito é crescer, construir e colaborar na construção de um ambiente mais inovador e eficiente.",

    // --- EXPERIÊNCIA ---
    exp_title: "Algumas das minhas experiências",
    exp_cv_button: "Ver meu CV completo",
    

    // --- PROJETOS ---
    proj_section_title: "Projetos Recentes",
    proj_btn_website: "Ver Site",
    proj_btn_github: "Ver no GitHub",
    proj_btn_youtube: "Assistir no YouTube",
    proj_modal_about: "Sobre este projeto",

    proj_angular_desc: "Portfolio feito com Angular.",
    proj_angular_full:
      "Este projeto é um portfólio desenvolvido com Angular para demonstrar minhas habilidades e meu progresso de aprendizado nesse framework.",

    // Smart Fleet
    proj_smart_desc: "Projeto Fullstack Spring Boot e Angular.",
    proj_smart_full:
      "O Smart Fleet é um aplicativo moderno de rastreamento de frotas, projetado para monitorar veículos em tempo real e otimizar as operações da frota. Ele oferece uma experiência de login segura, uma interface de usuário intuitiva e uma API confiável para gerenciar e acessar dados de rastreamento. Construído com Angular no frontend e Spring Boot no backend, o Smart Fleet fornece uma base escalável para rastreamento de localização, monitoramento do status do veículo e futuros recursos de gerenciamento de frotas.",
    // Resort website React
    proj_resort_desc: "Site de resort construído com React.js",
    proj_resort_full:
      "Este projeto é um site responsivo de resort de luxo construído usando React, onde você pode encontrar quartos para alugar. Apresenta várias seções, incluindo início, sobre, serviços, quartos, galeria, depoimentos e contato. O site é projetado para proporcionar uma experiência envolvente ao usuário, com navegação suave e layouts visualmente atraentes.",
   
    // Pipcpay challenge
    proj_picpay_desc: "Projeto desenvolvido para o Desafio de Backend do Picpay.",
    proj_picpay_full:
      "Projeto desenvolvido para o desafio de backend da Picpay, utilizando Java com Spring Boot. Uma API simples para simular um sistema de pagamentos.",

    // QrCode
    proj_qrcode_desc:
      "Um gerador simples de QR Code usando Java Spring Boot e AWS.",
    proj_qrcode_full:
      "Um gerador simples de QR Code onde pude aprimorar meu conhecimento em Java Spring Boot e serviços AWS como S3 e Lambda.",
    
    // --- SERVIÇOS ---

    // --- RESTANTE ---
    skills_title: "Habilidades em Destaque",
    skill_cat_lang: "Linguagens de Programação",
    skill_cat_web: "Desenvolvimento Web",
    skill_cat_tools: "Ferramentas",
    skill_cat_other: "Outras Tecnologias",

    contact_title: "Vamos conversar!",
    contact_schedule: "Agende uma reunião comigo aqui.",
    contact_email_label: "EMAIL",
    contact_thank_1: "Obrigado!",
    // contact_thank_2: "",
    contact_rights: "Todos os direitos reservados.",

    // --- CV MODAL ---
     cv_modal_title: "Baixe Meu Currículo",
     cv_modal_btn_pt: "Versão em Português",
     cv_modal_btn_en: "Versão em Inglês",

     // --- Exerience Modal ---
     exp_modal_about: "Sobre esta experiência",
     exp_modal_link: "Site da Empresa",
     exp_huawei_jun: "Desenvolvi e modernizei sistemas logísticos críticos (Full Stack) utilizando Vue.js, Java Spring Boot e Node.js, liderando a refatoração de legados que melhorou a UX e aumentou a demanda de novos projetos em 15%.Automatizei o sistema de verificação de transportes e faturamento, reduzindo o tempo de processamento em 80% através de integrações via API Gateway e PostgreSQL.Otimizei o desempenho do banco de dados na migração para PostgreSQL, implementando estratégias de cache e refatoração de queries que reduziram o tempo de resposta em 30%.",
     exp_huawei_it: "Desenvolvi o front-end do sistema de Supply Chain utilizando Vue.js, JavaScript, HTML e CSS, resultando em um aumento de 30% na eficiência dos processos logísticos. Implementei e integrei APIs REST, garantindo a escalabilidade da solução e a comunicação fluida entre diferentes sistemas. Automatizei fluxos de trabalho manuais utilizando plataformas low-code, eliminando tarefas repetitivas e otimizando a operação diária. Elaborei documentação técnica detalhada (arquitetura e requisitos), facilitando o alinhamento estratégico entre as equipes de desenvolvimento e de negócios."
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)["en"]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: keyof (typeof translations)["en"]) => {
    // @ts-ignore
    return translations[language]?.[key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  return context;
};
