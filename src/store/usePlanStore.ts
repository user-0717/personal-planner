import { create } from 'zustand';
import { Plan, PlanStatus } from '@/types/plan';
import { storage } from '@/utils/storage';

interface PlanStore {
  plans: Plan[];
  addPlan: (plan: Omit<Plan, 'id' | 'createdAt' | 'completedAt' | 'status'>) => void;
  updatePlan: (id: string, updates: Partial<Plan>) => void;
  deletePlan: (id: string) => void;
  togglePlanStatus: (id: string) => void;
  getPlanById: (id: string) => Plan | undefined;
  getInProgressPlans: () => Plan[];
  getCompletedPlans: () => Plan[];
}

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const usePlanStore = create<PlanStore>((set, get) => {
  const initialPlans = storage.getPlans();

  return {
    plans: initialPlans,

    addPlan: (planData) => {
      const newPlan: Plan = {
        ...planData,
        id: generateId(),
        createdAt: new Date(),
        completedAt: null,
        status: 'in_progress',
      };
      set((state) => {
        const updatedPlans = [...state.plans, newPlan];
        storage.savePlans(updatedPlans);
        return { plans: updatedPlans };
      });
    },

    updatePlan: (id, updates) => {
      set((state) => {
        const updatedPlans = state.plans.map((plan) =>
          plan.id === id ? { ...plan, ...updates } : plan
        );
        storage.savePlans(updatedPlans);
        return { plans: updatedPlans };
      });
    },

    deletePlan: (id) => {
      set((state) => {
        const updatedPlans = state.plans.filter((plan) => plan.id !== id);
        storage.savePlans(updatedPlans);
        return { plans: updatedPlans };
      });
    },

    togglePlanStatus: (id) => {
      set((state) => {
        const updatedPlans = state.plans.map((plan) => {
          if (plan.id === id) {
            const newStatus: PlanStatus = plan.status === 'in_progress' ? 'completed' : 'in_progress';
            return {
              ...plan,
              status: newStatus,
              completedAt: newStatus === 'completed' ? new Date() : null,
            };
          }
          return plan;
        });
        storage.savePlans(updatedPlans);
        return { plans: updatedPlans };
      });
    },

    getPlanById: (id) => {
      return get().plans.find((plan) => plan.id === id);
    },

    getInProgressPlans: () => {
      return get().plans.filter((plan) => plan.status === 'in_progress');
    },

    getCompletedPlans: () => {
      return get().plans
        .filter((plan) => plan.status === 'completed')
        .sort((a, b) => {
          if (!a.completedAt || !b.completedAt) return 0;
          return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
        });
    },
  };
});
