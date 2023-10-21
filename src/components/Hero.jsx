
function Hero() {
  const isDarkMode = true;

  return (
    <section id="hero">
      <h2>assalamualaikum Welcome to my React app!</h2>
      {isDarkMode && <p>This is dark mode.</p>}
    </section>
  );
}

export default Hero;
