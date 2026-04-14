import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Edit2, Trash2 } from 'lucide-react';
import { Plan } from '@/types/plan';
import { cn } from '@/lib/utils';

interface PlanCardProps {
  plan: Plan;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PlanCard({ plan, onToggleStatus, onDelete }: PlanCardProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl border-2 p-6 transition-all hover:shadow-md',
        plan.status === 'completed'
          ? 'border-green-200 bg-green-50'
          : 'border-gray-200 hover:border-blue-200'
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link
            to={`/plan/${plan.id}`}
            className={cn(
              'text-lg font-semibold hover:underline',
              plan.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
            )}
          >
            {plan.title}
          </Link>
          {plan.content && (
            <p className="mt-2 text-gray-600 text-sm">{plan.content}</p>
          )}
          <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>创建于 {formatDate(plan.createdAt)}</span>
            </span>
            {plan.dueDate && (
              <span className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>截止 {formatDate(plan.dueDate)}</span>
            </span>
            )}
            {plan.completedAt && (
              <span className="flex items-center space-x-1 text-green-600">
                <CheckCircle2 className="h-3 w-3" />
                <span>完成于 {formatDate(plan.completedAt)}</span>
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => onToggleStatus(plan.id)}
            className={cn(
              'p-2 rounded-lg transition-colors',
              plan.status === 'completed'
                ? 'text-green-600 hover:bg-green-100'
                : 'text-blue-600 hover:bg-blue-100'
            )}
            title={plan.status === 'completed' ? '标记为进行中' : '标记为已完成'}
          >
            <CheckCircle2 className="h-5 w-5" />
          </button>
          <Link
            to={`/plan/${plan.id}`}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            title="编辑"
          >
            <Edit2 className="h-5 w-5" />
          </Link>
          <button
            onClick={() => onDelete(plan.id)}
            className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-100 transition-colors"
            title="删除"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
