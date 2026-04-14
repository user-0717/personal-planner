import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Edit2, Trash2 } from 'lucide-react';
import { usePlanStore } from '@/store/usePlanStore';
import PlanForm from '@/components/PlanForm';
import { cn } from '@/lib/utils';

export default function PlanDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);
  const { getPlanById, togglePlanStatus, deletePlan } = usePlanStore();

  const plan = id ? getPlanById(id) : undefined;

  if (!plan) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-gray-500">计划不存在</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-blue-600 hover:underline"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | null) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = () => {
    if (window.confirm('确定要删除这个计划吗？')) {
      deletePlan(plan.id);
      navigate('/');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>返回</span>
      </button>

      <div
        className={cn(
          'bg-white rounded-2xl border-2 p-8',
          plan.status === 'completed' ? 'border-green-200 bg-green-50' : 'border-gray-200'
        )}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1
              className={cn(
                'text-2xl font-bold',
                plan.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
              )}
            >
              {plan.title}
            </h1>
            <span
              className={cn(
                'inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium',
                plan.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              )}
            >
              {plan.status === 'completed' ? '已完成' : '进行中'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => togglePlanStatus(plan.id)}
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
            <button
              onClick={() => setShowEditForm(true)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              title="编辑"
            >
              <Edit2 className="h-5 w-5" />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-100 transition-colors"
              title="删除"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {plan.content && (
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-500 mb-2">内容描述</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{plan.content}</p>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">创建于：{formatDate(plan.createdAt)}</span>
          </div>
          {plan.dueDate && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">截止时间：{formatDate(plan.dueDate)}</span>
            </div>
          )}
          {plan.completedAt && (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm">完成时间：{formatDate(plan.completedAt)}</span>
            </div>
          )}
        </div>
      </div>

      {showEditForm && (
        <PlanForm
          plan={plan}
          onClose={() => setShowEditForm(false)}
          onSuccess={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
}
