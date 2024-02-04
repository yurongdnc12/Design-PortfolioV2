import Thinking from './assets/Thinking.svg'

export default function Intro() {
    return (
        <div className="container mx-auto w-3/4 flex flex-col pt-32 pb-8 items-start lg:flex-row lg:items-center ">
          {/* Image on the left */}
          <img src={Thinking} alt="Thinking" className="h-48 w-1/2 lg:w-1/4" />
    
          {/* Text on the right */}
          <div className="w-full lg:w-2/3 lg:pl-8">
            <h2 className="lg:text-4xl text-3xl text-slate-800 font-semibold lg:mb-4 mb-1 text-left tracking-wide">Zheng Yurong</h2>
            <p className="lg:text-lg text-md text-slate-500 text-left ">Product designer. Singapore</p>
          </div>
        </div>
      );

};

