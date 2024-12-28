import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const dynamic = 'force-static';
export const revalidate = 3600; // her saat başı yeniden oluştur

export default async function Home() {
  const posts = await Promise.resolve(getAllPosts());

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 text-white">Yusuf Güçlü</h1>
          <p className="text-gray-400 text-lg mb-4">İçerik Üretici, Girişimci</p>
          <div className="flex items-center justify-center space-x-4">
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
        </div>

        <h2 className="text-4xl font-bold mb-8 text-white">Blog Yazılarım</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <Link href={`/post/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap justify-between items-center text-sm">
                  <span className="text-blue-400 font-medium">{post.author}</span>
                  <time dateTime={post.date} suppressHydrationWarning className="text-gray-400">
                    {post.date}
                  </time>
                </div>
                {post.tags && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
