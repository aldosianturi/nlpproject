import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      

      <main className="min-h-screen p-6">
        {children}
      </main>

      <Footer />
    </>
  );
}