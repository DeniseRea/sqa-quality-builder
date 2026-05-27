import React, { useState } from 'react';
import {
  Book,
  FileCheck,
  Map,
  Rocket,
  Settings,
  ShieldCheck,
  CheckSquare,
  ExternalLink,
  Download,
  FileText,
  Play,
} from 'lucide-react';

const ROADMAP_PHASES = [
  {
    id: '-1',
    order: '1',
    code: 'ISO/IEC 29110-1',
    title: 'Conceptos y vocabulario',
    cardTitle: 'Alinea el lenguaje',
    cardText: 'Definir terminos base para decisiones y comunicacion interna.',
    color: 'rose',
    icon: Book,
    position: { x: 8, y: 45 },
    comms: {
      summary: 'Establecer un vocabulario comun para reducir ambiguedad y acelerar decisiones.',
      tasks: ['Definir VSE y roles clave', 'Unificar terminos PM/SI', 'Crear glosario vivo'],
      resources: [
        { label: 'ISO 29110-1 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/85337.html' },
        { label: 'Articulo: Que es ISO 29110 (Encyclopedia)', type: 'link', url: 'https://encyclopedia.pub/entry/27533' },
        { label: 'Wikipedia — ISO/IEC 29110', type: 'link', url: 'https://en.wikipedia.org/wiki/ISO/IEC_29110' },
        { label: 'Estandares gratuitos ISO/ITTF', type: 'download', url: 'https://standards.iso.org/ittf/PubliclyAvailableStandards/' },
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
    color: 'amber',
    icon: Map,
    position: { x: 24, y: 30 },
    comms: {
      summary: 'Determinar el perfil que mejor se ajusta a tu realidad operativa.',
      tasks: ['Evaluar tamaño del equipo', 'Definir alcance del proyecto', 'Elegir perfil inicial o basico'],
      resources: [
        { label: 'ISO 29110-2 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/84518.html' },
        { label: 'Vista previa ISO 29110-2 (ITEH)', type: 'link', url: 'https://standards.iteh.ai/catalog/standards/iso/3b256345-ab47-44f5-857e-d8601900dfc5/iso-iec-29110-2-1-2023' },
        { label: 'Perfiles VSE — Sitio upto25.net', type: 'link', url: 'https://www.upto25.net/' },
        { label: 'Deployment Packages — Recursos ETS', type: 'link', url: 'https://profs.etsmtl.ca/claporte/English/VSE/index.html' },
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
    color: 'emerald',
    icon: ShieldCheck,
    position: { x: 41, y: 56 },
    comms: {
      summary: 'Validar el nivel de cumplimiento antes de una evaluacion formal.',
      tasks: ['Aplicar checklist de cumplimiento', 'Identificar brechas criticas', 'Priorizar acciones correctivas'],
      resources: [
        { label: 'ISO 29110-3 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/76503.html' },
        { label: 'Guia de evaluacion (ITEH preview)', type: 'link', url: 'https://standards.iteh.ai/catalog/standards/iso/3ae8eaff-be96-44c6-ae02-0e22ae498b1a/iso-iec-tr-29110-3-1-2020' },
        { label: 'Investigacion: Assessment en VSEs (Lero)', type: 'link', url: 'https://lero.ie/' },
        { label: 'Estandares gratuitos ISO/ITTF', type: 'download', url: 'https://standards.iso.org/ittf/PubliclyAvailableStandards/' },
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
    color: 'sky',
    icon: FileCheck,
    position: { x: 58, y: 35 },
    comms: {
      summary: 'Definir lo que debe existir para cumplir el perfil basico.',
      tasks: ['Verificar requisitos PM', 'Verificar requisitos SI', 'Asegurar trazabilidad'],
      resources: [
        { label: 'ISO 29110-4-1 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/74033.html' },
        { label: 'Vista previa 29110-4-1 (ITEH)', type: 'link', url: 'https://standards.iteh.ai/catalog/standards/iso/e5ee1858-b4e5-4e78-a555-1a42787e7021/iso-iec-29110-4-1-2018' },
        { label: 'Grupo de trabajo INCOSE VSE', type: 'link', url: 'https://connect.incose.org/' },
        { label: 'Deployment Packages — Recursos ETS', type: 'link', url: 'https://profs.etsmtl.ca/claporte/English/VSE/index.html' },
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
    color: 'blue',
    icon: Rocket,
    position: { x: 76, y: 52 },
    comms: {
      summary: 'Activar el perfil inicial con guias y plantillas simples.',
      tasks: ['Definir SOW', 'Implementar versionado simple', 'Organizar backlog minimo'],
      resources: [
        { label: 'ISO 29110-5-1-1 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/83679.html' },
        { label: 'Estandares gratuitos ISO/ITTF (TR disponibles)', type: 'download', url: 'https://standards.iso.org/ittf/PubliclyAvailableStandards/' },
        { label: 'Implementacion EPF — Formalmind', type: 'link', url: 'https://formalmind.com/en/blog/iso29110/' },
        { label: 'Buscar videos: ISO 29110 Entry Profile', type: 'video', url: 'https://www.youtube.com/results?search_query=ISO+29110+entry+profile+VSE' },
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
    color: 'violet',
    icon: Settings,
    position: { x: 92, y: 38 },
    comms: {
      summary: 'Estabilizar el proceso con practicas y documentos formales.',
      tasks: ['Plan de proyecto completo', 'Documento de requisitos', 'Plan de pruebas'],
      resources: [
        { label: 'ISO 29110-5-1-2 — Catalogo oficial ISO', type: 'link', url: 'https://www.iso.org/standard/83680.html' },
        { label: 'Estandares gratuitos ISO/ITTF (TR disponibles)', type: 'download', url: 'https://standards.iso.org/ittf/PubliclyAvailableStandards/' },
        { label: 'Deployment Packages — Plantillas y checklists', type: 'download', url: 'https://profs.etsmtl.ca/claporte/English/VSE/index.html' },
        { label: 'Buscar videos: ISO 29110 Basic Profile', type: 'video', url: 'https://www.youtube.com/results?search_query=ISO+29110+basic+profile+implementation' },
        { label: 'Guia EPF Composer (Formalmind)', type: 'link', url: 'https://formalmind.com/en/blog/iso29110/' },
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
  },
  amber: {
    solid: 'bg-gradient-to-br from-amber-500 to-orange-500',
    soft: 'bg-amber-50',
    text: 'text-amber-700',
    ring: 'ring-amber-200',
    border: 'border-amber-200',
    pinFrom: '#f59e0b',
    pinTo: '#f97316',
  },
  emerald: {
    solid: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    soft: 'bg-emerald-50',
    text: 'text-emerald-700',
    ring: 'ring-emerald-200',
    border: 'border-emerald-200',
    pinFrom: '#10b981',
    pinTo: '#14b8a6',
  },
  sky: {
    solid: 'bg-gradient-to-br from-sky-500 to-cyan-500',
    soft: 'bg-sky-50',
    text: 'text-sky-700',
    ring: 'ring-sky-200',
    border: 'border-sky-200',
    pinFrom: '#0ea5e9',
    pinTo: '#06b6d4',
  },
  blue: {
    solid: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    soft: 'bg-blue-50',
    text: 'text-blue-700',
    ring: 'ring-blue-200',
    border: 'border-blue-200',
    pinFrom: '#3b82f6',
    pinTo: '#6366f1',
  },
  violet: {
    solid: 'bg-gradient-to-br from-violet-500 to-purple-500',
    soft: 'bg-violet-50',
    text: 'text-violet-700',
    ring: 'ring-violet-200',
    border: 'border-violet-200',
    pinFrom: '#8b5cf6',
    pinTo: '#a855f7',
  },
};

export default function App() {
  const [activeId, setActiveId] = useState(ROADMAP_PHASES[1].id);
  const activePhase = ROADMAP_PHASES.find((phase) => phase.id === activeId) || ROADMAP_PHASES[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#dce6ea] via-[#dfe8ec] to-[#eef2f4] text-slate-900 font-[var(--font-body)]">
      <div className="mx-auto w-full px-6 pb-14 pt-10 md:px-10">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Roadmap infographic</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl font-[var(--font-display)]">
            CONOCIENDO ISO 29110
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Un recorrido visual para comprender las fases, herramientas y acciones de mejora de la norma.
          </p>
        </header>

        <section className="relative mt-10 h-80">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/80 via-white/50 to-white/0" />
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

        <section className="mt-8">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-7 shadow-lg">
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
                <p className="mt-2 text-sm text-slate-600">{activePhase.comms.summary}</p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-7 shadow-lg">
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  {activePhase.order}
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>Tareas clave</p>
              <p className="mt-1 text-center text-xs text-slate-400">Checklist por fase</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <ul className="space-y-2 text-sm text-slate-600">
                  {activePhase.comms.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-7 shadow-lg">
              <div className="-mt-14 flex justify-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white shadow ${THEME[activePhase.color].solid}`}>
                  {activePhase.order}
                </div>
              </div>
              <p className={`mt-2 text-center text-base font-semibold ${THEME[activePhase.color].text}`}>Recursos</p>
              <p className="mt-1 text-center text-xs text-slate-400">Material clave</p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-left">
                <div className="space-y-2">
                  {activePhase.comms.resources.map((resource) => (
                    <a
                      key={resource.label}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${THEME[activePhase.color].soft} ${THEME[activePhase.color].text} ${THEME[activePhase.color].border}`}
                    >
                      <span className="mr-2 leading-snug">{resource.label}</span>
                      {resource.type === 'download' ? <Download className="h-3.5 w-3.5 flex-shrink-0" /> : resource.type === 'video' ? <Play className="h-3.5 w-3.5 flex-shrink-0" /> : <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}