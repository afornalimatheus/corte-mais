import * as React from "react";
import styles from './index.module.css';

export const siteTitle = 'CorteMais'

const container = {
    maxWidth: "36rem",
    padding: "0 1rem",
    margin: "3rem auto 6rem",
}
  
const header = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}
  
const backToHome = {
    margin: "3rem 0 0",
}

export default function Layout() {
  return (
    <div className={container}>
        <head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </head>
        <header className={header}>
            <h1>TESTE</h1>
        </header>
        <main>
            <h2>teste 2</h2>
        </main>
    </div>
  )
}
