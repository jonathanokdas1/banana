// components/produtos/area-de-membros/Page.tsx
'use client'; // Marcar como um componente do cliente

import { useState } from 'react';
import Header from '@/components/produtos/area-de-membros/Header';
import AddModule from '@/components/produtos/area-de-membros/AddModule';
import ModuleList from '@/components/produtos/area-de-membros/ModuleList';

export default function Page() {
  const [modules, setModules] = useState([]);

  const handleAddModule = (newModule) => {
    setModules([...modules, newModule]);
  };

  const handleDeleteModule = (index) => {
    setModules(modules.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Header de Navegação */}
      <Header />

      <div className="container mx-auto p-4">
        {/* Adicionar Módulo */}
        <AddModule onAdd={handleAddModule} />

        {/* Listar Módulos */}
        <ModuleList modules={modules} onDelete={handleDeleteModule} />
      </div>
    </div>
  );
}
