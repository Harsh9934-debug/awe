import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-light tracking-tight mb-4">404</h1>
      <p className="text-zinc-400 text-lg mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
