import type { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  name: string;
  labelName: string;
}

export interface FormValues {
  name: string;
  description: string;
  levelOfNeed: string;
  grade: string;
  donations: number | undefined;
}

export interface ChildCardProps {
  id?: BaseKey | undefined;
  name: string;
  age: string;
  childId: string;
  gender: string;
  grade: string;
  levelOfNeed: string;
  donations: string;
  photo: string;
}
