import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dinPro = localFont({
  src: [
    { path: '../shrifts/DINPro-Medium.ttf', weight: '500' },
    { path: '../shrifts/DINPro-Bold.ttf', weight: '700' },
    { path: '../shrifts/DINPro-Black.ttf', weight: '900' },
  ],
  variable: '--font-din',
  display: 'swap',
})

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
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PROVOLTA & TEAM SERVICE',
              description: 'Полный цикл услуг с автомобилем: от покупки до эксплуатации',
              url: 'https://provolta-service.ru',
              telephone: '+7 (964) 342-16-44',
              email: 'sales@teamserviceprovolta.ru',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Санкт-Петербург',
                streetAddress: 'ул. Парашютная, 51, стр. 1, секция А6',
              },
            }),
          }}
        />
      </head>
      <body className={`${dinPro.variable} font-sans antialiased bg-neutral-50 text-neutral-900`} style={{ position: 'relative' }}>
        {children}
      </body>
    </html>
  )
}



