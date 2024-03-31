export default function CompanyHeader({duration,companyCaseStudies,casestudyDescription}){
    return(
    <div className="text-left">
        <p className="text-slate-500 font-mono mb-4">{duration}</p>

        {/* XX Company Case Studies */}
        <h2 className="text-slate-800 text-4xl font-semibold mb-12">{companyCaseStudies}</h2>

        {/* Description */}
        {/* <p className="text-slate-700 mb-8">{casestudyDescription}</p> */}
    </div>
    );
}