import React from 'react';
import { Container } from '../ui/Container';

interface IntroSectionProps {
  title?: string;
  bgImageUrl: string;
}

export default function IntroSection({ 
  title, 
  bgImageUrl 
}: IntroSectionProps) {
  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Container className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h2 className="text-white font-bold leading-none mb-3 [text-shadow:0_0_10px_black,0_0_10px_black] text-[clamp(2rem,5vw,5rem)]">
            {title}
          </h2>
        </div>
      </Container>
    </section>
  );
}