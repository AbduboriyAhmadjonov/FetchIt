import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: ['100 pages/month', 'Basic support', 'JSON export', 'Visual builder'],
      cta: 'Get Started Free',
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For growing businesses',
      features: [
        '10,000 pages/month',
        'Priority support',
        'API access',
        'Scheduled scrapes',
        'Proxy rotation',
        'Webhook support',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Unlimited scale and support',
      features: [
        'Unlimited pages',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'On-premise options',
        'White-label solutions',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                tier.highlighted ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-sm text-gray-600">/month</span>}
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="ml-3 text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
