'use client';

import Link from 'next/link';

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navigation - Hidden when printing */}
      <nav className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg 
                     hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <i className="fas fa-print"></i>
          Print Resume
        </button>
      </nav>

      <nav className="no-print fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg 
                     hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </nav>

      {/* Main resume content */}
      {children}
    </>
  );
}

