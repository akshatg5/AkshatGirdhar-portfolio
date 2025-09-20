import { getBlogPosts } from "@/data/blog";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.05;

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="mt-6 sm:mt-10 mb-6 sm:mb-8">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter"
          yOffset={8}
          text="blog"
        />
      </div>

      <div className="space-y-2 sm:space-y-4">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block group p-4 sm:p-6 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <article>
                  <h2 className="text-base sm:text-lg lg:text-xl font-medium group-hover:text-muted-foreground transition-colors leading-tight">
                    {post.metadata.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </article>
              </Link>
            </BlurFade>
          ))}
      </div>

      {posts.length === 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground text-sm sm:text-base">No blog posts yet.</p>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
