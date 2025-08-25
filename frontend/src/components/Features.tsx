import {
  CodeBracketIcon,
  SparklesIcon,
  CloudArrowDownIcon,
  ClockIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Visual Builder',
      description: 'Point-and-click interface for non-developers. No coding needed.',
      userType: 'non-dev',
    },
    {
      icon: CodeBracketIcon,
      title: 'RESTful API',
      description: 'Full-featured API with webhooks for seamless integration.',
      userType: 'dev',
    },
    {
      icon: CloudArrowDownIcon,
      title: 'JSON Export',
      description: 'Clean, structured JSON output ready for immediate use.',
      userType: 'both',
    },
    {
      icon: ClockIcon,
      title: 'Scheduled Scrapes',
      description: 'Set it and forget it. Automate your data collection.',
      userType: 'both',
    },
    {
      icon: CogIcon,
      title: 'Custom Configurations',
      description: 'Fine-tune every aspect: headers, cookies, rate limits.',
      userType: 'dev',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Auto Proxy Rotation',
      description: 'Smart proxy management to avoid blocks and bans.',
      userType: 'both',
    },
    {
      icon: GlobeAltIcon,
      title: 'Headless Browser',
      description: 'Full browser automation for JavaScript-heavy sites.',
      userType: 'dev',
    },
    {
      icon: CpuChipIcon,
      title: 'Real-time Processing',
      description: "Get your data as soon as it's scraped—no waiting.",
      userType: 'both',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">
            Powerful Features for Every User
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in animation-delay-200">
            Whether you're a developer or business user, we have the tools you need
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:shadow-blue-500/20`}
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                <dt className="mt-4 text-base font-semibold leading-7 text-gray-900">
                  {feature.title}
                  {feature.userType === 'dev' && (
                    <span className="ml-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      Dev
                    </span>
                  )}
                  {feature.userType === 'non-dev' && (
                    <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      No-code
                    </span>
                  )}
                </dt>

                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto transition-colors duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* JSON Showcase */}
        <div className="mt-24 rounded-2xl bg-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
          <h3 className="text-xl font-semibold text-white mb-4 animate-pulse">Clean JSON Output</h3>
          <div className="overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono transition-all duration-300 hover:text-gray-100">
              {`{
  "products": [
    {
      "name": "iPhone 15 Pro",
      "price": 999,
      "availability": true,
      "rating": 4.8,
      "url": "https://example.com/iphone-15-pro"
    },
    {
      "name": "Samsung Galaxy S24",
      "price": 899,
      "availability": true,
      "rating": 4.7,
      "url": "https://example.com/galaxy-s24"
    }
  ],
  "scraped_at": "2024-01-15T10:30:00Z",
  "total_items": 2
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
