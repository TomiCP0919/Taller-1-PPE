import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { useAuth } from './context/AuthContext';
import Auth from './components/Auth';
import ModelCard from './components/ModelCard';
import ModelForm from './components/ModelForm';
import KnowledgeCenter from './components/KnowledgeCenter';
import { Search, Plus, LogOut, Loader2, Cpu, Grid, List as ListIcon, BookOpen, Layers } from 'lucide-react';

function App() {
  const { user, logout } = useAuth();
  const [currentTab, setCurrentTab] = useState('directory'); // 'directory' or 'knowledge'
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingModel, setEditingModel] = useState(null);

  useEffect(() => {
    if (user) {
      fetchModels();
    }
  }, [user]);

  useEffect(() => {
    const results = models.filter(m => 
      m.Nombre.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredModels(results);
  }, [search, models]);

  const fetchModels = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('Modelos_IA')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) console.error(error);
    else {
      setModels(data || []);
      setFilteredModels(data || []);
    }
    setLoading(false);
  };

  const handleCreateOrUpdate = async (formData) => {
    if (editingModel) {
      const { error } = await supabase
        .from('Modelos_IA')
        .update(formData)
        .eq('id', editingModel.id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('Modelos_IA')
        .insert([formData]);
      if (error) throw error;
    }
    fetchModels();
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este modelo?')) {
      const { error } = await supabase
        .from('Modelos_IA')
        .delete()
        .eq('id', id);
      if (error) console.error(error);
      else fetchModels();
    }
  };

  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <nav className="sticky top-0 z-40 glass border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-600 rounded-xl text-white shadow-lg shadow-primary-500/30">
                <Cpu size={24} />
              </div>
              <div className="hidden lg:block">
                <h1 className="text-xl font-bold tracking-tight">AI Matrix</h1>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Enterprise Architecture</p>
              </div>
            </div>

            <div className="flex bg-gray-100 dark:bg-gray-800/50 p-1 rounded-2xl border border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => setCurrentTab('directory')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium ${currentTab === 'directory' ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <Layers size={18} /> Directorio
              </button>
              <button 
                onClick={() => setCurrentTab('knowledge')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium ${currentTab === 'knowledge' ? 'bg-white dark:bg-gray-700 text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                <BookOpen size={18} /> Conocimiento
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {currentTab === 'directory' && (
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar modelos..."
                  className="input-field pl-10 h-11"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            )}
            {currentTab === 'directory' && (
              <button 
                onClick={() => { setEditingModel(null); setIsFormOpen(true); }}
                className="btn-primary h-11 px-4 flex items-center gap-2"
              >
                <Plus size={20} /> <span className="hidden md:inline">Nuevo</span>
              </button>
            )}
            <button 
              onClick={logout}
              className="btn-secondary h-11 px-4 flex items-center gap-2 group border-none"
              title="Cerrar Sesión"
            >
              <LogOut size={20} className="text-gray-400 group-hover:text-red-500 transition-colors" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentTab === 'directory' ? (
          <>
            <header className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Directorio de Sistemas</h2>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 dark:text-gray-400">Gestión centralizada de agentes y modelos de lenguaje</p>
                  <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full text-xs font-bold border border-primary-200 dark:border-primary-800">
                    {filteredModels.length} {filteredModels.length === 1 ? 'modelo' : 'modelos'}
                  </span>
                </div>
              </div>
              <div className="hidden md:flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-primary-600"><Grid size={20} /></div>
              </div>
            </header>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-40 gap-4">
                <Loader2 className="animate-spin text-primary-600" size={48} />
                <p className="text-gray-500 font-medium animate-pulse">Sincronizando con Supabase...</p>
              </div>
            ) : (
              <>
                {filteredModels.length === 0 ? (
                  <div className="text-center py-40 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                    <p className="text-gray-500 text-lg">No se encontraron modelos que coincidan con tu búsqueda.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredModels.map(model => (
                      <ModelCard 
                        key={model.id} 
                        model={model} 
                        onEdit={(m) => { setEditingModel(m); setIsFormOpen(true); }}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <KnowledgeCenter />
        )}
      </main>

      <ModelForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        model={editingModel}
        onSave={handleCreateOrUpdate}
      />

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">© 2026 AI Matrix Directory. Desarrollado para Plataformas de Programación Empresarial.</p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Documentación</a>
          <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Seguridad</a>
          <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Soporte</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
