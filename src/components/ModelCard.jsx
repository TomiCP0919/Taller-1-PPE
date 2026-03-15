import React from 'react';
import { Trash2, Edit3, Zap, Brain, ExternalLink } from 'lucide-react';

export default function ModelCard({ model, onEdit, onDelete }) {
  return (
    <div className="premium-card overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={model.imagen || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'} 
          alt={model.Nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2 w-full">
            <button 
              onClick={() => onEdit(model)}
              className="flex-1 btn-primary py-1.5 text-sm flex items-center justify-center gap-1 backdrop-blur-md bg-primary-600/80"
            >
              <Edit3 size={14} /> Editar
            </button>
            <button 
              onClick={() => onDelete(model.id)}
              className="btn-danger py-1.5 px-3 backdrop-blur-md bg-red-500/80"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {model.Nombre}
          </h3>
          <span className="text-xs font-mono text-gray-400">ID: {model.id}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
              <Zap size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Velocidad</span>
            </div>
            <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
              {model.Velocidad_Respuesta}s
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
              <Brain size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Razonamiento</span>
            </div>
            <div className="text-lg font-bold text-purple-900 dark:text-purple-100">
              {model.Puntaje_Razonamiento}%
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
            style={{ width: `${model.Puntaje_Razonamiento}%` }}
          />
        </div>
      </div>
    </div>
  );
}
