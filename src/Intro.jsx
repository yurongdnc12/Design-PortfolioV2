import Thinking from './assets/Thinking.svg'

export default function Intro() {
    return (
        <div className="container mx-auto flex items-center py-20">
          {/* Image on the left */}
          <img src={Thinking} alt="Thinking" className="h-48 w-1/4" />
    
          {/* Text on the right */}
          <div className="w-2/3 px-8">
            <h2 className="text-4xl text-slate-800 font-semibold mb-4 text-left tracking-wide">Zheng Yurong</h2>
            <p className="text-lg  text-slate-500 text-left ">Product designer. Singapore</p>
          </div>
        </div>
      );

};

