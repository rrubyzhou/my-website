import React from 'react';

const mlItems = [
  {
    title: 'Customer Churn Prediction',
    tech: 'Python, XGBoost, SQL, Jupyter, matplotlib',
    date: 'Apr. 2025',
    description: [
      'Prototyped a supervised learning pipeline to predict customer churn on 7K+ records, achieving 82% accuracy and 0.85 ROC-AUC.',
      'Used SQL for feature extraction and Jupyter Notebooks for rapid experimentation and visualization.',
      'Mapped churn patterns and model insights using matplotlib; refined feature set for explainability.'
    ],
  },
  {
    title: 'Credit Card Fraud Detection',
    tech: 'Python, Scikit-learn, Pandas',
    date: 'May 2025',
    description: [
      'Built a binary classifier using logistic regression to detect fraud in 285K+ transactions, achieving 91% precision.',
      'Handled imbalanced data, engineered features, and evaluated using confusion matrix, F1-score, and recall.',
      'Packaged the model in a testable API prototype, simulating deployment-ready outputs.'
    ],
  },
];

const mlBgClasses = [
  'bg-pink-100 text-pink-700',
  'bg-yellow-100 text-yellow-700',
];

const MLShowcaseSection = () => (
  <section className="container py-16">
    <h2 className="text-4xl font-bold mb-10 text-pink-600">Machine Learning</h2>
    <div className="grid gap-8 xs:grid-cols-1 md:grid-cols-2">
      {mlItems.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:scale-105 ${mlBgClasses[idx % mlBgClasses.length]}`}
        >
          <div className="flex-1 p-8">
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <div className="text-xs font-semibold mb-1">{item.tech} <span className="float-right">{item.date}</span></div>
            <ul className="list-disc ml-5 mt-2 text-base">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MLShowcaseSection; 