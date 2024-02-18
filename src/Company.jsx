import CaseStudyCard from './CaseStudyCard';
import CompanyHeader from './CompanyHeader';
import TimeInCompany from './TimeInCompany';

export default function Company(props){
    const { data } = props;
    // It's extracting the data property from the props object.
    const { duration,companyCaseStudies,casestudyDescription } = data;

    // const caseStudies = require(caseStudyFilePath);
    // const caseStudies = [{ first }, {second case study}]. caseStudies now holds the contents of the JSON file located at the specified path. 
    // console.log(caseStudies)

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


        {/* <!-- Vertical Timeline #1 --> */}
                    <div className="-my-6">
                        {/* <!-- Item #1 --> */}
                        <TimeInCompany 
                        date="2023"
                        header="Led various design projects alone and as a project team"
                        description="Following a department reorganization, I spearheaded Authentication design initiatives independently. This involved conducting user research, facilitating product discussions, and collaborating with stakeholders to make informed decisions."
                        />
                        
                        {/* <!-- Item #2 --> */}
                        <TimeInCompany 
                        date="2022"
                        header="Adapted and worked closely with the new design team"
                        description="The previous design team left. I was working on Singpass app features alone, before assisting in interviewing and hiring 3 more designers to the team. A year of adapting to change, and creating different team and design processes."
                        />
                        
                        {/* <!-- Item #3 --> */}
                        <TimeInCompany 
                        date="2021"
                        header="Collaborated with a wonderful design team"
                        description="Transited from moving alone at my first job to working with a fantastic team of designers and researchers with varying experience levels. The team has already been formed before I joined, I enjoyed learning from the way they worked, articulated their thoughts clearly and planned design and research projects with great intent."
                        />
                    </div>
    </div> 
    </>
        
);
}

