import { useState, useEffect } from "react";

function Nav() {
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
        padding: "20px",
        background: scrolled ? "white" : "transparent",
        transition: "0.3s",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Cosentino Anaheim</strong>
        <a href="#visit">Book Visit</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "60px",
        background: "#111",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "48px" }}>
          Luxury Stone Showroom
        </h1>
        <p style={{ maxWidth: "400px", opacity: 0.8 }}>
          Premium surfaces for architects, designers, and homeowners.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 18px",
            background: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
          }}
        >
          Explore Materials
        </button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />

      <section style={{ padding: "80px" }}>
        <h2>Site is working 🚀</h2>
        <p>This confirms your deployment is correct.</p>
      </section>
    </main>
  );
}
