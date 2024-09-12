// components/produtos/area-de-membros/ModuleList.tsx
export default function ModuleList({ modules, onDelete }) {
  return (
    <div>
      {modules.length > 0 ? (
        modules.map((modulo, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{modulo.moduleName}</h3>
            <p>Turma: {modulo.selectedClass}</p>
            <div className="flex space-x-4 mt-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Adicionar Conteúdo
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Adicionar Quiz
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Excluir Módulo
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum módulo adicionado ainda.</p>
      )}
    </div>
  );
}
