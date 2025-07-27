import { HeroContent } from './_atoms/HeroContent'
import { HeroLogos } from './_atoms/HeroLogos'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[64%] from-[#E7F4EB] to-[#E7F4EB00] flex flex-col py-22 space-y-16">
      <div className="flex-1 flex justify-center pt-14 wrapper w-full">
        <HeroContent />
      </div>
      <HeroLogos />
    </section>
  )
}
