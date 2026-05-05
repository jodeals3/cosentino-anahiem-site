import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        background: scrolled ? "#0a0a0a" : "transparent",
        color: "white",
        zIndex: 1000,
        transition: "0.3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: "bold", letterSpacing: "1px" }}>
          COSENTINO
        </div>
        <div style={{ opacity: 0.7 }}>Anaheim</div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section
    style={{
      height: "100vh",
      background:
        "linear-gradient(to bottom, #111, #000)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      padding: "0 20px",
    }}
  >
    <div>
      <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
        Luxury Surfaces
      </h1>
      <p style={{ opacity: 0.7, fontSize: "18px" }}>
        Cosentino Center Anaheim
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          background: "white",
          color: "black",
          border: "none",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Visit Showroom <ArrowUpRight size={16} />
      </button>
    </div>
  </section>
);

const Section = ({ title, text }) => (
  <section
    style={{
      padding: "100px 20px",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>{title}</h2>
    <p style={{ opacity: 0.7, lineHeight: "1.6" }}>{text}</p>
  </section>
);

const Footer = () => (
  <footer
    style={{
      padding: "40px",
      background: "#0a0a0a",
      color: "white",
      textAlign: "center",
      fontSize: "14px",
      opacity: 0.6,
    }}
  >
    © {new Date().getFullYear()} Cosentino Anaheim
  </footer>
);

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Section
        title="Premium Materials"
        text="Explore Silestone®, Dekton®, and natural stone surfaces engineered for modern architecture and luxury interiors."
      />
      <Section
        title="Design Experience"
        text="Work directly with specialists to curate slabs, finishes, and layouts tailored to your project."
      />
      <Section
        title="Visit Us"
        text="611 E Cerritos Ave, Anaheim, CA — Book a private viewing today."
      />
      <Footer />
    </>
  );
}
