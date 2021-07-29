import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyles, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyles, // Styles for the epub-reader it you need to customize it
} from "react-reader";

export default function EpubReader() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {" "}
      <ReactReader
        url={"/alice.epub"}
        title={"Alice in wonderland"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
}
