import {
  ShoppingCartIcon,
  ChartPieIcon,
  UserGroupIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingCartIcon,
      title: 'E-commerce Monitoring',
      description: 'Track competitor prices, product availability, and market trends in real-time',
      userType: 'both',
    },
    {
      icon: ChartPieIcon,
      title: 'Market Research',
      description: 'Gather insights from multiple sources for comprehensive market analysis',
      userType: 'non-dev',
    },
    {
      icon: UserGroupIcon,
      title: 'Lead Generation',
      description: 'Extract contact information from business directories and social platforms',
      userType: 'both',
    },
    {
      icon: NewspaperIcon,
      title: 'Content Aggregation',
      description: 'Collect news, articles, and content from multiple sources for analysis',
      userType: 'dev',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-[fadeInUp_0.6s_ease-out]">
            Real-World Applications
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            See how businesses and developers use our platform to gain competitive advantages
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, i) => (
              <div
                key={useCase.title}
                style={{ animationDelay: `${i * 0.15}s` }}
                className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/20 animate-[fadeInUp_0.6s_ease-out_both]"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <useCase.icon className="h-7 w-7" />
                </div>

                {/* Title / description */}
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{useCase.description}</p>

                {/* tiny tag */}
                {useCase.userType === 'non-dev' && (
                  <span className="mt-3 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    No-code
                  </span>
                )}
                {useCase.userType === 'dev' && (
                  <span className="mt-3 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Dev
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe helper (inline) */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
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

export default UseCases;
