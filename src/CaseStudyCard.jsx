import { Link } from "react-router-dom"

export default function CaseStudyCard({imageSrc,casestudyTitle,description,readMoreLink}){
    return(
        <div className="container mx-auto w-3/4 flex">
            <div className="w-1/3 py-8 mr-8">
            <div className="rounded-lg overflow-hidden text-left">
            {/* Image */}
            <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover" />
    
            {/* Content */}
            <div className="py-4">
    
                {/* Case Study Title */}
                <h2 className="text-slate-800 text-2xl font-semibold mb-2">{casestudyTitle}</h2>
    
                {/* Case Study Description */}
                <p className="text-gray-700 mb-4">{description}</p>

                <Link to = {readMoreLink}>
                {/* Learn More Button */}
                <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900">
                Read More
                </button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    )
}