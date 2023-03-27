import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import ApolloClientPy from "../../apollo-client"
import { gql } from '@apollo/client'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const { data } = await ApolloClientPy.query({
    query: gql`
      query {
        version
      }
    `
  });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Image
          className={styles.logo}
          src="/graphql.svg"
          alt="Python Logo"
          width={100}
          height={100}
          priority
        />

        <Image
          className={styles.logo}
          src="/fastapi.svg"
          alt="Python Logo"
          width={100}
          height={100}
          priority
        />
      </div>
        <p>Nextjs + GraphQL + FastAPI</p>
      <div>
        <h1>{data.version}</h1>
      </div>
    </main >
  )
}
