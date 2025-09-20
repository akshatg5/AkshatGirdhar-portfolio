import { getBlogPosts, getPost } from "@/data/blog";
import { globalComponents } from "@/components/mdx";
import { formatDate } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const BLUR_FADE_DELAY = 0.05;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `https://akshatgirdhar.vercel.app${image}`
    : `https://akshatgirdhar.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://akshatgirdhar.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post;

  try {
    post = await getPost(params.slug);
  } catch (error) {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-[100dvh] space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
      </BlurFade>

      <div className="space-y-2">
        <div className="space-y-2">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-3xl font-bold tracking-tighter"
            yOffset={8}
            text={post.metadata.title}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
            <p className="text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </BlurFade>
        </div>
        {post.metadata.summary && (
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-lg text-muted-foreground">
              {post.metadata.summary}
            </p>
          </BlurFade>
        )}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.source }} />
        </article>
      </BlurFade>
    </div>
  );
}
