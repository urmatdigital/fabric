import { useState } from 'react';

export default function UserProfile() {
  const [user] = useState({
    name: 'Иван Петров',
    email: 'ivan@example.com',
    role: 'Менеджер'
  });

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Профиль пользователя</h3>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Имя</dt>
              <dd className="mt-1 text-sm">{user.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm">{user.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Должность</dt>
              <dd className="mt-1 text-sm">{user.role}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
