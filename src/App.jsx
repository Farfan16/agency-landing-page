import First from "./sections/First";
import Fourth from "./sections/Fourth";
import Hero from "./sections/Hero";
import Second from "./sections/Second";
import Third from "./sections/Third";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col font-Barlow">
      <Hero />
      <First />
      <Second />
      <Third />
      <Fourth />
    </main>
  );
}

export default App;
