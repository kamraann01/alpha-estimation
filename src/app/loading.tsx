export default function Loading() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto animate-pulse">
        {/* Heading skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 w-24 bg-white/8 rounded-full mx-auto mb-4" />
          <div className="h-10 w-80 bg-white/8 rounded-xl mx-auto mb-4" />
          <div className="h-5 w-96 bg-white/5 rounded-lg mx-auto" />
        </div>
        {/* Content skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-3">
              <div className="h-5 w-32 bg-white/8 rounded" />
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-3/4 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
