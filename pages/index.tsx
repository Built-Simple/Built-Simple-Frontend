import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Built Simple | AI Automation for Service Businesses</title>
        <meta
          name="description"
          content="We help overwhelmed service providers automate their entire workflow — from lead gen to fulfillment — using AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Built Simple" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16 flex flex-col items-center">
        <header className="w-full max-w-6xl flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-white">Built Simple</h1>
          <a href="#contact" className="text-red-400 hover:underline text-sm font-semibold">Contact</a>
        </header>

        <section className="max-w-4xl text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Automate <span className="text-red-500">Everything</span> But the Work You Love.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We build AI-powered systems for service businesses ready to scale without burnout. From intake to content to client delivery — it&apos;s all done for you.
          </p>
          <a
            href="https://your-jotform-link.com"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Automation Audit
          </a>
        </section>

        <section className="w-full max-w-6xl grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard title="Lead Capture & Nurture" description="Auto-qualify leads, send instant replies, and book calls while you sleep. No more ghosting." />
          <FeatureCard title="AI-Generated Content" description="We turn your ideas or client wins into daily social posts — visuals, hooks, captions, and all." />
          <FeatureCard title="Client Workflow Automation" description="Onboarding, contracts, check-ins, invoices — we build flows that trigger automatically." />
        </section>

        <section className="max-w-4xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Built Simple?</h2>
          <p className="text-lg text-gray-300">
            Because you&apos;re a real business owner — not a robot. We eliminate digital busywork so you can spend time on strategy, sales, or simply living.
          </p>
        </section>

        <section className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-xl mb-20">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">Let&apos;s Make It Easy.</h3>
          <p className="text-md text-gray-300 mb-6">
            Whether you&apos;re a coach, creative, or consultant — we custom-build automations to fit your brand, your offers, and your backend.
          </p>
          <a
            href="https://your-jotform-link.com"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-xl text-md font-bold inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim My Free Audit Call
          </a>
        </section>

        <section className="w-full max-w-6xl mb-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard name="Jordan R." title="Fitness Coach" quote="Built Simple saved me over 10 hours a week and helped me close 3 high-ticket clients with automated follow-up flows." />
            <TestimonialCard name="Ashley T." title="Marketing Consultant" quote="I used to hate content creation. Now AI builds my posts, schedules them, and I just reply to comments." />
            <TestimonialCard name="DeShawn B." title="Brand Strategist" quote="Everything is cleaner, faster, and more efficient. Clients get a better experience and I have more time to think." />
          </div>
        </section>

        <section className="w-full max-w-5xl mb-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-red-400 mb-2">Real-Time Demo</h4>
            <p className="text-gray-300 text-sm mb-4">
              Watch a 90-second demo where we walk through a real automation — from lead capture to onboarding.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Automation Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-red-400 mb-2">How It Works</h4>
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
              <li>Step 1: Book your free automation audit</li>
              <li>Step 2: We analyze your current workflow</li>
              <li>Step 3: We build a custom AI stack using your tools</li>
              <li>Step 4: You approve → we implement → done</li>
            </ul>
          </div>
        </section>

        <section className="text-center py-20" id="contact">
          <h2 className="text-4xl font-bold mb-4">This Will Work For You.</h2>
          <p className="text-lg text-gray-300 mb-6">
            You don&apos;t need to know code. You don&apos;t need to change platforms. You just need to want to save time and grow.
          </p>
          <a
            href="https://your-jotform-link.com"
            className="bg-red-600 hover:bg-red-700 transition px-10 py-4 rounded-full text-md font-bold inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Build Simple →
          </a>
        </section>

        <footer className="w-full max-w-6xl text-center text-sm text-gray-500 border-t border-white/10 pt-8">
          &copy; {new Date().getFullYear()} Built Simple. All rights reserved.
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 text-red-400">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, title, quote }: { name: string; title: string; quote: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-md">
      <p className="italic text-sm text-gray-300 mb-4">&quot;{quote}&quot;</p>
      <h4 className="text-md font-semibold text-white">{name}</h4>
      <p className="text-xs text-gray-400">{title}</p>
    </div>
  );
}
