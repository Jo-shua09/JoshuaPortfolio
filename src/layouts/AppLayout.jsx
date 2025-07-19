import Noise from "../components/animations/Noise";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/Navigation";
import Index from "../pages/Index";
import Portfolio from "../pages/Portfolio";

export default function AppLayout() {
  return (
    <div className="relative m-auto w-full max-w-[185rem]">
      {/* Background layer */}
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-neutral-950 -z-10">
        <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      {/* Content layer */}
      <div className="relative z-10 section-page">
        <Navigation />
        <Index />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
