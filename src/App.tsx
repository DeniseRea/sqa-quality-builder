import React, { useState, useRef } from 'react';
import {
  Book,
  FileCheck,
  Map,
  Rocket,
  Settings,
  ShieldCheck,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Info,
  Target,
  Users,
  Layers,
  ClipboardCheck,
  Lightbulb,
  Download,
  X,
  FolderOpen,
  ExternalLink,
  Globe,
  Award,
  AlertTriangle,
} from 'lucide-react';

/* ───────────────────── DATA ───────────────────── */
const ROADMAP_PHASES = [
  {
    id: '-1',
    order: '1',
    code: 'ISO/IEC 29110-1',
    title: 'Conceptos y vocabulario',
    cardTitle: 'Alinea el lenguaje',
    cardText: 'Definir terminos base para decisiones y comunicacion interna.',
    color: 'rose' as const,
    icon: Book,
    position: { x: 8, y: 45 },
    comms: {
      summary: 'Establecer un vocabulario comun para reducir ambiguedad y acelerar decisiones.',
      tasks: ['Definir VSE y roles clave', 'Unificar terminos PM/SI', 'Crear glosario vivo'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC TR 29110-1:2016',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC TR 29110-1:2016\nTítulo: Software Engineering - Lifecycle Profiles for Very Small Entities (VSEs) - Part 1: Overview\nEstado: Publicada (en revisión para 2025-2026)\n\nCONTENIDO:\nIntroduce los conceptos principales de la serie, define qué es una VSE (entidad de hasta 25 personas) y explica la justificación de los perfiles de ciclo de vida.',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DOCUMENTOS:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial | ISO Store (compra) | https://dntms.isolutions.iso.org/standard/62711.html |\n| Próxima versión | ISO/IEC DIS 29110-1-1 (en desarrollo) | https://dntms.isolutions.iso.org/standard/62711.html |\n| Próxima versión | ISO/IEC DIS 29110-1-2 (en desarrollo) | https://dntms.isolutions.iso.org/standard/62711.html |',
        },
        {
          title: 'Resumen de la Serie ISO/IEC 29110',
          content: '📊 RESUMEN DE LA SERIE COMPLETA:\n\n29110-1 (Overview) → Visión general, conceptos\n29110-2 (Framework) → Taxonomía, estructura\n29110-3 (Assessment) → Guía de evaluación\n29110-4 (Profile Specs) → Especificación normativa\n29110-5 (Guidelines) → Guías prácticas + DPs',
        },
        {
          title: '¿Qué perfil elegir?',
          content: '📊 TABLA DE PERFILES:\n\n| Perfil | Cuándo usarlo |\n|--------|---------------|\n| Entry (-5-1-1) | Proyectos ≤ 6 personas-mes, startups, equipos muy pequeños |\n| Basic (-5-1-2) | VSEs con desarrollo software, necesitan procesos ligeros pero completos |',
        },
      ],
      guide: [
        {
          icon: Info,
          title: '¿Que es la ISO/IEC 29110?',
          body: 'Es una serie de estandares internacionales diseñada especificamente para Entidades Muy Pequeñas (VSE — Very Small Entities): empresas, departamentos o proyectos con hasta 25 personas. Su objetivo es ofrecer un marco ligero y practico de ingenieria de software y sistemas sin la burocracia de normas pesadas como CMMI o ISO 9001.',
        },
        {
          icon: Users,
          title: '¿Que es una VSE?',
          body: 'Una VSE es cualquier entidad (empresa, organizacion, departamento o proyecto) que tenga como maximo 25 personas. Esto incluye startups, equipos internos de TI, consultoras pequeñas y proyectos academicos. La norma no excluye su uso por entidades mas grandes.',
        },
        {
          icon: BookOpen,
          title: 'Conceptos clave de esta parte',
          body: 'La Parte 1 introduce los terminos fundamentales: ciclo de vida, proceso, perfil, producto de trabajo, rol, actividad y tarea. Define que un "perfil" es un subconjunto de estandares adaptado al tamaño y contexto de la VSE. Tambien explica la logica de la serie completa (Partes 1 a 5) y como cada documento se relaciona.',
        },
        {
          icon: Lightbulb,
          title: '¿Por que importa?',
          body: 'Sin un vocabulario comun, cada persona del equipo interpreta las cosas distinto. Esta parte asegura que cuando hables de "requisito", "plan de proyecto" o "verificacion", todos enciendan exactamente lo mismo. Es el punto de partida obligatorio antes de implementar cualquier perfil.',
        },
      ],
    },
  },
  {
    id: '-2',
    order: '2',
    code: 'ISO/IEC 29110-2',
    title: 'Marco y perfiles',
    cardTitle: 'Define el perfil',
    cardText: 'Selecciona el perfil adecuado segun tamaño y alcance.',
    color: 'amber' as const,
    icon: Map,
    position: { x: 24, y: 30 },
    comms: {
      summary: 'Determinar el perfil que mejor se ajusta a tu realidad operativa.',
      tasks: ['Evaluar tamaño del equipo', 'Definir alcance del proyecto', 'Elegir perfil inicial o basico'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC 29110-2:2015',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC 29110-2-1:2015 + Amendment 1:2022\nTítulo: *Framework and taxonomy*\nEstado: Vigente\nPáginas: 32\n\nPÚBLICO OBJETIVO:\nProductores de estándares, proveedores de herramientas y metodologías.\n\nCONTENIDO:\nEstablece la lógica para la definición de perfiles, especifica elementos comunes (estructura, conformidad, evaluación).',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DOCUMENTOS:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial | IEC Webstore (compra - CHF 159) | https://webstore.iec.ch/en/publication/23686 |\n| Enmienda 2022 | Amendment 1:2022 | https://webstore.iec.ch/en/publication/23686 |\n\n**Público objetivo**: Productores de estándares, proveedores de herramientas y metodologías',
        },
      ],
      guide: [
        {
          icon: Layers,
          title: 'Los 4 perfiles de la norma',
          body: 'La ISO 29110 define un camino progresivo con 4 perfiles:\n\n• Entrada (Entry): Para startups o proyectos muy pequeños (menos de 6 personas-mes). Documentacion minima.\n\n• Basico (Basic): Para una VSE con un solo equipo trabajando en un solo proyecto. Es el perfil mas utilizado.\n\n• Intermedio (Intermediate): Para VSEs que manejan varios proyectos en paralelo.\n\n• Avanzado (Advanced): Para organizaciones que buscan crecimiento sostenido y gestion de portafolio.',
        },
        {
          icon: Target,
          title: '¿Como elegir tu perfil?',
          body: 'Hazte estas preguntas:\n\n1. ¿Cuantas personas hay en tu equipo? (Si son menos de 6, considera Entry)\n2. ¿Manejas un solo proyecto o varios simultaneos? (Un proyecto = Basic)\n3. ¿Tu software es critico (vidas humanas, seguridad)? (Si lo es, necesitas perfiles superiores)\n4. ¿Ya tienes procesos documentados? (Si no, empieza por Entry)',
        },
        {
          icon: Info,
          title: '¿Que define esta parte?',
          body: 'La Parte 2 establece el marco (framework) y la taxonomia para crear perfiles. Define las reglas de conformidad, como se estructuran los perfiles y como se eligen los elementos de estandares mas grandes (como ISO/IEC 12207) para crear subconjuntos adecuados para VSEs. Basicamente es el "manual de arquitectura" de toda la serie.',
        },
        {
          icon: Lightbulb,
          title: 'Consejo practico',
          body: 'La mayoria de equipos pequeños deben empezar por el Perfil Basico. No intentes saltar a Intermedio o Avanzado sin haber consolidado primero los procesos basicos de Gestion de Proyectos (PM) e Implementacion de Software (SI). Crecer de perfil debe ser una decision natural, no forzada.',
        },
      ],
    },
  },
  {
    id: '-3',
    order: '3',
    code: 'ISO/IEC 29110-3',
    title: 'Guia de evaluacion',
    cardTitle: 'Evalua brechas',
    cardText: 'Detecta desviaciones y prepara una auditoria interna.',
    color: 'emerald' as const,
    icon: ShieldCheck,
    position: { x: 41, y: 56 },
    comms: {
      summary: 'Validar el nivel de cumplimiento antes de una evaluacion formal.',
      tasks: ['Aplicar checklist de cumplimiento', 'Identificar brechas criticas', 'Priorizar acciones correctivas'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC TR 29110-3:2015',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC TR 29110-3-1:2015\nTítulo: *Assessment guide*\nEstado: Vigente (reemplaza a la versión 2011)\n\nPÚBLICO OBJETIVO:\nEvaluadores, patrocinadores de auditorías, desarrolladores de métodos de evaluación.\n\nCONTENIDO:\nDefine directrices de evaluación de procesos y requisitos de conformidad para perfiles VSE. Compatible con ISO/IEC 33002.',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DOCUMENTOS:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial | ANSI Webstore (compra - $81.00 USD) | https://webstore.ansi.org/standards/iso/isoiectr291102015 |\n| Versión reemplazada (2011) | IEC Webstore (histórica) | https://webstore.iec.ch/en/publication/11344 |',
        },
      ],
      guide: [
        {
          icon: ClipboardCheck,
          title: '¿Que es un Assessment (evaluacion)?',
          body: 'Es el proceso de comparar tus practicas actuales contra los requisitos del perfil que elegiste. Puede ser:\n\n• Autoevaluacion: Tu equipo revisa internamente que cumple y que no.\n• Evaluacion externa: Un auditor certificado revisa tus procesos y evidencias.\n• Evaluacion de conformidad: Verificacion formal para obtener certificacion.',
        },
        {
          icon: Target,
          title: 'Como hacer un analisis de brechas (Gap Analysis)',
          body: 'Paso 1: Lista todos los requisitos del perfil que elegiste (PM y SI).\nPaso 2: Para cada requisito, marca tu estado: Cumple / Parcial / No cumple.\nPaso 3: Documenta la evidencia que tienes (o que falta).\nPaso 4: Prioriza: ¿que brechas son criticas y cuales pueden esperar?\nPaso 5: Crea un plan de accion con responsables y fechas.',
        },
        {
          icon: Info,
          title: '¿Que cubre la Parte 3?',
          body: 'La Parte 3 define los requisitos y guias para realizar evaluaciones de procesos en VSEs. Especifica como evaluar la capacidad de los procesos, como documentar hallazgos y como determinar si una VSE cumple con un perfil determinado. Esta alineada con ISO/IEC 33003 (marcos de evaluacion de procesos).',
        },
        {
          icon: Lightbulb,
          title: 'Tip para tu primera evaluacion',
          body: 'No necesitas un auditor externo para empezar. Crea una tabla simple en Excel con las columnas: Requisito | Estado | Evidencia | Accion requerida. Revisa cada tarea de PM y SI del perfil elegido. Lo importante es ser honesto: una brecha identificada es una oportunidad de mejora, no un fracaso.',
        },
      ],
    },
  },
  {
    id: '-4-1',
    order: '4-1',
    code: 'ISO/IEC 29110-4-1',
    title: 'Especificaciones (Basico)',
    cardTitle: 'Requisitos clave',
    cardText: 'Establece los requisitos obligatorios del perfil Basico.',
    color: 'sky' as const,
    icon: FileCheck,
    position: { x: 58, y: 35 },
    comms: {
      summary: 'Definir lo que debe existir para cumplir el perfil basico.',
      tasks: ['Verificar requisitos PM', 'Verificar requisitos SI', 'Asegurar trazabilidad'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC 29110-4-1:2018',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC 29110-4-1:2018 (2ª edición)\nTítulo: *Profile specifications: Generic profile group*\nEstado: Vigente (reemplaza edición 2011)\nPáginas: 52\n\nCONTENIDO:\nEspecificación del **Basic Profile** - selecciona elementos de ISO/IEC 12207 (gestión de proyectos e implementación de software).',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DOCUMENTOS:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial | ANSI Webstore (compra - $164.00 USD) | https://webstore.ansi.org/standards/iso/ISOIEC291102018 |\n| Versión histórica (2011) | IEC Webstore (reemplazada) | https://webstore.iec.ch/en/publication/11345 |',
        },
      ],
      guide: [
        {
          icon: Layers,
          title: 'Estructura del Perfil Basico',
          body: 'El Perfil Basico del Grupo Generico se organiza en dos procesos principales:\n\n• Gestion de Proyectos (PM): Planificar, ejecutar, controlar y cerrar el proyecto.\n• Implementacion de Software (SI): Desde requisitos hasta entrega, pasando por diseño, construccion y pruebas.\n\nCada proceso define roles, actividades, tareas y productos de trabajo obligatorios.',
        },
        {
          icon: Users,
          title: 'Roles definidos',
          body: '• Cliente: Quien solicita y recibe el producto.\n• Lider de Proyecto: Planifica, ejecuta y controla el proyecto.\n• Equipo de Trabajo: Analistas, diseñadores, programadores, testers.\n• Lider Tecnico: Responsable de decisiones tecnicas clave.\n\nEn una VSE, una misma persona puede cumplir multiples roles.',
        },
        {
          icon: FileCheck,
          title: 'Productos de trabajo obligatorios',
          body: 'Para PM:\n— Plan de proyecto\n— Acta de aceptacion\n— Reporte de avance\n— Acta de reunion\n— Registro de correccion\n\nPara SI:\n— Especificacion de requisitos\n— Diseño de software\n— Codigo fuente\n— Casos y reporte de pruebas\n— Guia de operacion del producto\n— Manual de mantenimiento',
        },
        {
          icon: Info,
          title: '¿Que define exactamente la Parte 4-1?',
          body: 'La Parte 4-1 es la especificacion formal del perfil. Define QUE debe existir (requisitos), no COMO hacerlo (eso es la Parte 5). Establece los elementos normativos: que procesos, que resultados esperados, que productos de trabajo deben generarse. Es el documento contra el que se evalua el cumplimiento.',
        },
      ],
    },
  },
  {
    id: '-5-1-1',
    order: '5-1-1',
    code: 'ISO/IEC 29110-5-1-1',
    title: 'Guia perfil inicial',
    cardTitle: 'Implementa rapido',
    cardText: 'Aplica plantillas ligeras y practicas minimas viables.',
    color: 'blue' as const,
    icon: Rocket,
    position: { x: 76, y: 52 },
    comms: {
      summary: 'Activar el perfil inicial con guias y plantillas simples.',
      tasks: ['Definir SOW', 'Implementar versionado simple', 'Organizar backlog minimo'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC 29110-5-1-1:2025',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC 29110-5-1-1:2025\nTítulo: *Software engineering guidelines for the generic Entry profile*\nEdición: 1ª edición (Febrero 2025)\nEstado: **NUEVA VERSIÓN 2025** - Reemplaza a ISO/IEC TR 29110-5-1-1:2012\n\nCARACTERISTICAS DEL PERFIL ENTRY:\n• Orientado a: Proyectos pequeños (máx. 6 personas-mes), startups VSE.\n• Base: Anteriormente era un Reporte Técnico (TR), ahora es un estándar internacional completo.',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DEPLOYMENT PACKAGES:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial 2025 | VDE Verlag (preview/compra) | https://www.vde-verlag.de/iec-standards/free-document-download/254815/ |\n| Deployment Package | Plantillas de Software Implementation (DOCX) | http://profs.etsmtl.ca/claporte/English/VSE/Deploy-Pack/Entry%20Profile-DP-Software%20Implementation_03.docx |\n| Deployment Package | Plantillas de Project Management (DOCX) | http://profs.etsmtl.ca/claporte/english/VSE/Deploy-Pack/Entry%20Profile-DP-Project%20Management_03.docx |',
        },
        {
          title: 'Contenido del Deployment Package (Software Implementation)',
          content: '📋 PLANTILLAS INCLUIDAS EN EL DEPLOYMENT PACKAGE:\n\n| Sección | Plantilla incluida |\n|---------|-------------------|\n| 5.1 | Software Implementation Initiation Template |\n| 5.2 | Software Requirements Analysis Template |\n| 5.3 | Software Component Identification Template |\n| 5.4 | Software Construction |\n| 5.5 | Test Specifications Template |\n| 5.6 | Delivery Product Template |',
        },
        {
          title: 'Caso de Estudio: Implementación Metodológica — Rep. Checa',
          content: '🎓 CASO DE ESTUDIO: Eclipse Process Framework (EPF) Composer\n\n| Elemento | Especificación |\n|----------|----------------|\n| Perfiles implementados | Entry Profile (-5-1-1) y Basic Profile (-5-1-2) |\n| País | República Checa |\n| Herramienta | Eclipse Process Framework (EPF) Composer |\n| Objetivo | Gestión efectiva del estándar y publicación como aplicación web |\n\n🌐 ENLACES:\n• Artículo en IGI Global: https://www.igi-global.com/viewtitlesample.aspx?id=169768\n• Autora: Alena Buchalcevova (Prague University of Economics, Czech Republic)\n\nCONTEXTO DOCUMENTADO:\n"Standard usage in the Czech Republic: standard localization, accessibility, and implementation support are of high importance"\n\nESTRUCTURA DE LA METODOLOGÍA:\n1. General Principles\n2. Profile Structure\n3. Profile Element Mapping\n4. Implementation Conventions\n5. EPF Composer Usage Guidelines\n6. Implementation Process',
        },
      ],
      guide: [
        {
          icon: Rocket,
          title: '¿Para quien es el Perfil Entry?',
          body: 'El Perfil Inicial (Entry) esta diseñado para:\n\n• Startups que recien comienzan a desarrollar software.\n• Proyectos muy pequeños (tipicamente menos de 6 personas-mes de esfuerzo).\n• Equipos que no tienen ningun proceso formal todavia.\n• Proyectos academicos o prototipos.\n\nEl objetivo es establecer las practicas MINIMAS para trabajar de forma organizada.',
        },
        {
          icon: ClipboardCheck,
          title: 'Proceso de Gestion de Proyectos (PM) — Entry',
          body: 'En el perfil Entry, PM se simplifica a lo esencial:\n\n1. Crear un Enunciado de Trabajo (SOW) que defina: alcance, objetivos, entregables y calendario.\n2. Mantener un registro simple de tareas y avances.\n3. Realizar reuniones breves de seguimiento.\n4. Documentar cambios si los hay.\n5. Cerrar el proyecto con una aceptacion del cliente.\n\nNo se exige un plan de proyecto formal completo como en el Basico.',
        },
        {
          icon: Settings,
          title: 'Proceso de Implementacion de Software (SI) — Entry',
          body: 'SI en Entry cubre lo minimo viable:\n\n1. Capturar los requisitos del cliente (puede ser informal).\n2. Crear el software (codificar).\n3. Verificar que funcione (pruebas basicas).\n4. Entregar el producto al cliente.\n5. Mantener un control de versiones basico.\n\nNo se exige documentacion de diseño formal ni plan de pruebas separado.',
        },
        {
          icon: Lightbulb,
          title: 'Cuando pasar de Entry a Basic',
          body: 'Deberias avanzar al Perfil Basico cuando:\n\n• Tu equipo crece a mas de 4-5 personas.\n• Los proyectos duran mas de 6 meses.\n• Los clientes exigen documentacion formal.\n• Necesitas trazabilidad entre requisitos y pruebas.\n• Quieres competir en licitaciones o certificarte.\n\nEl Entry es un trampolín, no un destino final.',
        },
      ],
    },
  },
  {
    id: '-5-1-2',
    order: '5-1-2',
    code: 'ISO/IEC 29110-5-1-2',
    title: 'Guia perfil basico',
    cardTitle: 'Formaliza control',
    cardText: 'Define planes, requisitos y pruebas con mayor rigor.',
    color: 'violet' as const,
    icon: Settings,
    position: { x: 92, y: 38 },
    comms: {
      summary: 'Estabilizar el proceso con practicas y documentos formales.',
      tasks: ['Plan de proyecto completo', 'Documento de requisitos', 'Plan de pruebas'],
      resources: [
        {
          title: 'Especificación Oficial — ISO/IEC 29110-5-1-2:2025',
          content: '📌 FICHA TECNICA\n\nNúmero oficial: ISO/IEC 29110-5-1-2:2025\nTítulo: *Software engineering guidelines for the generic Basic profile*\nEstado: Primera edición 2025\n\nCARACTERISTICAS DEL PERFIL BASIC:\n• Diseñado para: Entidades Muy Pequeñas que buscan formalización estructurada.\n• Base: Recientemente actualizada a su primera edición como estándar internacional completo (reemplaza al anterior Reporte Técnico TR 29110-5-1-2:2011).',
        },
        {
          title: 'Recursos de Interés y Enlaces',
          content: '🌐 ENLACES OFICIALES Y DOCUMENTOS:\n\n| Tipo | Recurso | Enlace |\n|------|---------|--------|\n| Norma oficial | NBN/Normadoc (compra) | https://www.normadoc.com/english/nbn-iso-iec-29110-5-1-2-2025.html |\n| Deployment Packages | Colección completa para Basic Profile | http://profs.etsmtl.ca/claporte/Publications/Publications/INCOSE_2011.pdf |',
        },
        {
          title: 'Deployment Packages Disponibles y Estructura',
          content: '📋 DEPLOYMENT PACKAGES DISPONIBLES:\n\n| Deployment Package | Desarrollado por |\n|--------------------|------------------|\n| Requirements Analysis | Bélgica, Canadá |\n| Architecture and Detailed Design | Canadá |\n| Construction and Unit Testing | México |\n| Integration and Test | Colombia |\n| Verification and Validation | Canadá |\n| Version Control | Tailandia |\n| Project Management | Irlanda |\n| Product Delivery | Canadá, Tailandia |\n| Self-Assessment | Finlandia |\n\nESTRUCTURA DE CADA DEPLOYMENT PACKAGE:\n1. Descripción técnica\n2. Definiciones (términos genéricos y específicos)\n3. Relación con ISO/IEC 29110 Part 5\n4. Descripción de procesos, actividades, roles y productos\n5. **Plantillas** (Templates)\n6. Ejemplos\n7. Checklist\n8. Herramientas\n9. Referencias a otros estándares (ISO 9001, CMMI, ISO/IEC 12207)',
        },
        {
          title: 'Caso de Estudio: Experimento Académico — Ecuador',
          content: '🎓 CASO DE ESTUDIO: Escuela Politécnica Nacional (Ecuador)\n\n| Elemento | Especificación |\n|----------|----------------|\n| Perfil | Basic Profile (ISO/IEC TR 29110-5-1-2:2011) |\n| País | Ecuador |\n| Año | 2018 (publicado 2020) |\n| Participantes | 4 equipos de estudiantes universitarios |\n| Duración | 6 semanas |\n| Producto desarrollado | Sistema de agendamiento de citas médicas para el Centro de Bienestar Estudiantil |\n| Metodología base | SCRUM en ambos grupos |\n\n🌐 ENLACES DEL CASO DE ESTUDIO:\n\n| Recurso | Enlace |\n|---------|--------|\n| Artículo completo en ScienceDirect | https://www.sciencedirect.com/science/article/abs/pii/S0920548918304203 |\n| Registro en OUCI (citas: 4) | https://ouci.dntb.gov.ua/en/works/leGMjMk7/ |\n| Referencias Researchr | https://researchr.org/publication/Castillo-Salinas20/references |\n\nHALLAZGOS DOCUMENTADOS:\n"The teams that used the ISO/IEC TR 29110-5-1-2 guide achieved better scores in the quality evaluation of their software processes"\n\nLIMITACIONES IDENTIFICADAS:\n• Plazo de 6 semanas insuficiente (trabajo parcial de estudiantes)\n• Dificultades especiales en construcción y prueba de componentes\n• 98 empresas en Quito, 36 en Guayaquil, 26 en Cuenca',
        },
        {
          title: 'Caso de Estudio: Empresa Automotriz — Ecuador',
          content: '🎓 CASO DE ESTUDIO: Empresa Automotriz Ecuatoriana\n\n| Elemento | Especificación |\n|----------|----------------|\n| Perfil | Basic Profile - Project Management Process |\n| País | Ecuador |\n| Año | 2023 |\n| Sector | Automotriz |\n| Objetivo | Proporcionar a VSEs juicio preliminar en términos de tiempo y sobrecostos |\n\n🌐 ENLACE DEL CASO DE ESTUDIO:\n\n| Recurso | Enlace |\n|---------|--------|\n| Artículo en Dialnet | https://dialnet.unirioja.es/servlet/articulo?codigo=8895230 |\n| Autores | A.V. Vera Delgado, C.M. Zapata-Jaramillo (Universidad Nacional de Colombia) |\n| Publicación | Scientia et Technica, Vol. 28, Nº. 1, 2023, págs. 31-37 |\n\nCONTEXTO DOCUMENTADO:\n"Documented case studies of the ISO/IEC 29110 implementation in Latin America companies are limited, causing uncertainty about the viability of such a standard in VSEs established in the region"\n\nENTREGABLES:\n• Conjunto de lecciones aprendidas durante la implementación\n• Análisis de viabilidad para el contexto latinoamericano',
        },
        {
          title: 'Caso de Estudio: Rover Autónomo (Eclipse)',
          content: '🎓 CASO DE ESTUDIO: Rover Autónomo — Eclipse\n\n| Elemento | Especificación |\n|----------|----------------|\n| Perfil | Basic Profile (ISO/IEC TR 29110-5-1-2:2011) |\n| Plataforma | Eclipse Wiki |\n| Hardware compatible | Arduino Mega 2560, Raspberry PI 2 B+ |\n| Estructura | 9 módulos alineados con Deployment Packages |\n\n🌐 ENLACES DEL CASO DE ESTUDIO:\n\n| Recurso | Enlace |\n|---------|--------|\n| Wiki del Rover Autónomo | https://wiki.eclipse.org/Software_Engineering_the_Autonomous_Rover |\n| Caso de estudio demostración | https://wiki.eclipse.org/ISO/IEC_29110_Lifecycle_Demonstration_Case_Study |\n\n⚠️ NOTA IMPORTANTE:\n"Notice: This Wiki is now read only and edits are no longer possible"',
        },
        {
          title: 'Contexto Global: Aplicaciones Masivas',
          content: '🌏 APLICACIONES MASIVAS DOCUMENTADAS (CONTEXTO GLOBAL):\n\nEl artículo del experimento ecuatoriano documenta los siguientes casos internacionales:\n\n| País | Cantidad de empresas | Perfil | Fuente |\n|------|---------------------|--------|--------|\n| Tailandia | +350 empresas | Basic Profile | ScienceDirect 2020 |\n| México | ~40 empresas | Basic Profile | ScienceDirect 2020 |\n| Colombia | 1 empresa | Basic Profile | ScienceDirect 2020 |',
        },
        {
          title: 'Tabla Resumen de Enlaces por Caso de Estudio',
          content: '📋 TABLA RESUMEN DE ENLACES POR CASO DE ESTUDIO:\n\n| # | Caso de Estudio | Fase | Enlace |\n|---|----------------|------|--------|\n| 1 | Experimento 4 equipos - Ecuador (ScienceDirect) | -5-1-2 | https://www.sciencedirect.com/science/article/abs/pii/S0920548918304203 |\n| 2 | Experimento - OUCI (citas) | -5-1-2 | https://ouci.dntb.gov.ua/en/works/leGMjMk7/ |\n| 3 | Experimento - Researchr | -5-1-2 | https://researchr.org/publication/Castillo-Salinas20/references |\n| 4 | Empresa Automotriz Ecuador (Dialnet) | -5-1-2 | https://dialnet.unirioja.es/servlet/articulo?codigo=8895230 |\n| 5 | Rover Autónomo - Eclipse Wiki | -5-1-2 | https://wiki.eclipse.org/Software_Engineering_the_Autonomous_Rover |\n| 6 | Rover Autónomo - Demostración | -5-1-2 | https://wiki.eclipse.org/ISO/IEC_29110_Lifecycle_Demonstration_Case_Study |\n| 7 | Metodología EPF Composer (IGI Global) | -5-1-1 / -5-1-2 | https://www.igi-global.com/viewtitlesample.aspx?id=169768 |',
        },
      ],
      guide: [
        {
          icon: Target,
          title: 'Gestion de Proyectos (PM) — Basico',
          body: 'El PM del Perfil Basico incluye 4 actividades formales:\n\n1. Planificacion del proyecto: Crear el Plan de Proyecto con alcance, cronograma, recursos, riesgos y costos estimados.\n\n2. Ejecucion del plan: Asignar tareas, distribuir recursos y ejecutar segun lo planificado.\n\n3. Evaluacion y control: Monitorear avance vs. plan, identificar desviaciones y tomar acciones correctivas.\n\n4. Cierre: Entregar el producto, obtener aceptacion formal del cliente y documentar lecciones aprendidas.',
        },
        {
          icon: Settings,
          title: 'Implementacion de Software (SI) — Basico',
          body: 'SI en el Perfil Basico cubre 6 actividades:\n\n1. Inicio: Revisar el plan y establecer el ambiente de trabajo.\n2. Analisis de requisitos: Documentar, verificar y validar requisitos con el cliente.\n3. Diseño: Crear la arquitectura y diseño detallado del software.\n4. Construccion: Codificar y realizar pruebas unitarias.\n5. Integracion y pruebas: Integrar componentes, ejecutar pruebas del sistema y documentar resultados.\n6. Entrega: Entregar el producto final con documentacion de usuario y mantenimiento.',
        },
        {
          icon: FileCheck,
          title: 'Documentos clave que debes generar',
          body: '• Plan de Proyecto: El documento maestro con todo el plan.\n• Especificacion de Requisitos: Lo que el software debe hacer, validado por el cliente.\n• Diseño de Software: Arquitectura, componentes, interfaces.\n• Registro de Trazabilidad: Vincula cada requisito con su diseño, codigo y caso de prueba.\n• Casos de Prueba y Reporte: Que se probo, como y cuales fueron los resultados.\n• Acta de Aceptacion: El cliente firma que el producto cumple.\n• Manual de Usuario y Mantenimiento: Documentacion para operar y mantener el sistema.',
        },
        {
          icon: Lightbulb,
          title: 'Compatibilidad con metodologias agiles',
          body: 'La ISO 29110 NO impone cascada. Puedes implementar el Perfil Basico con Scrum, Kanban o cualquier metodologia agil. Lo importante es que los productos de trabajo existan, no la forma en que los generes. Por ejemplo:\n\n• El "Plan de Proyecto" puede ser tu backlog + definicion de sprints.\n• Los "Requisitos" pueden ser historias de usuario bien documentadas.\n• Las "Pruebas" pueden ser tus tests automatizados con reportes.\n\nLa clave es la trazabilidad y la evidencia, no la ceremonia.',
        },
      ],
    },
  },
];

