import { Link } from 'react-router-dom'
import Reading from './assets/Reading.svg'
import Dance from './assets/Dance.jpeg'
import Bookclub2 from './assets/Book club 2.png'
import Bookclub1 from './assets/Book club 1.png'
import Gym from './assets/Gym.png'
import CardComponent from './CardComponent'

export default function About(){
    return(
        
        <div className="container mx-auto w-3/4 lg:w-2/3 pt-32 flex flex-col items-start py-20">
             {/*Intro*/}
            <div className="mb-12">
                <img src={Reading} alt="Reading" className="h-44 mb-8" />
                <p className="text-lg  text-slate-500 text-left">Hi! I am Yurong 👋 I enjoy learning and growing, at work and outside of work.
                <br></br>Coming from an engineering background also motivates me to stay curious about anything I have not learnt about design. </p>
            </div>


             {/* When I am not working */}
            <div className="mb-12">
                <h2 className="text-2xl text-slate-800 font-semibold mb-4 text-left">When I am not working...</h2>  

                    {/* Image + text width 1/3 container*/}
                <div className="container flex flex-col sm:flex-row lg:flex-row">
                    <div className="flex flex-col pb-6 w-full lg:w-1/3 mr-8">
                        <p className="text-lg  text-slate-500 text-left pb-4">I enjoy hip-hop dance, I join dance battles occasionally to feel competitive once in a while</p>
                        <img src={Dance} alt="Dance" className="w-64 object-cover rounded-md" />                        
                    </div>

                    <div className="flex flex-col pb-6 w-full lg:w-1/3 mr-8">
                        <p className="text-lg  text-slate-500 text-left pb-4">I read, and I share about what I read at <a href="https://www.instagram.com/thesaturdaybookclub/?hl=en" className='underline underline-offset-4'>The Saturday Book Club</a></p>
                        <div className="flex">
                            <img src={Bookclub1} alt="The Saturday Book Club 1" className="w-1/2 object-cover mr-4 rounded-md overflow-hidden" />                        
                            <img src={Bookclub2} alt="The Saturday Book Club 2" className="w-1/2 object-cover rounded-md overflow-hidden" />                        
                        </div>
                    </div>

                    <div className="flex flex-col pb-6 w-full lg:w-1/3 mr-8">
                        <p className="text-lg  text-slate-500 text-left pb-4">I do calisthenics and go to the gym. I am working towards getting a pull-up!</p>
                        <img src={Gym} alt="Gym" className="w-40 object-cover rounded-md" />                           
                    </div>
                </div>
            </div>
            
            {/* Previous portfolios */}
            <div className="mb-12">
                <h2 className="text-2xl text-slate-800 font-semibold mb-4 text-left">Previous version(s) of my portfolio</h2>  
                <p className="text-lg  text-slate-500 text-left">Over the past few years, I have been challenging myself to build my own website - firstly, to save money and avoid subscribing website providers, and secondly, to challenge myself and pick up frontend development skills. This website will always be evolving because there is always so much to learn and my learning speed can't keep up with how fast technology evolves. 
                Here's the previous version(s) of my portfolio. </p>

                <div className="container mx-auto flex flex-col sm:flex-row lg:flex-row">
            {/* Two cards, each taking up 1 out of 2 columns */}
                <CardComponent
                    imageSrc="src/assets/Previous_portfolio_V1.png"
                    date="2021-2023"
                    companyTitle="V1.0"
                    description="Using HTML and CSS" 
                    readMoreLink="/govtech"
                    buttonText="Check it out"
                />

                <CardComponent
                    imageSrc="src/assets/Notion_portfolio.png"
                    date="2019-2021"
                    companyTitle="MVP"
                    description="Using Notion because efficiency is 👑" 
                    readMoreLink="/livemore"
                    buttonText="Check it out"
                />
        </div>
            </div>         

                    
        </div>
    )
};