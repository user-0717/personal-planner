import { useState } from 'react';
import { Plus } from 'lucide-react';
import { usePlanStore } from '@/store/usePlanStore';
import PlanCard from '@/components/PlanCard';
import PlanForm from '@/components/PlanForm';
import Empty from '@/components/Empty';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const { getInProgressPlans, togglePlanStatus, deletePlan } = usePlanStore();
  const plans = getInProgressPlans();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">我的计划</h1>
          <p className="text-gray-500 mt-1">管理你正在进行的任务</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>新建计划</span>
        </button>
      </div>

      {plans.length === 0 ? (
        <Empty
          title="还没有计划"
          description="点击上方按钮创建你的第一个计划吧！"
        />
      ) : (
        <div className="space-y-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onToggleStatus={togglePlanStatus}
              onDelete={deletePlan}
            />
          ))}
        </div>
      )}

      {showForm && (
        <PlanForm onClose={() => setShowForm(false)} onSuccess={() => setShowForm(false)} />
      )}
    </div>
  );
}
