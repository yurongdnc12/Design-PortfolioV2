import { Link } from 'react-router-dom'

export default function CardComponent({ imageSrc, date, companyTitle, description, readMoreLink, buttonText}){
  
    return (
        <div className="w-full lg:w-1/2 py-8 mr-8">
          <div className="rounded-lg overflow-hidden text-left">
            {/* Image */}
            <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover border-slate-200 border-2 rounded-lg" />
    
            {/* Content */}
            <div className="py-4">
              {/* Date */}
              <p className="text-slate-500 font-mono mb-1">{date}</p>
    
              {/* Company Title */}
              <h2 className="text-slate-800 text-2xl font-semibold mb-2">{companyTitle}</h2>
    
              {/* Description */}
              <p className="text-slate-700 mb-4">{description}</p>

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