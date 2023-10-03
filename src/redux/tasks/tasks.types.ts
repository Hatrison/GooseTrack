export type TTask = {
  _id: string;
  title: string;
  date: string;
  categoty: string;
  priority: string;
  start: string;
  end: string;
  owner: string;
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

export type TTaskUpdate = Required<{
  _id: string;
  owner: string;
}>;
