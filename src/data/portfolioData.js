export const PROFILE_DATA = {
  es: {
    personal: {
      fullName: 'Néstor David Sarmiento Caillagua',
      shortName: 'Néstor Sarmiento',
      role: 'Ingeniería en Software (7.º Semestre) · Backend, Full Stack & Automatización IA',
      headline:
        'Construyendo sistemas backend robustos, automatización omnicanal con IA e infraestructura en contenedores.',
      summary:
        'Estudiante de 7.º semestre (de 9) de Ingeniería en Software en la Escuela Politécnica Nacional, con experiencia práctica en automatización de procesos e IA (n8n, Google AI Studio / Gemini, RAG, Chatwoot, Evolution API, prevención de Prompt Injection), desarrollo backend y full stack (Python/FastAPI, TypeScript/NestJS, Java/Spring Boot, React con Vite y Tailwind CSS) y administración de servidores Linux VPS con Docker, Traefik, PostgreSQL y Redis.',
      location: 'Quito, Ecuador · EPN (7.º / 9 Sem.)',
      availability: 'Trabajando en Arellano Store · Abierto a proyectos y contacto',
      statusDetail: 'Respuesta habitual en menos de 24h',
      email: 'nesdav1005@gmail.com',
      phone: '0961284734',
      phoneInternational: '+593 96 128 4734',
      whatsappUrl: 'https://wa.me/593961284734',
      linkedinLabel: 'Néstor Sarmiento',
      linkedinUrl: 'https://www.linkedin.com/in/nestorsarmiento1005/',
      githubLabel: 'Nestor-Sarmiento',
      githubUrl: 'https://github.com/Nestor-Sarmiento',
      cvPdfUrl: './CV_Nestor_Sarmiento.pdf',
      avatarUrl: './profile.jpg',
    },
    metrics: [
      {
        id: 'stack',
        value: '28+',
        label: 'Tecnologías & Herramientas',
        detail: 'Backend, Full Stack, IA, Omnicanalidad, Docker & VPS',
      },
      {
        id: 'experience',
        value: '3',
        label: 'Experiencias en Campo',
        detail: 'Arellano Store (Actual), Vibratio EC e Inclusión Digital',
      },
      {
        id: 'education',
        value: '7.º / 9',
        label: 'Semestre en la EPN',
        detail: 'Ing. en Software (Nivelación + 7 de 9 semestres)',
      },
      {
        id: 'languages',
        value: 'ES / B2',
        label: 'Comunicación Bilingüe',
        detail: 'Español Nativo · Inglés Academic Three (B2 en curso)',
      },
    ],
    experiences: [
      {
        id: 'arellano-store',
        role: 'Pasante de Automatización, IA e Infraestructura Backend',
        company: 'Arellano Store · Quito, Ecuador',
        period: 'Ago 2026 – Actualidad (6 meses)',
        type: 'Pasantía Profesional · Automatización, IA & DevOps',
        statusBadge: 'En curso · Actualidad',
        summary:
          'Diseño, implementación y administración de soluciones de automatización comercial, atención omnicanal con IA y gestión de infraestructura contenerizada en un servidor Linux VPS para optimizar la experiencia de usuario y los procesos internos.',
        highlights: [
          'Automatización de respuesta a mensajes y comentarios en redes sociales integrando APIs de Meta y TikTok con Chatwoot, Evolution API y n8n.',
          'Desarrollo de flujos automatizados para consulta de inventario en tiempo real y generación de proformas consumiendo endpoints del ERP.',
          'Implementación de controles de seguridad contra Prompt Injection y optimización/monitoreo del consumo de modelos en Google AI Studio.',
          'Administración de servidor Linux VPS con múltiples contenedores en Docker, proxy inverso Traefik, PostgreSQL, Redis y gestión de credenciales en n8n.',
          'Gestión y mantenimiento de la página web en WordPress e integración continua con los procesos internos de la tienda.',
        ],
        architectureDetails: {
          title: 'Arquitectura Omnicanal, Integración ERP e Infraestructura VPS',
          problem:
            'Necesidad de atender de forma inmediata mensajes y comentarios en múltiples redes sociales (Meta, TikTok, WhatsApp), agilizar la consulta de stock y emisión de proformas desde el ERP, y proteger a los agentes de IA frente a ataques de Prompt Injection controlando costos.',
          solution:
            'Despliegue de un ecosistema multi-contenedor en un servidor Linux VPS orquestado con Docker y Traefik, integrando n8n, Chatwoot, Evolution API, PostgreSQL y Redis, conectado a los endpoints del ERP, WordPress y Google AI Studio con defensas de seguridad en los prompts.',
          deliverables: [
            'Flujos omnicanal para Meta y TikTok con n8n, Chatwoot y Evolution API',
            'Automatización de proformas y consulta de inventario vía endpoints del ERP',
            'Mitigación de Prompt Injection y optimización de consumo en Google AI Studio',
            'Servidor Linux VPS multi-contenedor (Docker, Traefik, PostgreSQL, Redis) y WordPress',
          ],
        },
        technologies: [
          'n8n',
          'Chatwoot',
          'Evolution API',
          'Docker',
          'Traefik',
          'PostgreSQL',
          'Redis',
          'Linux VPS',
          'Google AI Studio',
          'WordPress',
        ],
      },
      {
        id: 'vibratio-backend',
        role: 'Pasante de Desarrollo Backend',
        company: 'Vibratio EC S.A.S.',
        period: 'Mar 2026 – Jun 2026',
        type: 'Pasantía Profesional · Backend & IA',
        statusBadge: 'Completado',
        summary:
          'Diseño e implementación de servicios backend de alto rendimiento con Python y FastAPI, arquitecturas RAG con Gemini API para asistencia jurídica automatizada y orquestación de flujos empresariales.',
        highlights: [
          'Desarrollo de funcionalidades backend utilizando Python y FastAPI.',
          'Implementación e integración de APIs REST entre servicios.',
          'Desarrollo de flujos de automatización utilizando n8n, Webhooks y consumo de APIs.',
          'Desarrollo de una solución RAG basada en Gemini para la construcción de un asistente jurídico con inteligencia artificial.',
          'Configuración y despliegue de aplicaciones en servidores Linux.',
          'Implementación de mecanismos de seguridad para el consumo de APIs.',
          'Trabajo colaborativo mediante control de versiones con Git y metodologías ágiles.',
        ],
        architectureDetails: {
          title: 'Desglose Técnico de Implementación',
          problem:
            'Necesidad de conectar múltiples servicios internos de forma segura, automatizar tareas operativas repetitivas y facilitar consultas rápidas sobre un corpus documental jurídico.',
          solution:
            'Construcción de endpoints asíncronos en FastAPI protegidos con validación de esquemas y autenticación, pipelines de automatización gobernados por eventos (Webhooks + n8n) y un motor RAG conectado a Gemini API desplegado sobre infraestructura Linux.',
          deliverables: [
            'APIs REST documentadas y aseguradas para comunicación inter-servicios',
            'Asistente jurídico inteligente con recuperación semántica de contexto (RAG + Gemini)',
            'Flujos automatizados en n8n con manejo de errores y webhooks en tiempo real',
            'Entorno de producción configurado en servidores Linux con control de versiones en Git',
          ],
        },
        technologies: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'n8n', 'REST APIs', 'Linux VPS', 'Git'],
      },
      {
        id: 'inclusion-digital',
        role: 'Prácticas Preprofesionales',
        company: 'Proyecto de Inclusión Digital',
        period: 'Abr 2025 – Jul 2025',
        type: 'Vinculación y Práctica Preprofesional',
        statusBadge: 'Completado',
        summary:
          'Participación activa en iniciativas de transformación y capacitación tecnológica, aplicando buenas prácticas de ingeniería de software, soporte de plataformas digitales y trabajo colaborativo.',
        highlights: [
          'Ejecución de actividades técnicas orientadas a reducir la brecha digital en la comunidad.',
          'Aplicación de metodologías ágiles y trabajo colaborativo para la entrega de recursos tecnológicos.',
          'Integración y despliegue de herramientas digitales accesibles con enfoque en usabilidad.',
          'Documentación clara de procesos y acompañamiento técnico a usuarios finales.',
        ],
        architectureDetails: {
          title: 'Impacto y Metodología de Trabajo',
          problem:
            'Usuarios y organizaciones requerían acompañamiento estructurado y herramientas digitales intuitivas para adoptar flujos tecnológicos modernos.',
          solution:
            'Trabajo coordinado bajo estándares de la Escuela Politécnica Nacional, priorizando interfaces comprensibles, documentación paso a paso y transferencia efectiva de conocimiento.',
          deliverables: [
            'Despliegue y configuración de entornos y herramientas digitales',
            'Guías prácticas de uso orientadas al usuario final',
            'Trabajo en equipo bajo seguimiento iterativo y control de calidad',
          ],
        },
        technologies: ['Git', 'Plataformas Digitales', 'Metodologías Ágiles', 'Documentación Técnica'],
      },
    ],
    featuredSolutions: [
      {
        id: 'omnicanal-erp-automation',
        title: 'Automatización Omnicanal (Meta & TikTok), ERP y Proformas con IA',
        category: 'IA & Automatización',
        context: 'Arellano Store · Quito',
        shortDescription:
          'Ecosistema de atención omnicanal y automatización interna que responde comentarios y mensajes en redes sociales, consulta inventario en el ERP y genera proformas con protección contra Prompt Injection.',
        problem:
          'La gestión manual de mensajes en redes sociales y la verificación de inventario/proformas en el ERP generaban cuellos de botella en la atención al cliente.',
        solution:
          'Flujos en n8n integrados con APIs de Meta y TikTok, Chatwoot, Evolution API y endpoints del ERP, respaldados por PostgreSQL y Redis, con validación anti-Prompt Injection y optimización de consumo en Google AI Studio.',
        metrics: [
          'Respuestas automáticas en Meta y TikTok',
          'Proformas e inventario en tiempo real vía ERP',
          'Seguridad Anti-Prompt Injection',
        ],
        stack: ['n8n', 'Chatwoot', 'Evolution API', 'Google AI Studio', 'PostgreSQL', 'Redis', 'WordPress'],
      },
      {
        id: 'rag-legal-assistant',
        title: 'Asistente Jurídico Inteligente con RAG & Gemini API',
        category: 'IA & Automatización',
        context: 'Vibratio EC S.A.S.',
        shortDescription:
          'Sistema de generación aumentada por recuperación (RAG) impulsado por Google Gemini para consultar, sintetizar y responder preguntas sobre normativa y documentos legales con trazabilidad.',
        problem:
          'La búsqueda manual de criterios legales y cláusulas en documentos extensos consumía tiempo crítico y era propensa a omisiones.',
        solution:
          'Pipeline de indexación y recuperación contextual integrado con Gemini API mediante un backend en Python y FastAPI, entregando respuestas fundamentadas en los documentos fuente.',
        metrics: ['Respuestas contextualizadas con IA', 'Integración vía API REST segura', 'Backend asíncrono en FastAPI'],
        stack: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'REST API'],
      },
      {
        id: 'secure-api-linux',
        title: 'Infraestructura Multi-Contenedor en Linux VPS (Docker, Traefik & APIs)',
        category: 'Backend & Infraestructura',
        context: 'Arellano Store & Vibratio EC',
        shortDescription:
          'Administración de servidores Linux VPS con arquitecturas multi-contenedor en Docker, proxy inverso Traefik, bases de datos PostgreSQL/Redis y despliegue seguro de APIs REST.',
        problem:
          'Necesidad de alojar y escalar múltiples servicios críticos (n8n, Chatwoot, Evolution API, backends FastAPI y bases de datos) con aislamiento, enrutamiento seguro y alta disponibilidad.',
        solution:
          'Orquestación de contenedores Docker detrás de Traefik en Linux VPS, gestión centralizada de credenciales y secretos, persistencia en PostgreSQL y caché en Redis.',
        metrics: ['Arquitectura multi-contenedor en VPS', 'Enrutamiento seguro con Traefik', 'Gestión de credenciales y endpoints'],
        stack: ['Docker', 'Traefik', 'Linux VPS', 'PostgreSQL', 'Redis', 'FastAPI', 'Git'],
      },
      {
        id: 'fullstack-enterprise-foundations',
        title: 'Desarrollo Full Stack Moderno (React + Vite + Tailwind, NestJS & Spring Boot)',
        category: 'Full Stack & Bases de Datos',
        context: 'Proyectos Personales & EPN',
        shortDescription:
          'Construcción de aplicaciones web modernas combinando interfaces rápidas en React + Vite + Tailwind CSS con backends tipados y modulares en NestJS (TypeScript), Spring Boot (Java) y FastAPI.',
        problem:
          'Desarrollar aplicaciones full stack mantenibles con tipado estático de extremo a extremo, excelente experiencia de usuario y persistencia relacional o NoSQL.',
        solution:
          'Frontend reactivo con React, Vite y Tailwind CSS conectado a arquitecturas limpias en NestJS (TypeScript) y Spring Boot (Java), con bases de datos PostgreSQL, SQL Server, MySQL y MongoDB.',
        metrics: ['Frontend ágil con React + Vite + Tailwind', 'Backends tipados en NestJS y Spring Boot', 'Persistencia SQL y NoSQL'],
        stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
      },
    ],
    education: [
      {
        id: 'epn-software',
        degree: 'Ingeniería en Software',
        institution: 'Escuela Politécnica Nacional (EPN)',
        period: '2023 – Actualidad',
        status: '7.º de 9 semestres (En curso)',
        location: 'Quito, Ecuador',
        academicProgress: {
          currentSemester: 7,
          totalCareerSemesters: 9,
          percentage: 78,
          levelingNote: '1 semestre de Nivelación aprobado + 7.º semestre de 9 de carrera en curso',
        },
        description:
          'Cursando actualmente el séptimo semestre de 9 semestres de carrera (más 1 semestre inicial de nivelación aprobado). Formación rigurosa en arquitectura de software, desarrollo backend/full stack, interacción humano-computador (HCI), bases de datos, calidad de software y gestión ágil.',
        highlights: [
          '7.º de 9 Semestres de Carrera',
          'Nivelación Politécnica Aprobada',
          'Arquitectura, Backend & Full Stack',
          'Interacción Humano-Computador (HCI)',
        ],
      },
      {
        id: 'colegio-fernandez-madrid',
        degree: 'Bachiller en Ciencias',
        institution: 'Colegio Fernández Madrid',
        period: '2016 – 2022',
        status: 'Graduado',
        location: 'Quito, Ecuador',
        description:
          'Formación secundaria en ciencias exactas y fundamentos analíticos.',
        highlights: ['Ciencias Exactas', 'Fundamentos Analíticos'],
      },
    ],
    certifications: [
      {
        id: 'cec-b2-academic-three',
        title: 'Academic Three — Inglés (Nivel B2)',
        issuer: 'Centro de Educación Continua · Escuela Politécnica Nacional (CEC-EPN)',
        status: 'Cursando actualmente',
        badgeType: 'in-progress',
        description:
          'Cursando el nivel avanzado Academic Three (MCER B2) enfocado en fluidez profesional, comprensión de documentación de ingeniería, comunicación oral y redacción académica.',
      },
      {
        id: 'cec-b1',
        title: 'Advanced Two — Inglés B1',
        issuer: 'Centro de Educación Continua · Escuela Politécnica Nacional (CEC-EPN)',
        status: 'Certificado obtenido',
        badgeType: 'completed',
        description:
          'Certificación oficial de suficiencia intermedia (B1 MCER) en comprensión, expresión e interacción en inglés.',
      },
    ],
    spokenLanguages: [
      {
        name: 'Español',
        level: 'Nativo',
        cefr: 'C2 / Nativo',
        percentage: 100,
        detail: 'Comunicación profesional, redacción técnica y presentaciones.',
      },
      {
        name: 'Inglés',
        level: 'Intermedio Alto · Cursando Academic Three (B2)',
        cefr: 'B1 Certificado → Academic Three (B2) en curso',
        percentage: 78,
        detail: 'Cursando Academic Three (Nivel B2) en CEC-EPN. Lectura fluida de documentación técnica y comunicación académica/profesional.',
      },
    ],
  },
  en: {
    personal: {
      fullName: 'Néstor David Sarmiento Caillagua',
      shortName: 'Néstor Sarmiento',
      role: 'Software Engineering (7th Semester) · Backend, Full Stack & AI Automation',
      headline:
        'Building reliable backend systems, omnichannel AI automation, and containerized server infrastructure.',
      summary:
        '7th-semester (of 9) Software Engineering student at Escuela Politécnica Nacional (EPN) with hands-on experience in AI & workflow automation (n8n, Google AI Studio / Gemini, RAG, Chatwoot, Evolution API, Prompt Injection prevention), backend and full stack development (Python/FastAPI, TypeScript/NestJS, Java/Spring Boot, React with Vite & Tailwind CSS), and Linux VPS administration with Docker, Traefik, PostgreSQL, and Redis.',
      location: 'Quito, Ecuador · EPN (7th / 9 Sem.)',
      availability: 'Currently at Arellano Store · Open to projects & networking',
      statusDetail: 'Typical response time under 24h',
      email: 'nesdav1005@gmail.com',
      phone: '0961284734',
      phoneInternational: '+593 96 128 4734',
      whatsappUrl: 'https://wa.me/593961284734',
      linkedinLabel: 'Néstor Sarmiento',
      linkedinUrl: 'https://www.linkedin.com/in/nestorsarmiento1005/',
      githubLabel: 'Nestor-Sarmiento',
      githubUrl: 'https://github.com/Nestor-Sarmiento',
      cvPdfUrl: './CV_Nestor_Sarmiento.pdf',
      avatarUrl: './profile.jpg',
    },
    metrics: [
      {
        id: 'stack',
        value: '28+',
        label: 'Technologies & Tools',
        detail: 'Backend, Full Stack, AI, Omnichannel, Docker & VPS',
      },
      {
        id: 'experience',
        value: '3',
        label: 'Field Experiences',
        detail: 'Arellano Store (Current), Vibratio EC & Digital Inclusion',
      },
      {
        id: 'education',
        value: '7th / 9',
        label: 'Semester at EPN',
        detail: 'Software Eng. (1 Foundation + 7 of 9 career semesters)',
      },
      {
        id: 'languages',
        value: 'ES / B2',
        label: 'Bilingual Communication',
        detail: 'Native Spanish · English Academic Three (B2 in progress)',
      },
    ],
    experiences: [
      {
        id: 'arellano-store',
        role: 'AI Automation, Backend & Infrastructure Intern',
        company: 'Arellano Store · Quito, Ecuador',
        period: 'Aug 2026 – Present (6-month internship)',
        type: 'Professional Internship · Automation, AI & DevOps',
        statusBadge: 'Active · Current Role',
        summary:
          'Designing, deploying, and managing omnichannel AI automation workflows, ERP integrations, and multi-container Linux VPS infrastructure to enhance user experience and internal business operations.',
        highlights: [
          'Built automated social media message and comment reply workflows for Meta and TikTok using Chatwoot, Evolution API, and n8n.',
          'Developed automated solutions for real-time inventory lookups and proforma invoice generation by consuming ERP endpoints.',
          'Implemented AI security guardrails to prevent Prompt Injection attacks and monitored/optimized token usage in Google AI Studio.',
          'Managed a multi-container Linux VPS environment using Docker, Traefik reverse proxy, PostgreSQL, Redis, and n8n credential management.',
          'Maintained and integrated the company WordPress website with internal automation workflows.',
        ],
        architectureDetails: {
          title: 'Omnichannel Automation, ERP Integration & VPS Infrastructure',
          problem:
            'Needed to automate high-volume customer interactions on Meta and TikTok, streamline ERP inventory queries and proforma generation, and secure AI agents against Prompt Injection while keeping token costs optimized.',
          solution:
            'Deployed a containerized Linux VPS stack with Docker and Traefik orchestrating n8n, Chatwoot, Evolution API, PostgreSQL, and Redis, connected to ERP endpoints, WordPress, and Google AI Studio with prompt security guardrails.',
          deliverables: [
            'Meta & TikTok omnichannel flows via n8n, Chatwoot, and Evolution API',
            'Automated ERP inventory lookup and proforma generation pipelines',
            'Prompt Injection mitigation and Google AI Studio quota optimization',
            'Multi-container Linux VPS (Docker, Traefik, PostgreSQL, Redis) & WordPress integration',
          ],
        },
        technologies: [
          'n8n',
          'Chatwoot',
          'Evolution API',
          'Docker',
          'Traefik',
          'PostgreSQL',
          'Redis',
          'Linux VPS',
          'Google AI Studio',
          'WordPress',
        ],
      },
      {
        id: 'vibratio-backend',
        role: 'Backend Development Intern',
        company: 'Vibratio EC S.A.S.',
        period: 'Mar 2026 – Jun 2026',
        type: 'Professional Internship · Backend & AI',
        statusBadge: 'Completed',
        summary:
          'Design and implementation of high-performance backend services with Python and FastAPI, Gemini-based RAG architectures for an AI legal assistant, and event-driven workflow automation.',
        highlights: [
          'Backend feature development using Python and FastAPI.',
          'Implementation and integration of REST APIs across services.',
          'Development of automation workflows using n8n, Webhooks, and API consumption.',
          'Built a Gemini-based RAG solution for an artificial intelligence legal assistant.',
          'Application configuration and deployment on Linux servers.',
          'Implementation of security mechanisms for API consumption.',
          'Collaborative development using Git version control and agile methodologies.',
        ],
        architectureDetails: {
          title: 'Technical Implementation Breakdown',
          problem:
            'Needed to securely connect multiple internal services, automate repetitive operational workflows, and enable accurate legal document querying.',
          solution:
            'Built asynchronous FastAPI endpoints with schema validation and security controls, event-driven n8n + Webhook pipelines, and a Gemini RAG engine deployed on Linux servers.',
          deliverables: [
            'Secured and documented REST APIs for inter-service communication',
            'AI Legal Assistant powered by Retrieval-Augmented Generation (RAG + Gemini)',
            'Real-time n8n automation workflows with webhook triggers',
            'Linux production server setup with Git-based collaborative workflows',
          ],
        },
        technologies: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'n8n', 'REST APIs', 'Linux VPS', 'Git'],
      },
      {
        id: 'inclusion-digital',
        role: 'Pre-professional Intern',
        company: 'Digital Inclusion Project (Proyecto de Inclusión Digital)',
        period: 'Apr 2025 – Jul 2025',
        type: 'Community & Pre-professional Practice',
        statusBadge: 'Completed',
        summary:
          'Active contributor in technology literacy and digital transformation initiatives, applying software engineering best practices, platform support, and user-centered documentation.',
        highlights: [
          'Executed technical initiatives aimed at bridging the digital divide in the community.',
          'Applied agile methodologies and collaborative workflows to deliver digital resources.',
          'Configured and deployed accessible digital tools with a focus on usability.',
          'Created clear documentation and provided direct technical guidance to end users.',
        ],
        architectureDetails: {
          title: 'Impact & Working Methodology',
          problem:
            'Users and community groups needed structured guidance and intuitive digital tools to adopt modern technological workflows.',
          solution:
            'Coordinated execution under Escuela Politécnica Nacional standards, prioritizing accessible interfaces, step-by-step documentation, and knowledge transfer.',
          deliverables: [
            'Deployment and configuration of digital learning and productivity tools',
            'User-friendly documentation and training materials',
            'Iterative team delivery with quality assurance',
          ],
        },
        technologies: ['Git', 'Digital Platforms', 'Agile Methodologies', 'Technical Documentation'],
      },
    ],
    featuredSolutions: [
      {
        id: 'omnicanal-erp-automation',
        title: 'Omnichannel AI Automation (Meta & TikTok), ERP & Proformas',
        category: 'AI & Automation',
        context: 'Arellano Store · Quito',
        shortDescription:
          'Omnichannel customer experience and internal automation system that replies to Meta/TikTok messages and comments, queries ERP inventory, and generates proformas with Prompt Injection protection.',
        problem:
          'Manual handling of social media inquiries and ERP stock/proforma checks created response delays.',
        solution:
          'n8n workflows integrated with Meta & TikTok APIs, Chatwoot, Evolution API, and ERP endpoints, backed by PostgreSQL and Redis, with Prompt Injection guardrails and Google AI Studio usage optimization.',
        metrics: [
          'Automated Meta & TikTok replies',
          'Real-time ERP inventory & proformas',
          'Anti-Prompt Injection security',
        ],
        stack: ['n8n', 'Chatwoot', 'Evolution API', 'Google AI Studio', 'PostgreSQL', 'Redis', 'WordPress'],
      },
      {
        id: 'rag-legal-assistant',
        title: 'AI Legal Assistant with RAG & Gemini API',
        category: 'AI & Automation',
        context: 'Vibratio EC S.A.S.',
        shortDescription:
          'Retrieval-Augmented Generation (RAG) system powered by Google Gemini to query, synthesize, and answer questions over legal documents with source grounding.',
        problem:
          'Manual searching across extensive legal corpora was time-consuming and prone to oversight.',
        solution:
          'Contextual indexing and retrieval pipeline integrated with Gemini API through a Python & FastAPI backend, delivering grounded legal answers.',
        metrics: ['Grounded AI responses', 'Secure REST API integration', 'Async FastAPI backend'],
        stack: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'REST API'],
      },
      {
        id: 'secure-api-linux',
        title: 'Multi-Container Linux VPS Infrastructure (Docker, Traefik & APIs)',
        category: 'Backend & Infrastructure',
        context: 'Arellano Store & Vibratio EC',
        shortDescription:
          'Linux VPS administration running multi-container Docker stacks, Traefik reverse proxy, PostgreSQL/Redis databases, and secured REST APIs.',
        problem:
          'Need to host and scale multiple critical services (n8n, Chatwoot, Evolution API, FastAPI backends, databases) with secure routing and high availability.',
        solution:
          'Orchestrated Docker containers behind Traefik on Linux VPS, centralized credential management, PostgreSQL persistence, and Redis caching.',
        metrics: ['Multi-container VPS stack', 'Traefik reverse proxy routing', 'Secured APIs & credentials'],
        stack: ['Docker', 'Traefik', 'Linux VPS', 'PostgreSQL', 'Redis', 'FastAPI', 'Git'],
      },
      {
        id: 'fullstack-enterprise-foundations',
        title: 'Modern Full Stack Development (React + Vite + Tailwind, NestJS & Spring Boot)',
        category: 'Full Stack & Databases',
        context: 'Personal Projects & EPN',
        shortDescription:
          'Modern web applications combining fast React + Vite + Tailwind CSS frontends with modular typed backends in NestJS (TypeScript), Spring Boot (Java), and FastAPI.',
        problem:
          'Building maintainable full stack applications with end-to-end static typing, responsive UX, and reliable SQL/NoSQL persistence.',
        solution:
          'Reactive frontends with React, Vite, and Tailwind CSS connected to clean architectures in NestJS (TypeScript) and Spring Boot (Java), backed by PostgreSQL, SQL Server, MySQL, and MongoDB.',
        metrics: ['React + Vite + Tailwind UI', 'Typed NestJS & Spring Boot backends', 'SQL & NoSQL persistence'],
        stack: ['React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
      },
    ],
    education: [
      {
        id: 'epn-software',
        degree: 'B.S. in Software Engineering (Ingeniería en Software)',
        institution: 'Escuela Politécnica Nacional (EPN)',
        period: '2023 – Present',
        status: '7th of 9 Semesters (In Progress)',
        location: 'Quito, Ecuador',
        academicProgress: {
          currentSemester: 7,
          totalCareerSemesters: 9,
          percentage: 78,
          levelingNote: '1 Foundation (Nivelación) semester completed + currently in 7th of 9 career semesters',
        },
        description:
          'Currently in the 7th semester out of 9 career semesters (plus 1 completed introductory foundation semester). Rigorous training in software architecture, backend/full stack engineering, Human-Computer Interaction (HCI), databases, software quality, and agile management.',
        highlights: [
          '7th of 9 Career Semesters',
          'Foundation Semester Completed',
          'Architecture, Backend & Full Stack',
          'Human-Computer Interaction (HCI)',
        ],
      },
      {
        id: 'colegio-fernandez-madrid',
        degree: 'High School Diploma in Sciences (Bachiller en Ciencias)',
        institution: 'Colegio Fernández Madrid',
        period: '2016 – 2022',
        status: 'Graduated',
        location: 'Quito, Ecuador',
        description:
          'Secondary education focused on exact sciences and analytical foundations.',
        highlights: ['Exact Sciences', 'Analytical Foundations'],
      },
    ],
    certifications: [
      {
        id: 'cec-b2-academic-three',
        title: 'Academic Three — English (B2 Level)',
        issuer: 'Continuing Education Center · Escuela Politécnica Nacional (CEC-EPN)',
        status: 'Currently Enrolled',
        badgeType: 'in-progress',
        description:
          'Currently taking Academic Three (CEFR B2), focused on professional fluency, engineering documentation reading, oral communication, and academic writing.',
      },
      {
        id: 'cec-b1',
        title: 'Advanced Two — English B1',
        issuer: 'Continuing Education Center · Escuela Politécnica Nacional (CEC-EPN)',
        status: 'Certified',
        badgeType: 'completed',
        description:
          'Official CEFR B1 intermediate proficiency certification in English comprehension, speaking, and writing.',
      },
    ],
    spokenLanguages: [
      {
        name: 'Spanish',
        level: 'Native',
        cefr: 'C2 / Native',
        percentage: 100,
        detail: 'Full professional proficiency, technical documentation, and presentations.',
      },
      {
        name: 'English',
        level: 'Upper-Intermediate · Taking Academic Three (B2)',
        cefr: 'Certified B1 → Academic Three (B2) in progress',
        percentage: 78,
        detail: 'Currently enrolled in Academic Three (B2) at CEC-EPN. Fluent reading of technical documentation and academic/business communication.',
      },
    ],
  },
};