const THEME = {
  rose: {
    solid: 'bg-gradient-to-br from-rose-500 to-fuchsia-500',
    soft: 'bg-rose-50',
    text: 'text-rose-600',
    ring: 'ring-rose-200',
    border: 'border-rose-200',
    pinFrom: '#f43f5e',
    pinTo: '#d946ef',
    softBorder: 'border-rose-100',
    hoverBg: 'hover:bg-rose-100/60',
  },
  amber: {
    solid: 'bg-gradient-to-br from-amber-500 to-orange-500',
    soft: 'bg-amber-50',
    text: 'text-amber-700',
    ring: 'ring-amber-200',
    border: 'border-amber-200',
    pinFrom: '#f59e0b',
    pinTo: '#f97316',
    softBorder: 'border-amber-100',
    hoverBg: 'hover:bg-amber-100/60',
  },
  emerald: {
    solid: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    soft: 'bg-emerald-50',
    text: 'text-emerald-700',
    ring: 'ring-emerald-200',
    border: 'border-emerald-200',
    pinFrom: '#10b981',
    pinTo: '#14b8a6',
    softBorder: 'border-emerald-100',
    hoverBg: 'hover:bg-emerald-100/60',
  },
  sky: {
    solid: 'bg-gradient-to-br from-sky-500 to-cyan-500',
    soft: 'bg-sky-50',
    text: 'text-sky-700',
    ring: 'ring-sky-200',
    border: 'border-sky-200',
    pinFrom: '#0ea5e9',
    pinTo: '#06b6d4',
    softBorder: 'border-sky-100',
    hoverBg: 'hover:bg-sky-100/60',
  },
  blue: {
    solid: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    soft: 'bg-blue-50',
    text: 'text-blue-700',
    ring: 'ring-blue-200',
    border: 'border-blue-200',
    pinFrom: '#3b82f6',
    pinTo: '#6366f1',
    softBorder: 'border-blue-100',
    hoverBg: 'hover:bg-blue-100/60',
  },
  violet: {
    solid: 'bg-gradient-to-br from-violet-500 to-purple-500',
    soft: 'bg-violet-50',
    text: 'text-violet-700',
    ring: 'ring-violet-200',
    border: 'border-violet-200',
    pinFrom: '#8b5cf6',
    pinTo: '#a855f7',
    softBorder: 'border-violet-100',
    hoverBg: 'hover:bg-violet-100/60',
  },
};

