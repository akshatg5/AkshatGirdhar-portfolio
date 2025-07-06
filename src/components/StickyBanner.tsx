import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg px-0 py-1">
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-center text-base sm:text-lg mb-0">
        Announcing $10M seed funding from project mayhem ventures.{" "}
        <a href="#" className="transition duration-200 hover:underline font-semibold">
          Read announcement
        </a>
      </p>
    </StickyBanner>
  );
}