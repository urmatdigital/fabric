import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function PLReports() {
  const { data, isLoading } = useQuery(['plReports'], async () => {
    const { data } = await axios.get('http://localhost:3000/api/pl-reports');
    return data;
  });

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Отчёт о прибылях и убытках</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-700">Общая прибыль</h2>
          <p className="text-2xl font-bold text-blue-600">₽{data.totalProfit.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-green-700">Доход от продаж</h2>
          <p className="text-2xl font-bold text-green-600">₽{data.salesRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-red-700">Расходы</h2>
          <p className="text-2xl font-bold text-red-600">₽{data.operatingExpenses.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
