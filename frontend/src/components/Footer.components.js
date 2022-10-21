import  { Link } from 'react-router-dom'
const Footer = ()=>{
    return (
        <footer className="text-sm bg-indigo-500 p-0.5 flex flex-col justify-evenly items-center lg:flex-row">
            <div className="flex flex-row m-5">
                <Link to='/'>
                    <span className="m-2 p-2 bg-indigo-500 hover:bg-gray-800 font-bold text-white rounded underline">ChotaURL</span>
                </Link>
                <Link to='/Pastebin'>
                    <span className="m-2 p-2 bg-indigo-500 hover:bg-gray-800 font-bold text-white rounded underline">Pastebin</span>
                </Link>
                <Link to='/metrics'>
                    <span className="m-2 p-2 bg-indigo-500 hover:bg-gray-800 font-bold text-white rounded-sm underline">Metrics</span>
                </Link>
                
            </div>
        </footer>
    );
}

export default Footer;