import Intro from './Intro'
import CardComponent from './CardComponent'

export default function Home(){
 
    return(
    <>
    <Intro />
        <div className="container mx-auto w-2/3 flex flex-col sm:flex-row lg:flex-row">
            {/* Two cards, each taking up 1 out of 2 columns */}
                <CardComponent
                    imageSrc="src/assets/GovTech_work.png"
                    date="2020 - Present"
                    companyTitle="Government Technology Agency (GovTech)"
                    description="Craft product experiences citizens interact with and make digital identity accessible for all." 
                    readMoreLink="/govtech"
                    buttonText="View case studies"
                />

                <CardComponent
                    imageSrc="src/assets/LiveMore_work.png"
                    date="Dec 2019 - Oct 2020"
                    companyTitle="LiveMore"
                    description="Design mobile and web experiences to captivate new users and maintain brand consistency." 
                    readMoreLink="/livemore"
                    buttonText="View case studies"
                />
        </div>
    </>
    );
}