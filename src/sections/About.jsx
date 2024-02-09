import Title from "components/Title";

function About() {
  return (
    <section className="  bg-about pt-8 pb-16">
      <div className="container-wrapper text-center block ">
        <div>
          <h1 className=" txt-s font-potta text-2xl sm:text-[45px] uppercase">ABOUT Grecko</h1>
          <div className=" hidden sm:flex flex-col sm:flex-row gap-4 items-center mt-5 justify-center">
          <button className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-1 pb-1 ">
           Telegram
         </button>
         <button className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-1 pb-1 ">
           Twitter
         </button>
          </div>
          <p className=" font-potta text-center text-base sm:text-[30px] max-w-5xl mx-auto lh-1_8 pt-3 sm:px-0 px-2">
          The ERC404 standard's Hybrid Asset Protocol (HAP) a dual capabilities by merging the liquidity and fungibility of ERC20 tokens with the uniqueness and collectibility of ERC721 NFTs. With a pioneering collection of 10,000 "Guardians," Greko leverages the ERC404 standard, an avant-garde blend of the ERC20 and ERC721 standards, to bridge the gap between fungible liquidity and non-fungible uniqueness.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
