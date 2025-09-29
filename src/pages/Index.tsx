import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuctionGrid from "@/components/AuctionGrid";
import HowToParticipate from "@/components/HowToParticipate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AuctionGrid />
        <HowToParticipate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
