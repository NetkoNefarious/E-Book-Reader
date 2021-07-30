import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
