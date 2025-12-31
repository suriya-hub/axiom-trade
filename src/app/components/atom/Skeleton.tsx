import { SkeletonProps } from "@/app/types/interface";

export const Skeleton = ({ width = "full", height = "4", className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    />
  );
};
