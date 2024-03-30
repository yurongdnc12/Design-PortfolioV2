import { Link } from "react-router-dom"

const handleClick = (url) => {
    window.location.href=url;
};

export default function CaseStudyCard({data}){

    return(
            <div className="w-full lg:w-1/3 py-8 mr-8" onClick={()=> handleClick(data.readMoreLink)} style={{cursor:'pointer'}}>
                <div className="overflow-hidden text-left">
                    {/* Image */}
                    <div className="border-slate-200 rounded-md">
                        <img src={data.imageSrc} alt="Card Image" className="border rounded-lg w-full h-full object-cover" />
                    </div>
            
                    {/* Content */}
                    <div className="py-4">
            
                        {/* Case Study Title */}
                        <h2 className="text-slate-700 text-lg font-semibold mb-2">{data.casestudyTitle}</h2>
            
                        {/* Case Study Description */}
                        <p className="text-gray-500 mb-4">{data.description}</p>
                   
                            
                        <Link to = {data.readMoreLink}>
                        {/* Learn More Button */}
                        {data.readMoreLink && <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900">
                        Read More
                        </button>
}
                        </Link>
                    </div>
                </div>
            </div>
    
    );
}