export const TECHNICAL_SKILLS = [
  // Lenguajes
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Avanzado · Principal Backend & IA', en: 'Advanced · Core Backend & AI' },
    context: {
      es: 'Desarrollo de servicios en FastAPI, automatización, integración con Gemini API y arquitecturas RAG en Vibratio EC.',
      en: 'FastAPI services, automation scripts, and Gemini API / RAG integration at Vibratio EC.',
    },
    keywords: ['backend', 'scripting', 'ai', 'ia', 'fastapi', 'rag', 'datos'],
    featured: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Sólido · Backend (NestJS) & Frontend (React)', en: 'Strong · Backend (NestJS) & Frontend (React)' },
    context: {
      es: 'Desarrollo full stack con tipado estático utilizando NestJS en el backend y React + Vite + Tailwind CSS en el frontend.',
      en: 'Full stack type-safe development using NestJS on the backend and React + Vite + Tailwind CSS on the frontend.',
    },
    keywords: ['frontend', 'backend', 'fullstack', 'nestjs', 'react', 'vite', 'node', 'types'],
    featured: true,
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Sólido · Backend & POO', en: 'Strong · Backend & OOP' },
    context: {
      es: 'Desarrollo empresarial con Spring Boot, Maven, programación orientada a objetos y patrones de diseño.',
      en: 'Enterprise development with Spring Boot, Maven, object-oriented programming, and design patterns.',
    },
    keywords: ['backend', 'oop', 'poo', 'spring', 'maven', 'jvm', 'enterprise'],
    featured: true,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Sólido · Web & Automatización', en: 'Strong · Web & Automation' },
    context: {
      es: 'Desarrollo de interfaces dinámicas con React + Vite, consumo de APIs REST y lógica personalizada en nodos de n8n.',
      en: 'Dynamic UI development with React + Vite, REST API consumption, and custom logic in n8n nodes.',
    },
    keywords: ['frontend', 'web', 'es6', 'react', 'vite', 'n8n', 'json'],
    featured: false,
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Sólido · Consultas & Modelado', en: 'Strong · Queries & Modeling' },
    context: {
      es: 'Diseño relacional, consultas complejas, índices y persistencia en PostgreSQL, SQL Server y MySQL.',
      en: 'Relational design, complex queries, indexing, and persistence across PostgreSQL, SQL Server, and MySQL.',
    },
    keywords: ['database', 'base de datos', 'relacional', 'queries', 'postgres', 'mysql'],
    featured: false,
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'languages',
    categoryLabel: { es: 'Lenguajes', en: 'Languages' },
    level: { es: 'Fundamentos & Algoritmos', en: 'Foundations & Algorithms' },
    context: {
      es: 'Estructuras de datos, análisis algorítmico y gestión eficiente de memoria.',
      en: 'Data structures, algorithmic analysis, and efficient memory management.',
    },
    keywords: ['algoritmos', 'estructuras de datos', 'sistemas', 'c'],
    featured: false,
  },

  // Frameworks & Web
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'frameworks',
    categoryLabel: { es: 'Frameworks & Web', en: 'Frameworks & Web' },
    level: { es: 'Avanzado · Producción', en: 'Advanced · Production' },
    context: {
      es: 'Construcción de APIs REST asíncronas, validación con Pydantic, seguridad y documentación OpenAPI.',
      en: 'Asynchronous REST APIs, Pydantic validation, endpoint security, and OpenAPI documentation.',
    },
    keywords: ['python', 'api', 'rest', 'backend', 'swagger', 'openapi', 'async'],
    featured: true,
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'frameworks',
    categoryLabel: { es: 'Frameworks & Web', en: 'Frameworks & Web' },
    level: { es: 'Competente · Backend Modular con TypeScript', en: 'Proficient · Modular TypeScript Backend' },
    context: {
      es: 'Desarrollo de APIs y servicios backend escalables utilizando arquitectura modular, inyección de dependencias y TypeScript.',
      en: 'Building scalable backend APIs and services using modular architecture, dependency injection, and TypeScript.',
    },
    keywords: ['typescript', 'node', 'nodejs', 'backend', 'api', 'rest', 'arquitectura'],
    featured: true,
  },
  {
    id: 'react',
    name: 'React + Vite + Tailwind CSS',
    category: 'frameworks',
    categoryLabel: { es: 'Frameworks & Web', en: 'Frameworks & Web' },
    level: { es: 'Sólido · Frontend Moderno & UI', en: 'Strong · Modern Frontend & UI' },
    context: {
      es: 'Desarrollo de interfaces web rápidas, responsivas y accesibles combinando React, empaquetado ultrarrápido con Vite y diseño con Tailwind CSS.',
      en: 'Building fast, responsive, and accessible web interfaces combining React, Vite bundling, and Tailwind CSS styling.',
    },
    keywords: ['frontend', 'ui', 'ux', 'vite', 'tailwind', 'tailwindcss', 'css', 'javascript', 'typescript'],
    featured: true,
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'frameworks',
    categoryLabel: { es: 'Frameworks & Web', en: 'Frameworks & Web' },
    level: { es: 'Competente · Arquitectura Java', en: 'Proficient · Java Architecture' },
    context: {
      es: 'Creación de servicios RESTful empresariales en Java, inyección de dependencias y persistencia JPA.',
      en: 'Enterprise RESTful services in Java, dependency injection, and JPA persistence.',
    },
    keywords: ['java', 'backend', 'api', 'rest', 'maven', 'microservicios', 'jpa'],
    featured: true,
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'frameworks',
    categoryLabel: { es: 'Frameworks & Web', en: 'Frameworks & Web' },
    level: { es: 'Práctico · Gestión Web & E-commerce', en: 'Practical · Web & E-commerce Management' },
    context: {
      es: 'Administración, mantenimiento e integración de la plataforma web comercial en Arellano Store con flujos automatizados.',
      en: 'Managing, maintaining, and integrating the commercial web platform at Arellano Store with automated workflows.',
    },
    keywords: ['cms', 'web', 'ecommerce', 'arellano', 'php', 'sitio web'],
    featured: false,
  },

  // Bases de Datos & Caché
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'databases',
    categoryLabel: { es: 'Bases de Datos', en: 'Databases' },
    level: { es: 'Avanzado · Producción en VPS', en: 'Advanced · VPS Production' },
    context: {
      es: 'Motor relacional principal en producción para n8n, Chatwoot y servicios backend en Arellano Store y proyectos en FastAPI/Spring Boot.',
      en: 'Primary production relational database for n8n, Chatwoot, and backend services at Arellano Store and FastAPI/Spring Boot projects.',
    },
    keywords: ['sql', 'db', 'relacional', 'postgres', 'acid', 'backend', 'arellano'],
    featured: true,
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'databases',
    categoryLabel: { es: 'Bases de Datos', en: 'Databases' },
    level: { es: 'Competente · Caché, Colas & Sesiones', en: 'Proficient · Cache, Queues & Sessions' },
    context: {
      es: 'Despliegue y gestión en contenedores Docker en Arellano Store para manejo de colas de eventos, caché en memoria y soporte a Chatwoot/Evolution API/n8n.',
      en: 'Dockerized deployment at Arellano Store for in-memory caching, message queues, and supporting Chatwoot/Evolution API/n8n.',
    },
    keywords: ['cache', 'in-memory', 'nosql', 'queues', 'colas', 'docker', 'arellano'],
    featured: true,
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'databases',
    categoryLabel: { es: 'Bases de Datos', en: 'Databases' },
    level: { es: 'Competente · Entornos Empresariales', en: 'Proficient · Enterprise Environments' },
    context: {
      es: 'Modelado de datos, consultas transaccionales (T-SQL) y administración en proyectos académicos y empresariales.',
      en: 'Data modeling, transactional queries (T-SQL), and administration in academic and enterprise projects.',
    },
    keywords: ['sql', 'microsoft', 'tsql', 'relacional', 'db'],
    featured: false,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    categoryLabel: { es: 'Bases de Datos', en: 'Databases' },
    level: { es: 'Competente · Aplicaciones Web', en: 'Proficient · Web Applications' },
    context: {
      es: 'Diseño de esquemas relacionales, normalización e integración con servicios web.',
      en: 'Relational schema design, normalization, and integration with web services.',
    },
    keywords: ['sql', 'relacional', 'db', 'mariadb', 'web'],
    featured: false,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    categoryLabel: { es: 'Bases de Datos', en: 'Databases' },
    level: { es: 'Competente · NoSQL Documental', en: 'Proficient · Document NoSQL' },
    context: {
      es: 'Almacenamiento flexible orientado a documentos JSON/BSON para payloads dinámicos y microservicios.',
      en: 'Flexible JSON/BSON document storage for dynamic payloads and microservices.',
    },
    keywords: ['nosql', 'documentos', 'json', 'db', 'base de datos'],
    featured: false,
  },

  // Herramientas, DevOps & VPS
  {
    id: 'docker',
    name: 'Docker (Multi-Contenedor)',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Avanzado · Producción en Servidor VPS', en: 'Advanced · VPS Production' },
    context: {
      es: 'Administración de múltiples contenedores en producción (n8n, Chatwoot, Evolution API, PostgreSQL, Redis, Traefik) sobre Linux VPS en Arellano Store.',
      en: 'Managing multi-container production stacks (n8n, Chatwoot, Evolution API, PostgreSQL, Redis, Traefik) on Linux VPS at Arellano Store.',
    },
    keywords: ['containers', 'contenedores', 'devops', 'linux', 'deploy', 'vps', 'docker-compose'],
    featured: true,
  },
  {
    id: 'traefik',
    name: 'Traefik',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Competente · Reverse Proxy & Enrutamiento', en: 'Proficient · Reverse Proxy & Routing' },
    context: {
      es: 'Configuración de proxy inverso dinámico y certificados SSL para exponer de forma segura múltiples contenedores Docker en el VPS de Arellano Store.',
      en: 'Dynamic reverse proxy and SSL configuration to securely expose multiple Docker containers on the Arellano Store VPS.',
    },
    keywords: ['proxy', 'reverse proxy', 'docker', 'ssl', 'https', 'networking', 'vps', 'devops'],
    featured: true,
  },
  {
    id: 'linux',
    name: 'Linux VPS & Servidores',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Avanzado · Administración & Despliegue', en: 'Advanced · Server Admin & Deployment' },
    context: {
      es: 'Gestión integral de servidores Linux VPS en Arellano Store y Vibratio EC: monitoreo de recursos, seguridad, redes, Docker y despliegues.',
      en: 'End-to-end Linux VPS server management at Arellano Store and Vibratio EC: resource monitoring, security, networking, Docker, and deployments.',
    },
    keywords: ['servidor', 'vps', 'bash', 'ssh', 'ubuntu', 'deploy', 'infraestructura', 'linux'],
    featured: true,
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Avanzado · Flujo Colaborativo', en: 'Advanced · Collaborative Workflow' },
    context: {
      es: 'Control de versiones distribuido, ramas, Pull Requests, resolución de conflictos y trabajo ágil en equipo.',
      en: 'Distributed version control, branching strategies, Pull Requests, conflict resolution, and agile teamwork.',
    },
    keywords: ['github', 'gitlab', 'versiones', 'devops', 'colaboracion'],
    featured: true,
  },
  {
    id: 'postman',
    name: 'Postman & Integración ERP',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Avanzado · Consumo de APIs & ERP', en: 'Advanced · API & ERP Consumption' },
    context: {
      es: 'Pruebas de endpoints REST, integración con endpoints del ERP corporativo para inventario y proformas, y validación de Webhooks.',
      en: 'REST endpoint testing, corporate ERP endpoint integration for inventory and proformas, and Webhook validation.',
    },
    keywords: ['api', 'rest', 'erp', 'testing', 'webhooks', 'http', 'proformas', 'inventario'],
    featured: false,
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Competente · Gestión Ágil & CI/CD', en: 'Proficient · Agile & CI/CD' },
    context: {
      es: 'Seguimiento de tableros ágiles (Scrum/Kanban), repositorios y flujos de integración continua.',
      en: 'Agile board tracking (Scrum/Kanban), repositories, and continuous integration workflows.',
    },
    keywords: ['cloud', 'ci', 'cd', 'agile', 'scrum', 'devops', 'microsoft'],
    featured: false,
  },
  {
    id: 'maven',
    name: 'Maven',
    category: 'tools',
    categoryLabel: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' },
    level: { es: 'Competente · Gestión de Builds Java', en: 'Proficient · Java Build Management' },
    context: {
      es: 'Gestión de dependencias, ciclo de vida de compilación y empaquetado en proyectos Java y Spring Boot.',
      en: 'Dependency management, build lifecycle, and packaging in Java and Spring Boot projects.',
    },
    keywords: ['java', 'spring', 'build', 'dependencias'],
    featured: false,
  },

  // IA, Automatización & Omnicanalidad
  {
    id: 'n8n',
    name: 'n8n (Flujos, Credenciales & Agentes)',
    category: 'ai',
    categoryLabel: { es: 'IA y Automatización', en: 'AI & Automation' },
    level: { es: 'Avanzado · Producción en Arellano Store & Vibratio', en: 'Advanced · Production at Arellano Store & Vibratio' },
    context: {
      es: 'Orquestación de flujos para responder en Meta y TikTok, consultar inventario en ERP, automatizar proformas y administrar credenciales seguras.',
      en: 'Orchestrating workflows to reply on Meta & TikTok, query ERP inventory, automate proformas, and manage secure credentials.',
    },
    keywords: ['automatizacion', 'automation', 'webhooks', 'workflows', 'erp', 'credenciales', 'arellano'],
    featured: true,
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio & Gemini API',
    category: 'ai',
    categoryLabel: { es: 'IA y Automatización', en: 'AI & Automation' },
    level: { es: 'Avanzado · Optimización de Consumo & LLMs', en: 'Advanced · Usage Optimization & LLMs' },
    context: {
      es: 'Integración de modelos Gemini, revisión y optimización de consumo de tokens/cuotas en Google AI Studio y asistentes inteligentes.',
      en: 'Integrating Gemini models, monitoring and optimizing token/quota usage in Google AI Studio, and building intelligent assistants.',
    },
    keywords: ['ia', 'ai', 'llm', 'google', 'gemini', 'tokens', 'optimizacion', 'studio'],
    featured: true,
  },
  {
    id: 'chatwoot-evolution',
    name: 'Chatwoot & Evolution API',
    category: 'ai',
    categoryLabel: { es: 'IA y Automatización', en: 'AI & Automation' },
    level: { es: 'Avanzado · Mensajería Omnicanal', en: 'Advanced · Omnichannel Messaging' },
    context: {
      es: 'Integración de bandeja omnicanal Chatwoot y conector de WhatsApp con Evolution API junto a agentes automatizados en n8n en Arellano Store.',
      en: 'Integrating Chatwoot omnichannel inbox and WhatsApp Evolution API connector with automated n8n agents at Arellano Store.',
    },
    keywords: ['chatwoot', 'evolution', 'whatsapp', 'omnicanal', 'mensajeria', 'crm', 'bots'],
    featured: true,
  },
  {
    id: 'meta-tiktok-apis',
    name: 'Meta & TikTok Automatización',
    category: 'ai',
    categoryLabel: { es: 'IA y Automatización', en: 'AI & Automation' },
    level: { es: 'Avanzado · Redes Sociales & Atención al Cliente', en: 'Advanced · Social Media & Customer Experience' },
    context: {
      es: 'Flujos automatizados para responder mensajes directos y comentarios en publicaciones de Meta (Facebook/Instagram) y TikTok mejorando la experiencia de usuario.',
      en: 'Automated workflows to reply to direct messages and post comments across Meta (Facebook/Instagram) and TikTok to improve user experience.',
    },
    keywords: ['meta', 'tiktok', 'instagram', 'facebook', 'redes sociales', 'comentarios', 'mensajes'],
    featured: true,
  },
  {
    id: 'prompt-security-rag',
    name: 'Seguridad IA (Anti-Prompt Injection) & RAG',
    category: 'ai',
    categoryLabel: { es: 'IA y Automatización', en: 'AI & Automation' },
    level: { es: 'Avanzado · Seguridad en LLMs & RAG', en: 'Advanced · LLM Security & RAG' },
    context: {
      es: 'Prevención de ataques de Prompt Injection en agentes de atención al cliente en Arellano Store y arquitectura RAG jurídica en Vibratio EC.',
      en: 'Preventing Prompt Injection attacks in customer-facing AI agents at Arellano Store and legal RAG architecture at Vibratio EC.',
    },
    keywords: ['ia', 'ai', 'seguridad', 'prompt injection', 'rag', 'embeddings', 'vectores', 'llm'],
    featured: true,
  },
];

