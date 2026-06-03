export default function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <div className={`bento-tile animate-pulse bg-white/5 ${className}`} />
  );
}