/* ───────────────── GUIDE SECTION COMPONENT ───────────────── */
function GuideSection({
  section,
  color,
  defaultOpen,
}: {
  section: { icon: React.ElementType; title: string; body: string };
  color: keyof typeof THEME;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const theme = THEME[color];
  const Icon = section.icon;

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? theme.border : 'border-slate-100'} ${open ? theme.soft : 'bg-white'}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left transition-colors duration-200 ${theme.hoverBg}`}
      >
        <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${theme.solid}`}>
          <Icon className="h-3.5 w-3.5 text-white" />
        </div>
        <span className={`flex-1 text-xs font-bold leading-snug ${theme.text}`}>{section.title}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 flex-shrink-0 text-slate-400" />
        ) : (
          <ChevronDown className="h-4 w-4 flex-shrink-0 text-slate-400" />
        )}
      </button>
      {open && (
        <div className="px-3.5 pb-3.5 pt-1 animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="text-[13px] leading-relaxed text-slate-600 whitespace-pre-line">{section.body}</div>
        </div>
      )}
    </div>
  );
}

/* ───────────────── FORMATTED CONTENT RENDERER ───────────────── */
interface FormattedContentProps {
  content: string;
  color: keyof typeof THEME;
  completedItems: Record<string, boolean>;
  toggleItem: (key: string) => void;
}

