import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.05;

export default function Resume() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-2">My Resume</h1>
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg">
        <BlurFade>
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