export const GLOSSARY_TERMS = {
  RAG: {
    term: 'RAG (Retrieval-Augmented Generation)',
    es: 'Técnica de Inteligencia Artificial que recupera información verificada de una base de documentos propia antes de generar una respuesta con Gemini, garantizando precisión.',
    en: 'AI technique that retrieves verified excerpts from a proprietary document base before generating an answer with Gemini, ensuring accuracy.',
  },
  n8n: {
    term: 'n8n (Workflow Automation)',
    es: 'Plataforma de orquestación de flujos de trabajo usada por Néstor para conectar Meta, TikTok, Chatwoot, Evolution API, endpoints del ERP y agentes de IA.',
    en: 'Workflow orchestration platform used by Néstor to connect Meta, TikTok, Chatwoot, Evolution API, ERP endpoints, and AI agents.',
  },
  FastAPI: {
    term: 'FastAPI',
    es: 'Framework moderno y de alto rendimiento en Python para construir APIs REST rápidas, seguras y con validación automática de datos.',
    en: 'Modern, high-performance Python web framework for building fast, secure REST APIs with automatic data validation.',
  },
  Chatwoot: {
    term: 'Chatwoot & Evolution API',
    es: 'Ecosistema de comunicación omnicanal que centraliza conversaciones de WhatsApp (vía Evolution API), Meta y TikTok, permitiendo atención híbrida entre bots de IA y agentes humanos.',
    en: 'Omnichannel communication stack centralizing WhatsApp (via Evolution API), Meta, and TikTok conversations for hybrid AI bot and human support.',
  },
  Traefik: {
    term: 'Traefik Reverse Proxy',
    es: 'Proxy inverso y balanceador moderno ideal para entornos Docker que gestiona automáticamente el enrutamiento y certificados HTTPS entre múltiples contenedores en el servidor VPS.',
    en: 'Modern reverse proxy and load balancer for Docker environments that automatically manages routing and HTTPS certificates across multiple VPS containers.',
  },
  PromptInjection: {
    term: 'Prevención de Prompt Injection',
    es: 'Mecanismos de seguridad y sanitización de instrucciones para evitar que usuarios malintencionados manipulen el comportamiento del modelo de IA o extraigan información interna.',
    en: 'Security guardrails and instruction sanitization to prevent malicious users from hijacking the AI model behavior or leaking internal instructions.',
  },
  'CEC-EPN': {
    term: 'CEC-EPN (Academic Three - B2)',
    es: 'Centro de Educación Continua de la Escuela Politécnica Nacional, donde Néstor obtuvo su certificación B1 de inglés y cursa actualmente Academic Three (Nivel B2).',
    en: 'Continuing Education Center at Escuela Politécnica Nacional, where Néstor earned his B1 English certification and is currently enrolled in Academic Three (B2 Level).',
  },
};

