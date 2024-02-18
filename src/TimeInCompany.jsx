import caseStudies from './case_studies/govtech.json';
import CaseStudyCard from './CaseStudyCard';

export default function TimeInCompany({date,header,description}){
    // Method 1:
    // Loop through the caseStudies
    // Run a filter to check the date
    // Matches add into the respective year variable
    // Loop through it and display the card

    const caseStudiesCards = caseStudies
    .filter(caseStudy => caseStudy.year === date) // Filtering based on the year condition
    .map(caseStudy => (
      <CaseStudyCard 
        key={caseStudy.id}
        data={caseStudy}
      />
    ));

    return(
        <>
        {/* <!-- Item #1 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group w-11/12">
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-16 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{date}</time>
                    <div className="text-xl font-bold text-slate-800">{header}</div>
                </div>

            {/* <!-- Content --> */}
                <div className="text-slate-500 text-left">{description}</div>
                <div className="flex flex-col sm:flex-row lg:flex-row">
                    {caseStudiesCards}
                </div>
            </div>
        </>
    );

}