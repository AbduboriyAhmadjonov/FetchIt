import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Enter URL',
      description: 'Paste the website URL you want to scrape',
      visual: '🔗',
    },
    {
      number: 2,
      title: 'Configure',
      description: 'Select elements visually or use our API',
      visual: '⚙️',
    },
    {
      number: 3,
      title: 'Scrape',
      description: 'Run the scraper and monitor progress',
      visual: '🚀',
    },
    {
      number: 4,
      title: 'Download JSON',
      description: 'Get your clean, structured data instantly',
      visual: '📥',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-[fadeInUp_0.6s_ease-out]">
            From URL to JSON in 4 Simple Steps
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            No technical skills required—our platform guides you through every step
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                style={{ animationDelay: `${idx * 0.15}s` }}
                className="group relative flex flex-col items-center animate-[fadeInUp_0.6s_ease-out_both]"
              >
                {/* Number circle */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>

                {/* Text + emoji */}
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  <div className="mt-4 text-5xl transition-transform duration-300 group-hover:scale-125">
                    {step.visual}
                  </div>
                </div>

                {/* Arrow connector (hidden on last) */}
                {idx < steps.length - 1 && (
                  <ArrowRightIcon className="absolute top-10 -right-4 hidden h-8 w-8 text-gray-400 lg:block transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick-start example */}
        <div className="mx-auto mt-16 max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Start Example</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Website URL</label>
                <input
                  type="url"
                  placeholder="https://example-shop.com/products"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700">
                Start Scraping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe helper (inline, still Tailwind-only) */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
