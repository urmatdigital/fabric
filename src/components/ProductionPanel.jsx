import { useState } from 'react';

export default function ProductionPanel() {
  const [orders] = useState([
    { id: 1, product: 'Платье', quantity: 100, status: 'В производстве' },
    { id: 2, product: 'Брюки', quantity: 50, status: 'Ожидает' },
  ]);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Текущие заказы</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Продукт
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Количество
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
