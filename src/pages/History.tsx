import { usePlanStore } from '@/store/usePlanStore';
import PlanCard from '@/components/PlanCard';
import Empty from '@/components/Empty';
import { Plan } from '@/types/plan';

interface GroupedPlans {
  [year: string]: {
    [month: string]: Plan[];
  };
}

export default function History() {
  const { getCompletedPlans, togglePlanStatus, deletePlan } = usePlanStore();
  const completedPlans = getCompletedPlans();

  const groupPlansByDate = (plans: Plan[]): GroupedPlans => {
    const grouped: GroupedPlans = {};

    plans.forEach((plan) => {
      if (!plan.completedAt) return;

      const date = new Date(plan.completedAt);
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');

      if (!grouped[year]) {
        grouped[year] = {};
      }
      if (!grouped[year][month]) {
        grouped[year][month] = [];
      }
      grouped[year][month].push(plan);
    });

    return grouped;
  };

  const groupedPlans = groupPlansByDate(completedPlans);

  const formatMonth = (month: string) => {
    return `${parseInt(month)}月`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">历史记录</h1>
        <p className="text-gray-500 mt-1">回顾你已完成的计划</p>
      </div>

      {completedPlans.length === 0 ? (
        <Empty
          title="还没有完成的计划"
          description="完成计划后，它们会出现在这里"
        />
      ) : (
        <div className="space-y-8">
          {Object.keys(groupedPlans)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((year) => (
              <div key={year} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 sticky top-20 bg-gray-50 py-2 -mx-4 px-4">
                  {year}年
                </h2>
                {Object.keys(groupedPlans[year])
                  .sort((a, b) => parseInt(b) - parseInt(a))
                  .map((month) => (
                    <div key={`${year}-${month}`} className="space-y-3">
                      <h3 className="text-lg font-medium text-gray-600">
                        {formatMonth(month)}
                      </h3>
                      <div className="space-y-3">
                        {groupedPlans[year][month].map((plan) => (
                          <PlanCard
                            key={plan.id}
                            plan={plan}
                            onToggleStatus={togglePlanStatus}
                            onDelete={deletePlan}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
