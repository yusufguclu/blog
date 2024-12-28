import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '@/lib/posts';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await Promise.resolve(getPostBySlug(resolvedParams.slug));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Ana Sayfaya Dön
          </Link>
          <a 
            href="https://www.instagram.com/yusuf_gclu_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
        
        <article className="bg-gray-800/50 backdrop-blur rounded-xl p-8 border border-gray-700">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            
            <div className="flex justify-between items-center text-sm pb-6 border-b border-gray-700">
              <span className="text-blue-400 font-medium">{post.author}</span>
              <time dateTime={post.date} suppressHydrationWarning className="text-gray-400">
                {post.date}
              </time>
            </div>

            {post.tags && (
              <div className="flex gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none prose-invert prose-p:text-gray-300 prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white prose-code:text-blue-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
} 