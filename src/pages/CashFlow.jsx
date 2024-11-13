import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function CashFlow() {
  const { data, isLoading } = useQuery(['cashFlow'], async () => {
    const { data } = await axios.get('http://localhost:3000/api/cash-flow');
    return data;
  });

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Движение денежных средств</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-green-700">Поступления</h2>
          <p className="text-2xl font-bold text-green-600">₽{data.income.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-red-700">Расходы</h2>
          <p className="text-2xl font-bold text-red-600">₽{data.expenses.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Последние операции</h3>
        <div className="space-y-2">
          {data.transactions.map(transaction => (
            <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
              <span>{transaction.description}</span>
              <span className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                ₽{Math.abs(transaction.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
