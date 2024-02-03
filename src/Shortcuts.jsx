import CaseStudyHeader from "./CaseStudyHeader";
import Textblock from "./Textblock";

export default function Shortcuts(){
    return(
       <div className="container mx-auto w-3/4 flex flex-col text-left items-start pt-20">
        {/* Header */}
            <CaseStudyHeader 
            duration = "Mar - Jul 2021"
            casestudyTitle = "Scaling up Singpass app shortcuts"
            casestudyDescription = "Disclaimer"
            />

            <Textblock 
            header = "Overview"
            description = "Currently, the Singpass app only supports logging in to about 10 government agency services. As our user base continues to grow (3+ mil), there is more value in onboarding more government services onto Singpass app."
            />

        </div>
    );
}