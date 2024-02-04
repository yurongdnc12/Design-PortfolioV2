import CaseStudyCard from './CaseStudyCard';
import CompanyHeader from './CompanyHeader';
import caseStudies from './case_studies/govtech.json';

export default function Company(props){
    const { data } = props;
    // It's extracting the data property from the props object.
    
    const { duration,companyCaseStudies,casestudyDescription, casestudyFilePath } = data;

    // const caseStudies = require(caseStudyFilePath);
    // const caseStudies = [{ first }, {second case study}]. caseStudies now holds the contents of the JSON file located at the specified path. 
    // console.log(caseStudies)
    const caseStudiesCards = caseStudies.map((caseStudy)=>{
        // console.log({caseStudy})
        // console.log({imageSrc})
        return (<CaseStudyCard 
            key={caseStudy.id}
            data={caseStudy}
        />
    )});  

    // for each caseStudy
        // const { caseStudyField1, field2 } = caseStudy;
        // Render the info of caseStudy into caseStudyCard --> imgSrc, title, description...


return(
    <>
    <div className="mx-auto w-3/4 pt-32">
        <CompanyHeader 
            duration={duration}
            companyCaseStudies={companyCaseStudies}
            casestudyDescription={casestudyDescription} />
        
        <div className="flex flex-col sm:flex-row lg:flex-row">
            {caseStudiesCards}
        </div>
    </div> 
    </>
        
);
}

