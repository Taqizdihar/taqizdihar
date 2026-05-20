export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold mb-6 text-maroon-900 dark:text-white transition-colors duration-300">{title}</h1>
      <div className="backdrop-blur-md rounded-2xl p-8 h-64 flex items-center justify-center border bg-white/90 border-maroon-900/10 text-maroon-800/70 dark:bg-[#990000]/90 dark:border-red-700/50 dark:text-red-100 transition-colors duration-300 shadow-xl">
        <p className="text-center font-medium">Content for {title} goes here. Data will be fetched from data.ts.</p>
      </div>
    </div>
  );
}
