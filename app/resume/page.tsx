export default function Resume() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">My Resume</h1>
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg">
          <iframe
            src="/path-to-your-resume.pdf"
            className="w-full h-[800px]"
            title="Resume PDF"
          >
            <p>Your browser doesn't support iframes. You can <a href="/path-to-your-resume.pdf">download the PDF</a> instead.</p>
          </iframe>
        </div>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
    )
  }