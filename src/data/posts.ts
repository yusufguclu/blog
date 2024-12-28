import { BlogPost } from '@/types/blog';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js ile Modern Web Geliştirme',
    excerpt: 'Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Bu yazıda Next.js\'in temel özelliklerini inceliyoruz.',
    content: `
# Next.js ile Modern Web Geliştirme

Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Server-side rendering, statik site generation, API routes gibi özellikleri ile modern web uygulamaları geliştirmeyi kolaylaştırıyor.

## Temel Özellikler

### 1. Server-side Rendering (SSR)
Next.js, sayfalarınızı sunucu tarafında render ederek daha iyi SEO ve performans sağlar.

### 2. Static Site Generation (SSG)
Statik sayfalar oluşturarak hosting maliyetlerini düşürür ve yüksek performans sunar.

### 3. API Routes
Backend API'lerinizi doğrudan Next.js uygulamanızın içinde yazabilirsiniz.

## Kod Örneği

\`\`\`javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Merhaba Next.js!</h1>
    </div>
  )
}
\`\`\`

## Sonuç

Next.js, modern web uygulamaları geliştirmek için harika bir seçenek. Hem developer experience hem de end-user experience açısından mükemmel özellikler sunuyor.
    `,
    date: '2024-01-20',
    author: 'Yusuf Güçlü',
    slug: 'nextjs-ile-modern-web-gelistirme',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'TypeScript ile Güvenli Kod Yazımı',
    excerpt: 'TypeScript, JavaScript\'e tip güvenliği ekleyerek daha güvenilir uygulamalar geliştirmemizi sağlıyor.',
    content: `
# TypeScript ile Güvenli Kod Yazımı

TypeScript, Microsoft tarafından geliştirilen ve JavaScript'e tip güvenliği ekleyen bir programlama dili. Interface'ler, generic tipler ve daha birçok özellik ile kod kalitesini artırıyor.

## Neden TypeScript?

- **Tip Güvenliği**: Hataları daha geliştirme aşamasında yakalayın
- **Daha İyi IDE Desteği**: Kod tamamlama ve refactoring özellikleri
- **Daha Okunabilir Kod**: Tip tanımlamaları ile self-documenting kod

## Örnek Kod

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json());
}
\`\`\`

## Best Practices

1. Her zaman tip tanımlamalarını kullanın
2. \`any\` tipinden kaçının
3. Interface'leri akıllıca kullanın

TypeScript, büyük projelerde kod kalitesini ve maintainability'yi önemli ölçüde artırıyor.
    `,
    date: '2024-01-18',
    author: 'Yusuf Güçlü',
    slug: 'typescript-ile-guvenli-kod-yazimi',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  }
]; 