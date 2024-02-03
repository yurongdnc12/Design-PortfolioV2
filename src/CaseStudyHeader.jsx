export default function CaseStudyHeader({duration,casestudyTitle,casestudyDescription}){
    return(
        <><p className="text-slate-500 font-mono mb-4">{duration}</p>
        <h2 className="text-slate-800 text-4xl font-semibold mb-4">{casestudyTitle}</h2>
        <p className="text-gray-700 mb-4">{casestudyDescription}</p>
        </>
    );
}