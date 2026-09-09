export interface Book {
  title: string;
  author: string;
  genre?: string[];
  status: Status;
  bookmark?: number;
  cover?: string; 
}

export type Status = 'Ready to Start' | 'Finished' | 'In progress' | 'Next'