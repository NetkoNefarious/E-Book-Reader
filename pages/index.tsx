import Head from "next/head";
import SearchForm from "../components/SearchForm";
import styles from "../styles/Home.module.css";
import { InputFile } from "../components/InputFile";
import { useState } from "react";
import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyles, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyles, // Styles for the epub-reader it you need to customize it
} from "react-reader";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function Home() {
  const [bookPath, setBookPath] = useState("");

  async function handleUpload(event: React.FormEvent<HTMLInputElement>) {
    const formData = new FormData();

    if (event.currentTarget.files && event.currentTarget.files[0]) {
      formData.append("file", event.currentTarget.files[0]);
    }

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      setBookPath((await res.json()).files.file.path);
    });
  }

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
        {bookPath ? (
          <>
            {" "}
            <ReactReader
              url={bookPath}
              location={"epubcfi(/6/2[cover]!/6)"}
              locationChanged={(epubcifi) => console.log(epubcifi)}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
}
