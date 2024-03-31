import { Link } from 'react-router-dom'

const handleClick = (url) => {
  window.location.href=url;
};

export default function CardComponent({ imageSrc, date, companyTitle, description, readMoreLink, buttonText}){
  
    return (
        <div className="w-full lg:w-1/2 py-8 mr-8" onClick={()=> handleClick(readMoreLink)} style={{cursor:'pointer'}}>
          <div className="rounded-lg overflow-hidden text-left">
            {/* Image */}
            <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover rounded-lg hover:opacity-90 hover:scale-105 transition duration-300"/>
    
            {/* Content */}
            <div className="py-4">
              {/* Date */}
              <p className="text-slate-500 text-sm font-mono mb-1">{date}</p>
    
              {/* Company Title */}
              <h2 className="text-slate-800 text-xl font-semibold mb-2">{companyTitle}</h2>
    
              {/* Description */}
              <p className="text-slate-500 mb-4">{description}</p>

              <Link to = {readMoreLink}>
              {/* Learn More Button */}
                <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900">
                {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
}