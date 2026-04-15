import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-extrabold text-purple-700 font-[family-name:var(--font-mono)]">404</p>
          <h1 className="mt-4 text-3xl font-bold text-black">This page doesn&apos;t exist.</h1>
          <p className="mt-2 text-lg text-gray-600">But your next building could.</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/" className="bg-gold text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors">
              Back Home
            </Link>
            <Link href="/contact?ref=pathfinder" className="border border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold text-sm hover:border-purple-700 hover:text-purple-700 transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
