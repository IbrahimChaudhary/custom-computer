import { Footer } from "@/components/footer";
import Nav from "@/components/nav";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </section>
  );
}
