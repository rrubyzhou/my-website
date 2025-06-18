import AppLayout from '@/layouts/AppLayout';
import SectionTitle from '@/components/shared/SectionTitle';

const bgClasses = [
  'bg-pink-400 text-white',
  'bg-yellow-300 text-yellow-900',
  'bg-purple-400 text-white',
  'bg-blue-400 text-white',
  'bg-green-400 text-white',
  'bg-rose-400 text-white',
  'bg-fuchsia-400 text-white',
  'bg-teal-400 text-white',
];

type Project = {
  title: string;
  image?: string;
  previewUrl: string;
  tags?: string[];
  tech?: string;
  date?: string;
  description?: string | string[];
};

const projects: Project[] = [
  {
    title: 'Chronicle',
    image: '/images/chronicle-screenshot.png',
    previewUrl: 'https://dorahacks.io/buidl/21701/',
    tags: ['Python', 'React', 'Linux', 'JIRA', 'NLP', 'DeepSeek AI'],
    tech: 'Python, React, Linux, JIRA, NLP, DeepSeek AI',
    description: 'Built an end-to-end NLP pipeline that analyzes story text using NER, sentiment scoring, and chunking, with a React frontend and Python backend communicating via a ROS-inspired publish-subscribe model.',
  },
  {
    title: 'Customer Churn Prediction',
    image: '/images/churr-corr-heatmap.png',
    previewUrl: 'https://github.com/rrubyzhou/customer-churn-prediction',
    tags: ['Python', 'XGBoost', 'SQL', 'Jupyter', 'matplotlib', 'SMOTE'],
    tech: 'Python, XGBoost, SQL, Jupyter, matplotlib, SMOTE',
    date: 'Apr. 2025',
    description: 'Developed a customer churn prediction model using supervised learning, feature engineering, XGBoost, SMOTE, and other machine learning techniques to improve classification accuracy on imbalanced telecom datasets.',
  },
  {
    title: 'Credit Card Fraud Detection',
    image: '/images/creditcard.png',
    previewUrl: 'https://github.com/rrubyzhou/credit-card-fraud-detection',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'API'],
    tech: 'Python, Scikit-learn, Pandas, Logistic Regression, API',
    date: 'May 2025',
    description: 'Built a credit card fraud detection model using logistic regression, feature scaling, undersampling, and other machine learning techniques to classify rare fraudulent transactions in an imbalanced dataset of 285K+ entries.',
  },
  {
    title: 'MERN FullStack Social Media App',
    image: '/images/socialmedia.png',
    previewUrl: 'https://github.com/rrubyzhou/social-media-clone-mern',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'MUI'],
    tech: 'React, Node.js, Express, MongoDB, Redux Toolkit, MUI',
    description: 'Built a fullstack social media platform from scratch with features like user authentication, post creation, likes, and profile pages.',
  },
  {
    title: 'Movie Recommendation System',
    image: '/images/movie.png',
    previewUrl: 'https://github.com/rrubyzhou/movie-recommender-machine-learning',
    tags: ['Python', 'Pandas', 'TF-IDF', 'Streamlit'],
    tech: 'Python, Pandas, TF-IDF, Streamlit',
    description: 'A content-based movie recommender system built with Python and Streamlit, using TF-IDF, cosine similarity, and other machine learning techniques to deliver real-time recommendations across 10K+ films.',
  },
  {
    title: 'ReWear',
    image: '/images/rewear-screenshot.png',
    previewUrl: 'https://devpost.com/software/rewear-ahofe3',
    tags: ['Python', 'Torch', 'Flask', 'React', 'Linux'],
    tech: 'Python, Torch, Flask, React, Linux',
    description: 'A Chrome extension that matches user-uploaded clothing images to similar secondhand items using visual similarity and tracks environmental impact to promote sustainable shopping.',
  },
  {
    title: 'Forkify Recipe App',
    image: '/images/forkify-screenshot.png',
    previewUrl: 'https://github.com/rrubyzhou/forkify-recipe-app',
    tags: ['JavaScript', 'React', 'REST API', 'Parcel', 'SCSS', 'HTML', 'Git'],
    tech: 'JavaScript, React, REST API, Parcel, SCSS, HTML, Git',
    description: 'Built a responsive recipe web app with search, bookmarking, and recipe upload functionality by integrating the Forkify REST API.',
  },
];

const ProjectsPage = () => {
  return (
    <AppLayout title="Projects">
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <div className="container py-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="mt-10 grid gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 ${bgClasses[idx % bgClasses.length]}`}
              >
                <div className="h-64 w-full flex items-center justify-center bg-white/40 rounded-t-2xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain rounded-t-2xl"
                    />
                  ) : (
                    <span className="text-2xl opacity-60">No Image</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-white/30 text-xs font-semibold px-2 py-1 rounded-full border border-white/50">{tag}</span>
                      ))}
                    </div>
                  )}
                  {project.description && (
                    Array.isArray(project.description) ? (
                      <ul className="list-disc ml-5 mt-2 text-left text-sm">
                        {project.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-left text-sm">{project.description}</p>
                    )
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectsPage; 