export default function CaseStudyContent(){
    return(
       <div className="container mx-auto w-3/4 flex flex-col items-start pt-20">
        <p className="text-slate-500 font-mono mb-4">{duration}</p>

        {/* Case Study Title */}
        <h2 className="text-slate-800 text-4xl font-semibold mb-4">{casestudyTitle}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">{casestudyDescription}</p>

    </div>
    );
}