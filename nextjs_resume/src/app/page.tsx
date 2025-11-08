import Link from 'next/link';
import { positionConfigs } from './data/sample-resume';

export default function Home() {
  const positions = Object.keys(positionConfigs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Resume Generator
          </h1>
          <p className="text-xl text-gray-600">
            Select a position to view the customized resume
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <i className="fas fa-info-circle mr-2"></i>
            Built with Next.js, TypeScript, and Tailwind CSS
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position) => {
            const config = positionConfigs[position as keyof typeof positionConfigs];
            return (
              <Link 
                key={position}
                href={`/${position}`}
                className="group block p-8 bg-white rounded-xl shadow-md hover:shadow-xl 
                           transition-all duration-300 border-2 border-transparent 
                           hover:border-blue-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 
                                 transition-colors">
                    {config.title}
                  </h2>
                  <i className="fas fa-file-alt text-3xl text-blue-500 
                                group-hover:scale-110 transition-transform"></i>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {config.summary}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>View Resume</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 
                                transition-transform"></i>
                </div>
              </Link>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
          <p className="mt-4 text-sm">
            Learning HTML, React, and Next.js through building a resume generator
          </p>
        </footer>
      </div>
    </div>
  );
}
