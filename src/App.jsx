import Fifth from "./sections/Fifth";
import First from "./sections/First";
import Footer from "./sections/Footer";
import Fourth from "./sections/Fourth";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Second from "./sections/Second";
import Third from "./sections/Third";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col font-Barlow">
      <Header />
      <Hero />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </main>
  );
}

export default App;
