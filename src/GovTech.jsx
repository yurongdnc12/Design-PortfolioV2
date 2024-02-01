import CaseStudyCard from './CaseStudyCard';
import CompanyHeader from './CompanyHeader';

export default function GovTech(){
    
    return(
    <><CompanyHeader 
        duration="2020 - Present"
        companyCaseStudies="GovTech Case Studies"
        casestudyDescription="Disclaimer much"
        />

       <CaseStudyCard 
        imageSrc="src/assets/GovTech work.png"
        casestudyTitle="Singpass app 2.0"
        description="Redesign dope af" 
        readMoreLink="/GovTech/Shortcuts"
        />
    </>
    );
}