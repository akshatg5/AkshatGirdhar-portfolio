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
  
  // Use the correct domain and ensure OG image works
  const baseUrl = "https://www.akshatgirdhar.com";
  const ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/PortfolioOg.png`; // Use the existing portfolio OG image as fallback

  return {
    title: `${title} | Akshat Girdhar`,
    description,
    authors: [{ name: "Akshat Girdhar" }],
    creator: "Akshat Girdhar",
    publisher: "Akshat Girdhar",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      authors: ["Akshat Girdhar"],
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: "Akshat Girdhar",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@AkshatGirdhar2",
      site: "https://akshatgirdhar.com",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
    <div className="flex flex-col min-h-[100dvh] space-y-6 sm:space-y-8 px-4 sm:px-6 max-w-4xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 sm:mt-6"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          Back to blog
        </Link>
      </BlurFade>

      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-2 sm:space-y-3">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tighter leading-tight"
            yOffset={8}
            text={post.metadata.title}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </BlurFade>
        </div>
        {post.metadata.summary && (
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {post.metadata.summary}
            </p>
          </BlurFade>
        )}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <article className="prose prose-neutral dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:leading-tight prose-p:leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.source }} />
        </article>
      </BlurFade>
    </div>
  );
}
