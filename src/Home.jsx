import Intro from './Intro'
import CardComponent from './CardComponent'


export default function Home(){
 
    return(
    <>
    <Intro />
        <div className="container mx-auto w-3/4 flex">
            {/* Two cards, each taking up 1 out of 2 columns */}
            <CardComponent
                imageSrc="src/assets/GovTech work.png"
                date="2020 - Present"
                companyTitle="Government Technology Agency (GovTech)"
                description="Craft product experiences citizens interact with and make digital identity accessible for all." 
                readMoreLink="/govtech"
            />

            <CardComponent
                imageSrc="src/assets/LiveMore work.png"
                date="Dec 2019 - Oct 2020"
                companyTitle="LiveMore"
                description="Design mobile and web experiences to captivate new users and maintain brand consistency." 
                readMoreLink="/livemore"
            />
        </div>
    </>
    );
}