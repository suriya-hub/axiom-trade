import { SkeletonProps } from "@/app/types/interface";

export const Skeleton = ({ width = "full", height = "4", className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-800/80 rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export const TokenRowSkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-3 border border-gray-800 rounded-lg">

      {/* Left image */}
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="w-14 h-14 rounded" />
        <Skeleton className="w-12 h-3" />
      </div>

      {/* Middle content */}
      <div className="flex-1 space-y-2">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-56 h-3" />
        <div className="flex gap-2">
          <Skeleton className="w-10 h-3" />
          <Skeleton className="w-10 h-3" />
          <Skeleton className="w-10 h-3" />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-2">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-16 h-3" />
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
    </div>
  );
};