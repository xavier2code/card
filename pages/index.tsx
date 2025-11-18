import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export interface CardData {
  id: string
  title: string
  description: string
  href: string
}

const cardsData: CardData[] = [
  {
    id: 'create',
    title: 'Create Cards',
    description: 'Create beautiful cards for any occasion',
    href: '/create',
  },
  {
    id: 'collections',
    title: 'Manage Collections',
    description: 'Organize your cards into collections',
    href: '/collections',
  },
  {
    id: 'share',
    title: 'Share',
    description: 'Share your creations with friends',
    href: '/share',
  },
  {
    id: 'templates',
    title: 'Templates',
    description: 'Use our premade templates',
    href: '/templates',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Cards App</title>
        <meta name="description" content="A simple cards application for creating and sharing beautiful cards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta property="og:title" content="Cards App" />
        <meta property="og:description" content="Create and share beautiful cards" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Cards</span>
          </h1>

          <p className={styles.description}>
            Get started by creating your first card collection
          </p>

          <div className={styles.grid}>
            {cardsData.map((card) => (
              <Link key={card.id} href={card.href} className={styles.card}>
                <h2>{card.title} →</h2>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}