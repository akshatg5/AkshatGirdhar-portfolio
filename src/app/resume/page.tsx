"use client";

import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume_AkshatGirdhar.pdf';
    link.download = 'Resume_AkshatGirdhar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-2">My Resume</h1>
      <div className="w-full max-w-3xl  p-8 rounded-lg">
        <BlurFade>
          <div className="flex justify-end mb-4">
            <button
              onClick={handleDownload}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Resume
            </button>
          </div>
          <iframe
            src="/Resume_AkshatGirdhar.pdf"
            className="w-full h-[800px]"
            title="Resume PDF"
          ></iframe>
        </BlurFade>
      </div>
    </div>
  );
}