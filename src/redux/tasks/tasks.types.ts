export type TTask = {
  _id: string;
  title: string;
  date: string;
  category: string;
  priority: string;
  start: string;
  end: string;
  owner?: string;
};

export type TInitialState = {
  tasks: TTask[];
  isLoading: boolean;
  error: string | null;
};

export type TTaskFetch = Required<{
  year: number;
  month: number;
}>;

export type TTaskAdd = Pick<
  TTask,
  'title' & 'date' & 'category' & 'priority' & 'start' & 'end'
>;

export type TTaskUpdate = Partial<TTask> &
  Required<{
    _id: string;
  }>;
