import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Github, 
  Target, 
  ShieldCheck,
  BrainCircuit,
  Workflow
} from 'lucide-react';

export default function KnowledgeCenter() {
  const sections = [
    {
      title: "Funcionamiento de la IA",
      icon: <BrainCircuit className="text-blue-500" size={28} />,
      content: "Los modelos modernos se basan en la arquitectura Transformer. Funcionan prediciendo el siguiente 'token' basado en billones de parámetros entrenados con datos masivos. No 'entienden' como un humano, sino que calculan probabilidades estadísticas complejas.",
      color: "blue"
    },
    {
      title: "Agentes Autónomos",
      icon: <Workflow className="text-purple-500" size={28} />,
      content: "Un agente no solo responde, sino que ejecuta bucles de razonamiento (Ciclo T-A-O: Pensamiento, Acción, Observación). Pueden usar herramientas externas, buscar en internet y completar tareas complejas sin intervención constante.",
      color: "purple"
    },
    {
      title: "Estrategias de Éxito",
      icon: <Target className="text-emerald-500" size={28} />,
      content: "Utiliza RAG (Generación Aumentada por Recuperación) para dar contexto real. Implementa 'Chain of Thought' pidiendo a la IA que piense paso a paso. Sé específico y pon límites claros en tus instrucciones (Prompts).",
      color: "emerald"
    },
    {
      title: "Impacto Laboral",
      icon: <TrendingUp className="text-orange-500" size={28} />,
      content: "La demanda de expertos en IA ha crecido un 400% en los últimos 2 años. Las empresas buscan perfiles capaces de integrar IAs en flujos empresariales, no solo usuarios básicos de chat. La 'IA-fluency' es ahora un requisito estándar.",
      color: "orange"
    },
    {
      title: "GitHub & Código",
      icon: <Github className="text-slate-700 dark:text-slate-300" size={28} />,
      content: "Más del 46% del código nuevo en GitHub es generado o asistido por IA. El uso de Copilot aumenta la velocidad de desarrollo en un 55%, manteniendo una tasa de aceptación de código de más del 30% en repositorios empresariales.",
      color: "slate"
    },
    {
      title: "Criterio y Ética",
      icon: <ShieldCheck className="text-red-500" size={28} />,
      content: "La IA alucina. Es vital que cada línea de código o dato generado sea verificado por un humano. La IA es un copiloto, NO un piloto. El valor real está en la supervisión crítica de los resultados.",
      color: "red"
    }
  ];

  return (
    <div className="animate-fade-in space-y-12">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 text-sm font-bold tracking-wide uppercase mb-2">
          <BookOpen size={16} /> Centro de Conocimiento
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Potencia tu Criterio en la Era de la IA</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          Entender cómo funcionan los sistemas inteligentes es el primer paso para dominarlos. Aquí tienes la información clave para destacar en el mercado actual.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div 
            key={idx} 
            className="premium-card p-8 group transition-all duration-500 hover:bg-white dark:hover:bg-gray-900"
          >
            <div className={`mb-6 p-4 rounded-2xl bg-${section.color}-50 dark:bg-${section.color}-900/20 inline-block group-hover:scale-110 transition-transform`}>
              {section.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {section.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-10 mt-16 bg-gradient-to-br from-primary-600/10 to-transparent">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold">Resumen de Estadísticas Impactantes</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-4xl font-black text-primary-600">92%</span>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Empresas adoptando IA</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-black text-blue-500">46%</span>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Código asistido en GitHub</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-black text-orange-500">55%</span>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Aumento productividad Dev</p>
              </div>
              <div className="space-y-1">
                <span className="text-4xl font-black text-emerald-500">2.5k</span>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Nuevos empleos diarios</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 blur-3xl opacity-20 animate-pulse"></div>
              <Lightbulb size={240} className="text-primary-600 relative z-10" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
