export type PlanStatus = 'in_progress' | 'completed';

export interface Plan {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  dueDate: Date | null;
  completedAt: Date | null;
  status: PlanStatus;
}
