import BackgroundAnimation from './BackgroundAnimation';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <BackgroundAnimation />
      <div className="container mx-auto px-6 py-32 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
}