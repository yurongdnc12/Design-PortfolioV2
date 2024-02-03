export default function Textblock({header,description}){
        return(
             <><h2 className="text-slate-800 text-2xl font-semibold mb-2">{header}</h2>
             <p className="text-gray-700 mb-4">{description}</p></>
        );
}