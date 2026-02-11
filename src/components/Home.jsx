import Navbar from './Navbar';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
