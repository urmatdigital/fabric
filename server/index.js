import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Данные о движении средств
app.get('/api/cash-flow', (req, res) => {
  res.json({
    income: 125000,
    expenses: 85000,
    transactions: [
      { id: 1, type: 'income', amount: 45000, description: 'Заказ #123' },
      { id: 2, type: 'expense', amount: -25000, description: 'Материалы' }
    ]
  });
});

// Отчёты о прибылях и убытках
app.get('/api/pl-reports', (req, res) => {
  res.json({
    totalProfit: 40000,
    salesRevenue: 150000,
    operatingExpenses: 110000,
    details: [
      { month: 'Август', profit: 40000, revenue: 150000, expenses: 110000 }
    ]
  });
});

// Учёт времени
app.get('/api/time-tracking', (req, res) => {
  res.json({
    entries: [
      {
        id: 1,
        employee: 'Анна Иванова',
        operation: 'Раскрой',
        duration: '2:30',
        status: 'completed'
      }
    ]
  });
});

// Расходы и цены
app.get('/api/costs', (req, res) => {
  res.json({
    materials: 1200,
    labor: 800,
    overhead: 400,
    finalPrice: 3000
  });
});

// ROI и амортизация
app.get('/api/roi', (req, res) => {
  res.json({
    equipment: [
      { name: 'Швейные машины', roi: 32 },
      { name: 'Раскройное оборудование', roi: 28 }
    ],
    depreciation: {
      annualRate: 10,
      residualValue: 450000
    }
  });
});

// Канбан-доска
app.get('/api/kanban', (req, res) => {
  res.json({
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
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
