import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PROVOLTA & TEAM SERVICE | Полный цикл услуг с автомобилем',
  description: 'Полный цикл услуг с автомобилем: от покупки до эксплуатации. Всё под ключ. Один центр. Одна команда. Полная ответственность.',
  keywords: 'импорт авто, русификация, доработка авто, ТО, ремонт, гарантия, комиссионная продажа',
  openGraph: {
    title: 'PROVOLTA & TEAM SERVICE | Полный цикл услуг с автомобилем',
    description: 'Всё под ключ. Один центр. Одна команда. Полная ответственность.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PROVOLTA & TEAM SERVICE',
              description: 'Полный цикл услуг с автомобилем: от покупки до эксплуатации',
              url: 'https://provolta-service.ru',
            }),
          }}
        />
      </head>
      <body className="antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}


