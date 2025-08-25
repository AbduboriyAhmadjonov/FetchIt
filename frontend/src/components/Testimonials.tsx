import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content:
        'As a non-technical user, I was able to set up complex scraping jobs in minutes. The visual builder is incredibly intuitive!',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Developer',
      company: 'DataFlow Inc.',
      content:
        "The API is rock-solid. We've integrated it into our data pipeline and it handles millions of requests without breaking a sweat.",
      avatar:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      content:
        'We use it for competitor analysis and lead generation. The scheduled scrapes save us hours every week.',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Developers and Businesses Alike
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of satisfied users who've transformed their data extraction workflow
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <blockquote className="mt-6 text-gray-900">
                <p>"{testimonial.content}"</p>
              </blockquote>

              <div className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