export const RECRUITER_FAQS = {
  es: [
    {
      q: '¿Cuál es la experiencia actual de Néstor y qué tecnologías domina en producción?',
      a: 'Desde agosto de 2026 realiza su pasantía de 6 meses en Arellano Store (Quito), liderando automatizaciones con n8n, Chatwoot, Evolution API, Meta/TikTok, integración con ERP (inventario y proformas), seguridad anti-Prompt Injection, Google AI Studio y gestión de un servidor Linux VPS con Docker, Traefik, PostgreSQL, Redis y WordPress.',
    },
    {
      q: '¿En qué etapa de su formación universitaria e idioma inglés se encuentra?',
      a: 'Se encuentra en el 7.º semestre de 9 de la carrera de Ingeniería en Software en la Escuela Politécnica Nacional (habiendo aprobado además el semestre inicial de nivelación), y cursa actualmente Academic Three (Nivel B2) de inglés en el CEC-EPN.',
    },
    {
      q: '¿Qué tecnologías maneja en desarrollo Backend y Full Stack?',
      a: 'En Backend trabaja con Python (FastAPI), TypeScript (NestJS) y Java (Spring Boot). En Frontend construye aplicaciones modernas con React, Vite y Tailwind CSS, integradas con bases de datos PostgreSQL, Redis, SQL Server, MySQL y MongoDB.',
    },
  ],
  en: [
    {
      q: 'What is Néstor’s current role and production tech stack?',
      a: 'Since August 2026, he is completing a 6-month internship at Arellano Store (Quito), building automations with n8n, Chatwoot, Evolution API, Meta/TikTok, ERP integrations (inventory & proformas), Anti-Prompt Injection guardrails, Google AI Studio optimization, and managing a multi-container Linux VPS with Docker, Traefik, PostgreSQL, Redis, and WordPress.',
    },
    {
      q: 'Where is he in his university degree and English proficiency?',
      a: 'He is currently in the 7th semester out of 9 in the Software Engineering program at Escuela Politécnica Nacional (plus 1 completed foundation semester), and is currently taking Academic Three (B2 Level) English at CEC-EPN.',
    },
    {
      q: 'What is his Backend and Full Stack development stack?',
      a: 'On the backend, he works with Python (FastAPI), TypeScript (NestJS), and Java (Spring Boot). On the frontend, he builds modern UIs with React, Vite, and Tailwind CSS, backed by PostgreSQL, Redis, SQL Server, MySQL, and MongoDB.',
    },
  ],
};
