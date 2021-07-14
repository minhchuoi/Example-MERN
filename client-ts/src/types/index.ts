export interface TypeData {
  title?: string;
  content?: string;
  author?: string;
  attactment?: string;
  likeCount?: number;
}

export interface TypeInitialState {
  data?: TypeData[];
  status?: string | null;
  modal?: string;
}
