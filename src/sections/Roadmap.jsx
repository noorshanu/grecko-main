import Title from "components/Title";



function Roadmap() {
  return (
    <section className="relative z-10 ">
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000] mb-10 pt-8 text-2xl sm:text-[45px] txt-s">GARBAGE STORY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-5 sm:px-0 px-4">
        <img src="images/st-1.png" alt="" className="w-full h-full" />
        <img src="images/st-2.png" alt="" className="w-full h-full mt-0 sm:mt-5" />
        <img src="images/st-3.png" alt="" className="w-full h-full" />

        
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-5 mt-4 sm:mt-14 sm:px-0 px-4">
        <img src="images/st-4.png" alt="" className="w-full h-full" />
        <img src="images/st-5.png" alt="" className="w-full h-full mt-0 sm:mt-24" />
        <img src="images/st-6.png" alt="" className="w-full h-full" />

        
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
