import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need coding skills to use this?',
      answer:
        'No! Our visual builder is designed for non-technical users. However, developers can leverage our powerful API for advanced use cases.',
    },
    {
      question: 'What data formats are supported?',
      answer:
        'We primarily support JSON for its flexibility and widespread adoption. We also offer CSV and Excel exports for specific use cases.',
    },
    {
      question: 'How do you handle anti-bot measures?',
      answer:
        'We use advanced techniques including rotating proxies, browser fingerprinting, and CAPTCHA solving to ensure reliable data extraction.',
    },
    {
      question: 'Is there an API available?',
      answer:
        'Yes! Our RESTful API provides full access to all features, including webhooks for real-time notifications and integration capabilities.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'We offer a free tier to get started. Paid plans start at $49/month and scale based on your usage needs. Enterprise solutions are available for large-scale requirements.',
    },
    {
      question: 'Can I schedule automatic scrapes?',
      answer:
        "Absolutely! Set up recurring scrapes on any schedule - hourly, daily, weekly, or custom intervals. We'll handle the rest.",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about getting started
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-xl focus-within:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between rounded-2xl p-6 text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {/* Smooth expand/collapse */}
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-6 py-4 text-base leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
