import CaseStudyCard from './CaseStudyCard';
import CompanyHeader from './CompanyHeader';

export default function LiveMore(){
    
    return(
    <><CompanyHeader 
        duration="Dec 2019 - Oct 2020"
        companyCaseStudies="LiveMore Case Studies"
        casestudyDescription="Disclaimer much"
        />

       <CaseStudyCard 
        imageSrc="src/assets/GovTech work.png"
        casestudyTitle="Singpass app 2.0"
        description="Redesign dope af" 
        readMoreLink="/LiveMore/Shortcuts"
        />
    </>
    );
}