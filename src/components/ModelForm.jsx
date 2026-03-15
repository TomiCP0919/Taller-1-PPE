import React, { useState, useEffect } from 'react';
import { X, Save, Loader2, Sparkles } from 'lucide-react';

export default function ModelForm({ model, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    Nombre: '',
    Velocidad_Respuesta: '',
    Puntaje_Razonamiento: '',
    imagen: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (model) {
      setFormData({
        Nombre: model.Nombre || '',
        Velocidad_Respuesta: model.Velocidad_Respuesta || '',
        Puntaje_Razonamiento: model.Puntaje_Razonamiento || '',
        imagen: model.imagen || ''
      });
    } else {
      setFormData({
        Nombre: '',
        Velocidad_Respuesta: '',
        Puntaje_Razonamiento: '',
        imagen: ''
      });
    }
  }, [model, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
      <div className="premium-card w-full max-w-lg p-8 animate-slide-up relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {model ? 'Editar Modelo IA' : 'Nuevo Modelo IA'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Nombre del Modelo</label>
              <input
                className="input-field"
                required
                value={formData.Nombre}
                onChange={(e) => setFormData({...formData, Nombre: e.target.value})}
                placeholder="Ej: GPT-5"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Imagen (URL)</label>
              <input
                className="input-field"
                value={formData.imagen}
                onChange={(e) => setFormData({...formData, imagen: e.target.value})}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Velocidad (segundos)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                className="input-field"
                required
                value={formData.Velocidad_Respuesta}
                onChange={(e) => setFormData({...formData, Velocidad_Respuesta: e.target.value})}
                placeholder="0.8"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Razonamiento (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                className="input-field"
                required
                value={formData.Puntaje_Razonamiento}
                onChange={(e) => setFormData({...formData, Puntaje_Razonamiento: e.target.value})}
                placeholder="95"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : (
                <>
                  <Save size={18} /> {model ? 'Guardar Cambios' : 'Crear Modelo'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
