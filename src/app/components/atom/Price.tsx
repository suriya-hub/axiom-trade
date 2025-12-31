import { PriceProps } from "@/app/types/interface";

export const Price = ({ value }: PriceProps) => {
  return <span>${value.toFixed(2)}</span>;
};