function FormattedContent({
  content,
  color,
  completedItems,
  toggleItem,
}: FormattedContentProps) {
  const theme = THEME[color];
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    // Empty line
    if (line === '') {
      elements.push(<div key={`empty-${i}`} className="h-2.5" />);
      i++;
      continue;
    }

    // Divider
    if (line.includes('━━━━') || line.includes('────')) {
      elements.push(
        <hr key={`divider-${i}`} className="my-5 border-t border-slate-200/75" />
      );
      i++;
      continue;
    }

    // Tables: start of a table is a line starting with '|'
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length > 0) {
        const headerRowRaw = tableLines[0];
        const dataRowsRaw = tableLines.slice(1).filter((l) => !l.includes('---'));

        const parseRow = (rowStr: string) => {
          return rowStr
            .split('|')
            .map((cell) => cell.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        };

        const headers = parseRow(headerRowRaw);
        const rows = dataRowsRaw.map((row) => parseRow(row));

        elements.push(
          <div key={`table-wrapper-${i}`} className="my-4 overflow-x-auto rounded-xl border border-slate-200/80 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`${theme.soft} border-b ${theme.border}`}>
                  {headers.map((h, hIdx) => (
                    <th key={hIdx} className={`px-4 py-2.5 text-xs font-bold tracking-wide ${theme.text}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2.5 text-slate-600 font-medium whitespace-pre-line">
                        {cell.startsWith('http') ? (
                          <a
                            href={cell}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 underline break-all flex items-center gap-1 inline-flex"
                          >
                            Enlace <ExternalLink className="h-3 w-3 flex-shrink-0" />
                          </a>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Checkbox items (e.g. ☐ or [ ] or [x])
    if (line.startsWith('☐') || line.startsWith('[ ]') || line.startsWith('☑') || line.startsWith('[x]')) {
      const isCheckedDefault = line.startsWith('☑') || line.startsWith('[x]');
      const desc = line.replace(/^(☐|\[ \]|☑|\[x\])\s*/, '');
      const itemKey = `${i}-${desc}`;
      const isChecked = completedItems[itemKey] !== undefined ? completedItems[itemKey] : isCheckedDefault;

      elements.push(
        <label key={`check-${i}`} className="flex items-start gap-3 my-2 cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => toggleItem(itemKey)}
            className={`mt-0.5 h-4.5 w-4.5 rounded border-slate-300 ${theme.text} text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer transition-all`}
          />
          <span className={`text-[13px] leading-relaxed transition-all duration-200 ${isChecked ? 'text-slate-400 line-through decoration-slate-300' : 'text-slate-700 font-medium group-hover:text-slate-900'}`}>
            {desc}
          </span>
        </label>
      );
      i++;
      continue;
    }

    // Bullet points (e.g. • or - or *)
    if (line.startsWith('•') || line.startsWith('- ') || line.startsWith('* ')) {
      const cleanText = line.replace(/^(•|-|\*)\s*/, '');
      elements.push(
        <div key={`bullet-${i}`} className="flex items-start gap-2.5 my-1.5 ml-1">
          <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${theme.solid}`} />
          <span className="text-[13px] leading-relaxed text-slate-700">
            {cleanText}
          </span>
        </div>
      );
      i++;
      continue;
    }

    // Headings (e.g. 1. INFORMACION GENERAL, 📌 FICHA TECNICA, uppercase lines that are short)
    const isNumberedHeading = /^\d+\.\s+[A-Z\s]+/.test(line);
    const isEmojiHeading = line.startsWith('📌') || line.startsWith('🎓') || line.startsWith('📋') || line.startsWith('⚠️') || line.startsWith('⭐');

    if (isNumberedHeading || isEmojiHeading || (line.toUpperCase() === line && line.length < 50 && !line.includes(':'))) {
      elements.push(
        <h3 key={`heading-${i}`} className={`mt-5 mb-2.5 text-xs font-bold tracking-wider uppercase flex items-center gap-2 ${theme.text}`}>
          {line}
        </h3>
      );
      i++;
      continue;
    }

    // Key-value pairs (e.g. "Nombre oficial: ISO/IEC TR...")
    if (line.includes(':') && !line.startsWith('http') && line.indexOf(':') < 25) {
      const colonIdx = line.indexOf(':');
      const key = line.substring(0, colonIdx).trim();
      const val = line.substring(colonIdx + 1).trim();
      elements.push(
        <div key={`kv-${i}`} className="text-[13px] py-0.5">
          <span className="font-semibold text-slate-800">{key}: </span>
          <span className="text-slate-600">{val}</span>
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`para-${i}`} className="text-[13px] leading-relaxed text-slate-600 my-0.5">
        {line}
      </p>
    );
    i++;
  }

  return <div className="space-y-0.5">{elements}</div>;
}

/* ───────────────── RESOURCE VIEWER MODAL ───────────────── */
function ResourceViewer({
  resource,
  phaseCode,
  color,
  onClose,
}: {
  resource: { title: string; content: string };
  phaseCode: string;
  color: keyof typeof THEME;
  onClose: () => void;
}) {
  const printRef = useRef<HTMLDivElement>(null);
  const theme = THEME[color];
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setCompletedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDownloadPdf = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${resource.title} - ${phaseCode}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
            body { font-family: 'Poppins', sans-serif; padding: 40px; color: #1e293b; line-height: 1.7; }
            h1 { font-size: 22px; margin-bottom: 4px; color: #0f172a; font-weight: 700; }
            .code { font-size: 12px; color: #64748b; margin-bottom: 24px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
            .content { font-size: 14px; white-space: pre-line; color: #334155; }
            hr { border: none; border-top: 2px solid #e2e8f0; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h1>${resource.title}</h1>
          <div class="code">${phaseCode}</div>
          <hr />
          <div class="content">${resource.content}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop with blur & fade in */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-backdrop" 
        onClick={onClose}
      />

      {/* Modal with springy entry scale up & glass panel */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-white/95 border border-slate-200/50 shadow-2xl animate-modal overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4.5 ${theme.soft} border-b ${theme.border}`}>
          <div>
            <h2 className={`text-base font-bold ${theme.text}`}>{resource.title}</h2>
            <p className="text-[11px] text-slate-500 mt-0.5">{phaseCode}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95 ${theme.solid}`}
            >
              <Download className="h-3.5 w-3.5" />
              Descargar PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-colors"
            >
              <X className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div ref={printRef} className="flex-1 overflow-y-auto px-6 py-6 custom-scroll bg-white/40">
          <FormattedContent
            content={resource.content}
            color={color}
            completedItems={completedItems}
            toggleItem={toggleItem}
          />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── FOOTER ───────────────────── */
function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900">
                <Award className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800">ISO 29110 Explorer</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Herramienta educativa para comprender la serie ISO/IEC 29110 orientada a Very Small Entities (VSEs).
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Enlaces Oficiales</h4>
            <ul className="space-y-2">
              {[
                { label: 'ISO Store', href: 'https://dntms.isolutions.iso.org/standard/62711.html' },
                { label: 'IEC Webstore', href: 'https://webstore.iec.ch/en/publication/23686' },
                { label: 'ANSI Webstore', href: 'https://webstore.ansi.org' },
                { label: 'Deployment Packages ETSMTL', href: 'http://profs.etsmtl.ca/claporte/English/VSE/index.html' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-indigo-600"
                  >
                    <Globe className="h-3 w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Notas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Notas Importantes</h4>
            <div className="space-y-2 text-[11px] leading-relaxed text-slate-500">
              <p className="flex items-start gap-1.5">
                <AlertTriangle className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-500" />
                Algunos artículos pueden requerir suscripción institucional o pago.
              </p>
              <p className="flex items-start gap-1.5">
                <AlertTriangle className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-500" />
                Las partes -5-1-1 y -5-1-2 fueron actualizadas a estándar internacional completo en 2025.
              </p>
              <p className="flex items-start gap-1.5">
                <AlertTriangle className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-500" />
                Eclipse Wiki está en modo solo lectura.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-[11px] text-slate-400">
          <p>
            Documentación recopilada y verificada a partir de fuentes oficiales ISO, repositorios académicos y sitios especializados.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} ISO 29110 Explorer. Uso educativo.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── APP ───────────────────── */
export default function App() {
  const [activeId, setActiveId] = useState(ROADMAP_PHASES[0].id);
  const activePhase = ROADMAP_PHASES.find((phase) => phase.id === activeId) || ROADMAP_PHASES[0];
  const [selectedResource, setSelectedResource] = useState<{ title: string; content: string } | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (key: string) => {
    setCompletedTasks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-[#eef2f4] to-slate-100 text-slate-900 font-[var(--font-body)]">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 pt-10 md:px-10">
        <header className="relative rounded-3xl border border-white/60 bg-white/70 px-6 py-10 shadow-xl backdrop-blur-md">
          <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-rose-400 via-emerald-400 to-violet-400" />
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400 font-medium">Roadmap interactivo</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-5xl font-[var(--font-display)] tracking-tight">
            Conociendo ISO 29110
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 leading-relaxed">
            Un recorrido visual para comprender las fases, herramientas y acciones de mejora de la norma ISO/IEC 29110 para Very Small Entities.
          </p>
        </header>

        {/* ── ROADMAP SVG ── */}
        <section className="relative mt-10 h-80 overflow-hidden rounded-3xl border border-white/60 bg-white/50 shadow-lg backdrop-blur-sm">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <svg className="h-56 w-full drop-shadow-2xl" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path
                d="M 0 120 C 90 40 170 200 260 120 C 350 40 430 200 520 120 C 610 40 690 200 780 120 C 870 40 950 200 1000 140"
                fill="none"
                stroke="#e8eef5"
                strokeWidth="70"
                strokeLinecap="round"
              />
              <path
                d="M 0 120 C 90 40 170 200 260 120 C 350 40 430 200 520 120 C 610 40 690 200 780 120 C 870 40 950 200 1000 140"
                fill="none"
                stroke="#1b2440"
                strokeWidth="56"
                strokeLinecap="round"
              />
              <path
                d="M 0 120 C 90 40 170 200 260 120 C 350 40 430 200 520 120 C 610 40 690 200 780 120 C 870 40 950 200 1000 140"
                fill="none"
                stroke="#f8fafc"
                strokeWidth="44"
                strokeLinecap="round"
              />
              <path
                d="M 0 120 C 90 40 170 200 260 120 C 350 40 430 200 520 120 C 610 40 690 200 780 120 C 870 40 950 200 1000 140"
                fill="none"
                stroke="#2a3657"
                strokeWidth="30"
                strokeLinecap="round"
              />
              <path
                d="M 0 120 C 90 40 170 200 260 120 C 350 40 430 200 520 120 C 610 40 690 200 780 120 C 870 40 950 200 1000 140"
                fill="none"
                stroke="#d6dfef"
                strokeDasharray="10 16"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {ROADMAP_PHASES.map((phase) => {
            const theme = THEME[phase.color];
            const Icon = phase.icon;
            const isActive = phase.id === activeId;

            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActiveId(phase.id)}
                style={{ left: `${phase.position.x}%`, top: `${phase.position.y}%` }}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-transform duration-500"
                aria-pressed={isActive}
              >
                <div
                  className={`relative h-24 w-20 drop-shadow-2xl transition-transform duration-300 ${isActive ? 'scale-110 animate-float' : 'scale-100'}`}
                >
                  <div
                    className="absolute left-1/2 top-3 h-12 w-12 -translate-x-1/2 rounded-full blur-xl opacity-60"
                    style={{
                      background: `linear-gradient(135deg, ${theme.pinFrom}, ${theme.pinTo})`,
                    }}
                  />
                  <svg className="absolute inset-0" viewBox="0 0 60 82" aria-hidden="true">
                    <defs>
                      <linearGradient id={`pin-${phase.id}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={theme.pinFrom} />
                        <stop offset="100%" stopColor={theme.pinTo} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M30 2C17.3 2 7 12 7 24.3c0 17.2 19.5 41.8 21.3 44.1.9 1.2 2.6 1.2 3.6 0 1.8-2.3 21.3-26.9 21.3-44.1C53 12 42.7 2 30 2z"
                      fill={`url(#pin-${phase.id})`}
                      stroke="#ffffff"
                      strokeWidth="4"
                    />
                    <circle cx="30" cy="24" r="15" fill="#ffffff" />
                    <circle cx="30" cy="24" r="12" fill="none" stroke={theme.pinTo} strokeWidth="2.2" opacity="0.7" />
                    <circle cx="24" cy="14" r="5.5" fill="rgba(255,255,255,0.25)" />
                  </svg>
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                    <Icon className="h-5 w-5" style={{ color: theme.pinTo }} />
                  </div>
                </div>
                <div className="mt-3 w-44 rounded-md border border-slate-200 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow leading-snug text-center">
                  <div>{phase.title}</div>
                  <div className="text-xs font-medium text-slate-500">{phase.code}</div>
                </div>
              </button>
            );
          })}
        </section>

        {/* ── INFO CARDS ── */}
        <section className="mt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Card 1: Explicacion */}
            <article className="rounded-2xl border border-slate-100 bg-white/90 px-6 pb-6 pt-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
              <div 
                className="absolute top-0 inset-x-0 h-1" 
                style={{
                  background: `linear-gradient(90deg, ${THEME[activePhase.color].pinFrom}, ${THEME[activePhase.color].pinTo})`
                }}
              />
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  {activePhase.order}
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>{activePhase.title}</p>
              <p className="mt-1 text-center text-xs text-slate-400">{activePhase.code}</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <FileText className="h-4 w-4" /> Explicacion
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{activePhase.comms.summary}</p>
              </div>
            </article>

            {/* Card 2: Tareas */}
            <article className="rounded-2xl border border-slate-100 bg-white/90 px-6 pb-6 pt-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
              <div 
                className="absolute top-0 inset-x-0 h-1" 
                style={{
                  background: `linear-gradient(90deg, ${THEME[activePhase.color].pinFrom}, ${THEME[activePhase.color].pinTo})`
                }}
              />
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  {activePhase.order}
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>Tareas clave</p>
              <p className="mt-1 text-center text-xs text-slate-400">Checklist por fase</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <div className="space-y-2.5">
                  {activePhase.comms.tasks.map((task, idx) => {
                    const taskKey = `${activePhase.id}-${idx}-${task}`;
                    const isChecked = !!completedTasks[taskKey];
                    return (
                      <label key={task} className="flex items-start gap-2.5 cursor-pointer select-none group">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTask(taskKey)}
                          className={`mt-0.5 h-4 w-4 rounded border-slate-300 ${THEME[activePhase.color].text} text-indigo-600 focus:ring-0 focus:ring-offset-0 cursor-pointer transition-all`}
                        />
                        <span className={`text-[13px] leading-relaxed transition-all duration-200 ${isChecked ? 'text-slate-400 line-through decoration-slate-300' : 'text-slate-600 font-medium group-hover:text-slate-900'}`}>
                          {task}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Card 3: Guia de estudio */}
            <article className="rounded-2xl border border-slate-100 bg-white/90 px-6 pb-6 pt-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
              <div 
                className="absolute top-0 inset-x-0 h-1" 
                style={{
                  background: `linear-gradient(90deg, ${THEME[activePhase.color].pinFrom}, ${THEME[activePhase.color].pinTo})`
                }}
              />
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>Guia de estudio</p>
              <p className="mt-1 text-center text-xs text-slate-400">Haz click en cada tema para leer</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1 custom-scroll">
                  {activePhase.comms.guide.map((section, i) => (
                    <GuideSection key={section.title} section={section} color={activePhase.color} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            </article>

            {/* Card 4: Recursos */}
            <article className="rounded-2xl border border-slate-100 bg-white/90 px-6 pb-6 pt-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">
              <div 
                className="absolute top-0 inset-x-0 h-1" 
                style={{
                  background: `linear-gradient(90deg, ${THEME[activePhase.color].pinFrom}, ${THEME[activePhase.color].pinTo})`
                }}
              />
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  <FolderOpen className="h-5 w-5" />
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>Recursos</p>
              <p className="mt-1 text-center text-xs text-slate-400">Plantillas, checklists y material descargable</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <div className="space-y-2.5">
                  {activePhase.comms.resources.map((resource) => (
                    <button
                      key={resource.title}
                      type="button"
                      onClick={() => setSelectedResource(resource)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 hover:scale-[1.01] hover:shadow-md ${THEME[activePhase.color].soft} ${THEME[activePhase.color].border}`}
                    >
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${THEME[activePhase.color].solid}`}>
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-xs font-bold leading-snug ${THEME[activePhase.color].text}`}>{resource.title}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5 truncate">Click para ver · Descargable como PDF</p>
                      </div>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 -rotate-90 ${THEME[activePhase.color].text} opacity-50`} />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* ── RESOURCE MODAL ── */}
      {selectedResource && (
        <ResourceViewer
          resource={selectedResource}
          phaseCode={activePhase.code}
          color={activePhase.color}
          onClose={() => setSelectedResource(null)}
        />
      )}

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}