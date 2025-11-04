import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is SplitPlans?',
      answer:
        'SplitPlans is an event management platform that helps organizers split costs, track payments, and manage participants for events like sports games, social gatherings, and more.',
    },
    {
      question: 'How do I sign up?',
      answer:
        'You can sign up using your email, Google, or Facebook account. Simply click on the "Sign Up" button on the homepage and follow the prompts.',
    },
    {
      question: 'How do I verify my email?',
      answer:
        'After signing up, you will receive an email with a verification link. Click the link to verify your account.',
    },
  ],
  [
    {
      question: 'How does SplitPlans help with event payments?',
      answer:
        'SplitPlans ensures that costs are split among participants, and payments are collected from everyone before the event, making it hassle-free for the organizer.',
    },
    {
      question: "What if participants don't pay?",
      answer:
        "Participants need to have enough funds in their account to join the event. If they don't have sufficient funds, they will be prompted to add more before confirming participation.",
    },
    {
      question: 'What if an event is canceled?',
      answer:
        'If an event is canceled, funds will be released from lock status and available for use.',
    },
  ],
  [
    {
      question: 'Is my personal information safe on SplitPlans?',
      answer:
        'Yes, we use encryption and industry-standard security measures to protect your personal data. You can read more in our Privacy Policy.',
    },
    {
      question: 'Can I use SplitPlans for free?',
      answer:
        'Yes, SplitPlans offers a free tier for basic event management and payment splitting. However, we also offer premium features for advanced users. There is a 15% service fee that gets divided by the participants.',
    },
    {
      question: "Can I invite people to an event who aren't SplitPlans users?",
      answer:
        "Yes, you can invite non-users via email or by sharing a unique event link. They'll need to register to join the event.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Find answers to the most common questions about SplitPlans.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
