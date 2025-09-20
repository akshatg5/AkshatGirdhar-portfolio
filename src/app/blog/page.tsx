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
    <div className="flex flex-col">
      <div className="mt-10 mb-12">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-2xl font-bold tracking-tighter"
          yOffset={8}
          text="blog"
        />
      </div>

      <div className="space-y-8">
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
                className="block group"
              >
                <article>
                  <h2 className="text-lg font-medium group-hover:text-muted-foreground transition-colors">
                    {post.metadata.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </article>
              </Link>
            </BlurFade>
          ))}
      </div>

      {posts.length === 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet.</p>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
