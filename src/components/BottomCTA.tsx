import { MagneticButton } from '@/components/ui/MagneticButton';

export default function BottomCTA() {
  return (
    <section aria-label="Get started" className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
          Not sure where to start? That&apos;s exactly what we&apos;re here for.
        </h2>
        <p className="text-gray-400 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
          Our Pathfinder process gives you a clear plan — budget, timeline, and next steps —
          before you commit to anything.
        </p>
        <div className="mb-10">
          <MagneticButton href="/contact?ref=pathfinder" variant="gold">
            Start a Conversation
          </MagneticButton>
        </div>
        <p className="text-gray-500 text-sm">
          <a
            href="mailto:connect@primus-companies.com"
            className="hover:text-gold transition-colors"
          >
            connect@primus-companies.com
          </a>
          {' · '}
          <a href="tel:+13193934831" className="hover:text-gold transition-colors">
            (319) 393-4831
          </a>
        </p>
      </div>
    </section>
  );
}
