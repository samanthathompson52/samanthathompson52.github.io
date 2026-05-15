const pillars = [
  {
    title: 'Product Ownership',
    points: [
      'Customer discovery with dog training facility owners and trainers',
      'Multi-persona design across facility owners, trainers, and pet parents',
      'Actively managed public roadmap driven by early adopter feedback',
      'Three-tier pricing strategy and GTM early adopter program',
    ],
  },
  {
    title: 'Technical Architecture',
    points: [
      'Multi-tenant SaaS with dedicated per-customer databases and infrastructure',
      'Automated provisioning pipeline (Neon, DigitalOcean, Resend)',
      'Stripe billing with tiered plans, checkout, and self-service portal',
      'Full-stack Next.js with PostgreSQL on AWS and DigitalOcean',
    ],
  },
  {
    title: 'Business Operations',
    points: [
      'Founded and operate all product, engineering, and business functions',
      'Currently serving paying customers',
      'Early adopter program providing founding member access and direct product input',
      'Iterative delivery loop: feedback → roadmap → release → repeat',
    ],
  },
];

const techStack = ['Next.js', 'PostgreSQL', 'DigitalOcean', 'AWS', 'Stripe API'];

const FinnlyShowcase = () => {
  return (
    <div className="bg-mainlight py-20 px-6">
      <span id="finnly"></span>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="md:text-5xl text-4xl bold">Finnly, LLC</h1>
          </div>
          <p className="max-w-2xl">
            I founded Finnly for dog trainers and pet facilities who were stuck with generic software that didn't fit their workflows.
            Finnly is a SaaS platform for pet care businesses that focuses around tailored solutions, because software should work for their business not the other way around.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col bg-white rounded-2xl p-8 border-t-4 border-main shadow-sm"
            >
              <h2 className="text-main font-extrabold text-lg tracking-wide mb-6 pb-3 border-b border-gray-100">
                {pillar.title}
              </h2>
              <ul className="pl-5 list-disc">
                {pillar.points.map((point) => (
                  <li key={point} className="mb-2 text-gray-700 leading-relaxed" style={{ fontSize: '1rem' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech stack + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Built With</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <div key={t} className="tech"><p>{t}</p></div>
              ))}
            </div>
          </div>
          <a
            href="https://finnly.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-main text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Live Product →
          </a>
        </div>

      </div>
    </div>
  );
};

export default FinnlyShowcase;
