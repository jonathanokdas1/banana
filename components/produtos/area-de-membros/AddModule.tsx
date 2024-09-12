// components/produtos/area-de-membros/AddModule.tsx
import { useState } from 'react';

export default function AddModule({ onAdd }) {
  const [moduleName, setModuleName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Todas as turmas');

  const handleAddModule = () => {
    if (moduleName) {
      onAdd({ moduleName, selectedClass });
      setModuleName('');
      setSelectedClass('Todas as turmas');
    }
  };

  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-lg mb-2">Adicionar Módulo</h2>
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Nome do Módulo"
        className="border p-2 mb-2 w-full"
      />
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option>Todas as turmas</option>
        <option>Turma A</option>
      </select>
      <button
        onClick={handleAddModule}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Adicionar Módulo
      </button>
    </div>
  );
}
