import Thinking from './assets/Thinking.svg'

export default function Intro() {
    return (
        <div className="container mx-auto w-2/3 flex flex-col pt-40 pb-8 items-start lg:flex-row lg:items-center ">
          {/* Image on the left */}
          {/* <img src={Thinking} alt="Thinking" className="h-48 w-1/2 lg:w-1/4" /> */}
    
          {/* Text on the right */}
          <div className="w-full">
            <h2 className="lg:text-5xl text-3xl text-slate-800 font-semibold lg:mb-4 mb-1 text-left tracking-wide">Zheng Yurong</h2>
            <p className="lg:text-2xl text-lg text-slate-500 text-left pt-2 font-light">Product designer in Singapore. I enjoy crafting interfaces and interactions that are effective and enjoyable to use.</p>
          </div>
        </div>
      );

};

