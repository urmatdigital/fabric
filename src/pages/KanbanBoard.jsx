import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function KanbanBoard() {
  const { data, isLoading } = useQuery(['kanban'], async () => {
    const { data } = await axios.get('http://localhost:3000/api/kanban');
    return data;
  });

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Канбан-доска</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(data).map(([columnId, column]) => (
          <div key={columnId} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-4">{column.title}</h3>
            <div className="space-y-3">
              {column.items.map(item => (
                <div key={item.id} className="bg-white p-3 rounded shadow">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.assignee}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
