const faqs = [
  {
    question: "How do I search for cars on this platform?",
    answer:
      "You can use the search bar at the top of the page or filter options to find the car that fits your needs.",
  },
  {
    question: "What is the maximum price range available?",
    answer:
      "The maximum price range depends on the cars listed by our sellers, but typically ranges from $0 to $210.",
  },
  {
    question: "How do I filter cars by type and category?",
    answer:
      "Use the filters on the car listing page by clicking on show more button (/cars) to select the type and category of cars you're looking for, such as SUVs, Sedans, or Coupes.",
  },
  {
    question: "Do I need an account to book a car?",
    answer:
      "Yes, you need to create an account to finalize a car. This ensures a secure and personalized experience.",
  },
  {
    question: "What payment options are supported?",
    answer:
      "We support multiple payment methods including credit/debit cards, PayPal, bitcoin and bank transfers.",
  },
  {
    question: "How can I contact support for further assistance?",
    answer:
      "You can contact our support team by emailing morentsupport@gmail.com."
  },
];

function FAQPage() {
  return (
    <section className="w-full max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Help Center & FAQ
      </h1>
      <p className="text-gray-600 mb-10">
        Have questions? We’re here to help. Below you’ll find answers to the
        most commonly asked questions. If you can’t find what you’re looking
        for, feel free to contact us!
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold text-gray-800">{faq.question}</h2>
            </div>
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQPage;
