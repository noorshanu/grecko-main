import Title from "components/Title";

function About() {
  return (
    <section className=" relative bg-[#FFFFFFC7] pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10">
        <div>
          <h1 className=" txt-s font-potta text-2xl sm:text-[45px]">ABOUT GARBAGE</h1>
          <p className=" font-potta text-center text-lg sm:text-[30px] max-w-5xl mx-auto lh-1_8 pt-6">
            Once upon a crypto-calamity, <br /> a man (james Howells) nonchalantly
            tossed <br /> 16,000 Bitcoins into the garbage, deeming them worthless.
            Little did he know, his trash became a treasure as those discarded
            Bitcoins now sparkle with a value in the millions. Moral of the
            story: Never underestimate the magic of crypto dust!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
