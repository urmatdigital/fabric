import { useState } from 'react';

export default function KanbanBoard() {
  const [columns] = useState({
    todo: {
      title: 'К выполнению',
      items: [
        { id: 1, title: 'Раскрой партии №127', assignee: 'Мария' },
        { id: 2, title: 'Пошив образца', assignee: 'Анна' }
      ]
    },
    inProgress: {
      title: 'В работе',
      items: [
        { id: 3, title: 'Контроль качества партии №126', assignee: 'Елена' }
      ]
    },
    done: {
      title: 'Завершено',
      items: [
        { id: 4, title: 'Упаковка заказа №125', assignee: 'Ирина' }
      ]
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(columns).map(([columnId, column]) => (
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
  );
}
