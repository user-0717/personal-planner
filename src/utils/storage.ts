import { Plan } from '@/types/plan';

const STORAGE_KEY = 'personal-plans';

export const storage = {
  getPlans: (): Plan[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return parsed.map((plan: any) => ({
        ...plan,
        createdAt: new Date(plan.createdAt),
        dueDate: plan.dueDate ? new Date(plan.dueDate) : null,
        completedAt: plan.completedAt ? new Date(plan.completedAt) : null,
      }));
    } catch (error) {
      console.error('Failed to load plans from storage:', error);
      return [];
    }
  },

  savePlans: (plans: Plan[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
    } catch (error) {
      console.error('Failed to save plans to storage:', error);
    }
  },
};
