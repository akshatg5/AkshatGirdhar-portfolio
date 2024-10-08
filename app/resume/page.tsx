import Link from "next/link";

export default function Resume() {
    return (
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold my-8">My Resume</h1>
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg">
          <iframe
            src="/Resume_AkshatGirdhar.pdf"
            className="w-full h-[800px]"
            title="Resume PDF"
          >
            </iframe>
        </div>
        <div>
          </div>
      </div>
    )
  }
