import CaseStudyCard from './CaseStudyCard';
import CompanyHeader from './CompanyHeader';

export default function Company(props){
    const { data } = props;
    // It's extracting the data property from the props object.
    const { duration,companyCaseStudies,casestudyDescription, casestudyFilePath } = data;

    const caseStudies = require(caseStudyFilePath);
    // const caseStudies = [{ first }, {second case study}]. caseStudies now holds the contents of the JSON file located at the specified path. 

    const caseStudiesCards = caseStudies.map((caseStudy)=>(
        <CaseStudyCard key={caseStudy.id}
            data={caseStudy}
        />
    ));  

    // for each caseStudy
        // const { caseStudyField1, field2 } = caseStudy;
        // Render the info of caseStudy into caseStudyCard --> imgSrc, title, description...


return(
    <CompanyHeader
        duration={duration}
        companyCaseStudies={companyCaseStudies}
        casestudyDescription={casestudyDescription} />
        
);
}

