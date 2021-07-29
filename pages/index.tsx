import Head from "next/head";
import Image from "next/image";
import SearchForm from "../components/SearchForm";
import styles from "../styles/Home.module.css";
import { InputFile } from "../components/InputFile";

export default function Home() {
  function handleUpload() {}

  return (
    <div className={styles.container}>
      <Head>
        <title>E-Book Reader</title>
        <meta
          name="description"
          content="E-Book Reader for foreign language readers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my E-Book Reader</h1>

        <h1>Search</h1>
        <SearchForm />

        <h1>Or upload your own ebook to read:</h1>
        <InputFile
          input={{
            id: "input-control-id",
            onChange: handleUpload,
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
