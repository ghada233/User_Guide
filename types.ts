
export interface Step {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  details?: string[];
}

export enum CircleType {
  InPerson = 'حضوري',
  Remote = 'عن بعد'
}
