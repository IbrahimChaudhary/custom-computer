import { Footer } from "@/components/footer";
import Nav from "@/components/nav";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
export default async function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex-col justify-center items-center">
      <Nav></Nav>
      <div className="w-full  flex flex-col justify-center items-center ">
        {children}
        <Footer></Footer>
      </div>
    </section>
  );
}
