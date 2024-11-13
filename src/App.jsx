import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import CashFlow from './pages/CashFlow';
import PLReports from './pages/PLReports';
import TimeTracking from './pages/TimeTracking';
import CostPricing from './pages/CostPricing';
import ROI from './pages/ROI';
import KanbanBoard from './pages/KanbanBoard';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/cash-flow" replace />} />
            <Route path="/cash-flow" element={<CashFlow />} />
            <Route path="/pl-reports" element={<PLReports />} />
            <Route path="/time-tracking" element={<TimeTracking />} />
            <Route path="/cost-pricing" element={<CostPricing />} />
            <Route path="/roi" element={<ROI />} />
            <Route path="/kanban" element={<KanbanBoard />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}
