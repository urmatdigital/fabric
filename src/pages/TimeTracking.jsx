import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function TimeTracking() {
  const { data, isLoading } = useQuery(['timeTracking'], async () => {
    const { data } = await axios.get('http://localhost:3000/api/time-tracking');
    return data;
  });

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Учёт рабочего времени</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                Сотрудник
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                Операция
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                Время
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                Статус
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{entry.employee}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{entry.operation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{entry.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {entry.status === 'completed' ? 'Завершено' : 'В процессе'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
