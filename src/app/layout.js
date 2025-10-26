import './globals.css'
import schema from './schema.json'

export const metadata = {
  title: 'Umana Builders LLC | Licensed Home Improvement & Commercial Contractor NJ',
  description: '30 years of reliable home improvement and commercial renovation services in Monmouth, Ocean, Bergen, and Essex Counties. NJ HIC# 13VH10301500. Kitchens, bathrooms, facades, and more.',
  keywords: 'home improvement contractor NJ, kitchen remodeling, bathroom renovation, facade repair, commercial renovation, property management contractor, New Jersey licensed contractor',
  openGraph: {
    title: 'Umana Builders LLC | Reliable NJ Contractor',
    description: '30 years of excellence in home improvement & commercial renovation',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
