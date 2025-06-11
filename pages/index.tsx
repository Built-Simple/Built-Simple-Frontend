import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

// Constants for better maintainability
const BRAND = {
  primary: 'red-600',
  primaryHover: 'red-700',
  accent: 'red-400',
  accentHover: 'red-300'
} as const;

const CTA_TEXT = {
  audit: 'Claim My Free Audit Call',
  ai: 'Join the Waitlist',
  aiSecondary: 'Reserve Your AI →'
} as const;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [iframeLoading, setIframeLoading] = useState({ schedule: true, form: true });
  const formRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <Head>
        <title>Built Simple | Your Personal AI + Automation for Service Businesses</title>
        <meta
          name="description"
          content="Introducing your personal AI assistant with unlimited memory. Plus, we automate your entire workflow — from lead gen to fulfillment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Built Simple" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Built Simple | Your Personal AI Assistant" />
        <meta property="og:description" content="Get your own offline AI with unlimited memory that knows your entire business. Early access available now." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        <link rel="icon" href="/favicon.png" />
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded">
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        {/* Sticky Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Image 
              src="/logo.png" 
              alt="Built Simple - AI Automation Company Logo" 
              width={120} 
              height={40}
              priority
            />
            <nav className="flex items-center gap-6">
              <a href="#ai-assistant" className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors">
                Personal AI
              </a>
              <a href="#contact" className="text-white hover:text-red-300 text-sm font-semibold transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="pt-24 px-6">
          {/* New AI Hero Section */}
          <section className="relative overflow-hidden mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent animate-pulse" />
            <div className="relative max-w-6xl mx-auto text-center py-20">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                NEW: Personal AI Assistant Now Available
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">AI Brain</span>
                <br />
                <span className="text-4xl md:text-6xl">That Never Forgets</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Imagine having Jarvis. Offline. Private. With unlimited memory. 
                It knows your business, your life, your everything — and it&apos;s yours forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#ai-assistant"
                  className="inline-block bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
                  aria-label="Learn more about personal AI assistant and join waitlist"
                >
                  {CTA_TEXT.ai} →
                </a>
                <a
                  href="#schedule"
                  className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur transition-all px-8 py-4 rounded-xl text-lg font-semibold border border-white/20"
                  aria-label="Schedule free automation audit call"
                >
                  Or Get Automation Help
                </a>
              </div>
            </div>
          </section>

          {/* AI Features Section */}
          <section id="ai-assistant" className="max-w-6xl mx-auto mb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              The Last AI You&apos;ll Ever Need
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              While Big Tech harvests your data, your personal AI stays completely offline. 
              Your thoughts, your business, your life — secured on your own hardware.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AIFeatureCard 
                icon="🧠"
                title="Unlimited Memory" 
                description="Never lose a thought, conversation, or idea again. Your AI remembers everything, forever." 
              />
              <AIFeatureCard 
                icon="🔒"
                title="100% Private & Offline" 
                description="No cloud. No tracking. No data harvesting. Your AI runs entirely on your hardware." 
              />
              <AIFeatureCard 
                icon="🎯"
                title="Knows You Completely" 
                description="Access to all your files, calendars, emails. It's like having a second brain that actually understands you." 
              />
              <AIFeatureCard 
                icon="⚡"
                title="Instant Responses" 
                description="No internet delays. No API limits. Your AI responds at the speed of thought." 
              />
              <AIFeatureCard 
                icon="🛡️"
                title="You Own It Forever" 
                description="Not a subscription. Not a service. Buy once, use forever. Your data stays yours." 
              />
              <AIFeatureCard 
                icon="🚀"
                title="Early Access Discount" 
                description="Join the waitlist now for exclusive pricing before public launch." 
              />
            </div>

            <div className="mt-12 text-center">
              <a
                href="#ai-waitlist"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 px-10 py-5 rounded-xl text-xl font-bold shadow-xl"
                aria-label="Reserve your personal AI assistant with early access discount"
              >
                {CTA_TEXT.aiSecondary}
              </a>
              <p className="text-sm text-gray-400 mt-4">Limited units available. No payment required to join waitlist.</p>
            </div>
          </section>

          {/* Original Automation Hero */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Plus: Automate <span className="text-red-500">Everything</span> But the Work You Love
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              While your AI handles knowledge, we handle workflows. AI-powered systems for service businesses ready to scale without burnout.
            </p>
            <a
              href="#schedule"
              className="inline-block bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              aria-label="Schedule your free automation audit call"
            >
              {CTA_TEXT.audit}
            </a>
          </section>

          {/* Automation Features */}
          <section className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="Lead Capture & Nurture" 
              description="Auto-qualify leads, send instant replies, and book calls while you sleep. No more ghosting." 
            />
            <FeatureCard 
              title="AI-Generated Content" 
              description="We turn your ideas or client wins into daily social posts — visuals, hooks, captions, and all." 
            />
            <FeatureCard 
              title="Client Workflow Automation" 
              description="Onboarding, contracts, check-ins, invoices — we build flows that trigger automatically." 
            />
          </section>

          {/* Combined Value Prop */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Complete System</h2>
            <p className="text-lg text-gray-100 mb-8">
              Your personal AI handles the thinking. Our automations handle the doing. 
              Together, they give you superhuman leverage.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Personal AI Brain</h3>
                <p className="text-gray-300">Infinite memory, total privacy, knows everything about you</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-600/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Business Automation</h3>
                <p className="text-gray-300">Workflows that run themselves, content that creates itself</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full max-w-6xl mx-auto mb-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard 
                name="Jordan R." 
                title="Fitness Coach" 
                quote="Built Simple saved me over 10 hours a week and helped me close 3 high-ticket clients with automated follow-up flows." 
              />
              <TestimonialCard 
                name="Ashley T." 
                title="Marketing Consultant" 
                quote="I used to hate content creation. Now AI builds my posts, schedules them, and I just reply to comments." 
              />
              <TestimonialCard 
                name="DeShawn B." 
                title="Brand Strategist" 
                quote="Everything is cleaner, faster, and more efficient. Clients get a better experience and I have more time to think." 
              />
            </div>
          </section>

          {/* CTA Box */}
          <section className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 text-center shadow-xl mb-20">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Two Ways to Level Up</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Get Your Personal AI</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Reserve your offline AI assistant with unlimited memory. Early access pricing available.
                </p>
                <a
                  href="#ai-waitlist"
                  className="bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded-lg text-sm font-bold inline-block"
                >
                  Join AI Waitlist
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-2">Automate Your Business</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Get a free audit of your workflows and see what we can automate for you today.
                </p>
                <a
                  href="#schedule"
                  className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-lg text-sm font-bold inline-block"
                >
                  Book Audit Call
                </a>
              </div>
            </div>
          </section>

          {/* AI Waitlist Form */}
          <section id="ai-waitlist" className="w-full max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Reserve Your Personal AI</h2>
            <p className="text-gray-300 mb-8">
              Be among the first to own your private AI assistant. 
              Early access members get exclusive pricing and priority delivery.
            </p>
            {/* Simple waitlist form - in production you'd handle this submission */}
            <form className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
                  aria-label="Email address"
                  required
                />
              </div>
              <textarea
                placeholder="What would you use your personal AI for? (optional)"
                rows={3}
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors mb-6"
                aria-label="Use case for personal AI"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 px-8 py-3 rounded-lg font-bold w-full md:w-auto"
              >
                Reserve My Spot →
              </button>
              <p className="text-xs text-gray-400 mt-4">
                No payment required. We&apos;ll email you when early access opens.
              </p>
            </form>
          </section>

          {/* Schedule Section */}
          <section className="w-full max-w-3xl mx-auto mb-20 text-center" id="schedule">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Schedule Your Automation Audit</h2>
            <p className="text-gray-300 mb-6">
              See exactly what we can automate in your business. Free 30-minute call.
            </p>
            
            {iframeLoading.schedule && (
              <div className="h-[400px] bg-white/5 rounded-lg animate-pulse flex items-center justify-center">
                <p className="text-gray-400">Loading calendar...</p>
              </div>
            )}
            
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=35940395&calendarID=12220624&ref=embedded_csp"
              title="Schedule Automation Audit Call - Built Simple"
              width="100%"
              height="400"
              frameBorder="0"
              className={`rounded-lg ${iframeLoading.schedule ? 'hidden' : 'block'}`}
              loading="lazy"
              onLoad={() => setIframeLoading(prev => ({ ...prev, schedule: false }))}
              onError={() => {
                setIframeLoading(prev => ({ ...prev, schedule: false }));
                alert('Calendar loading failed. Please contact us at info@built-simple.ai');
              }}
            />
          </section>

          {/* Questions Section */}
          <section className="text-center mb-12">
            <p className="text-sm text-gray-400">Have questions about automation or the AI?</p>
            <button
              onClick={toggleForm}
              className="text-red-400 underline text-sm hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              aria-label="Show contact form"
            >
              Click here to get in touch
            </button>
          </section>

          {/* Contact Form */}
          {showForm && (
            <section ref={formRef} className="w-full max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-6">Apply for a Free Automation Audit</h2>
              
              {iframeLoading.form && (
                <div className="h-[800px] bg-white/5 rounded-xl animate-pulse flex items-center justify-center">
                  <p className="text-gray-400">Loading form...</p>
                </div>
              )}
              
              <iframe
                title="Built Simple Automation Audit Application Form"
                src="https://form.jotform.com/251482303686156"
                width="100%"
                height="800"
                allowFullScreen
                className={`border-0 rounded-xl shadow-lg ${iframeLoading.form ? 'hidden' : 'block'}`}
                onLoad={() => setIframeLoading(prev => ({ ...prev, form: false }))}
                onError={() => {
                  setIframeLoading(prev => ({ ...prev, form: false }));
                  alert('Form loading failed. Please email us at info@built-simple.ai');
                }}
              />
            </section>
          )}

          {/* Final CTA */}
          <section className="text-center py-20" id="contact">
            <h2 className="text-4xl font-bold mb-4">Ready to 10x Your Life?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s your own AI that never forgets or automations that never stop working — 
              we&apos;re here to give you superhuman capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#ai-waitlist"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 px-10 py-4 rounded-full text-md font-bold inline-block shadow-xl"
              >
                Get Your AI →
              </a>
              <a
                href="#schedule"
                className="bg-white/10 hover:bg-white/20 backdrop-blur transition-all px-10 py-4 rounded-full text-md font-bold inline-block border border-white/20"
              >
                Automate Your Business →
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full max-w-6xl mx-auto text-center text-sm text-gray-400 border-t border-white/10 pt-8 pb-8">
            <p>&copy; {new Date().getFullYear()} Built Simple. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:info@built-simple.ai" className="hover:text-red-400 transition-colors">
                info@built-simple.ai
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

// Component definitions
function AIFeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:border-red-400/50">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors">{title}</h3>
      <p className="text-gray-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:border-blue-400/50">
      <h3 className="text-xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">{title}</h3>
      <p className="text-gray-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, title, quote }: { name: string; title: string; quote: string }) {
  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-all hover:scale-105">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-md font-semibold text-white">{name}</h4>
          <p className="text-xs text-gray-400">{title}</p>
        </div>
      </div>
      <p className="italic text-sm text-gray-100">&quot;{quote}&quot;</p>
    </div>
  );
}