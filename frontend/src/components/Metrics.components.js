import axios from 'axios'
import { useEffect , useState } from 'react'
const Metrics = ()=>{
    const [chotaURLcount, setChotaURLCount] = useState(-1)
    const [hostNames, setHostNames] = useState([''])

    const [pastebinCount, setPastebinCount] = useState(-1)
    useEffect(()=>{
        axios.get('http://localhost:5000/about/q/')
            .then(response => {
                setChotaURLCount(response.data.count)
                setHostNames(response.data.hostNames)
                return
            })
        axios.get('http://localhost:5000/about/p/')
            .then(response => {
                setPastebinCount(response.data.count)
                return
            })

    }, [])
    return (
        <>
        {
           (chotaURLcount >= 0 || pastebinCount >= 0) ? 
            <div className="flex flex-col lg:flex-row  justify-evenly items-center lg:h-4/6">
                <div className="flex flex-col w-full justify-evenly items-center h-full">
                    <span className ="shadow bg-gray-800 text-white w-11/12 lg:w-8/12 py-4 m-2 text-center rounded border-l-8 border-red-400">ChotaURL</span>
                    <p className="text-5xl bg-green-400 p-5 m-2 w-11/12 lg:w-8/12 rounded-xl text-white shadow-xl text-center">{chotaURLcount} entr{chotaURLcount === 1 ? 'y' : 'ies'}</p>
                    <div className= "h-48 lg:h-auto overflow-y-scroll m-1 w-11/12 lg:w-8/12 p-2 bg-green-800 text-center rounded-xl shadow-xl">
                        <span className="text-white text-2xl bg-yellow-600 p-4 rounded-xl flex flex-col justify-center items-center">{hostNames.length} domains</span>
                        {
                            
                            hostNames.map(curr =>
                                <span className="flex flex-row flex flex-row justify-left items-center p-1">
                                    <a href = {curr} className="text-white text-center hover:underline">{curr}</a>    
                                </span>
                            )
                        }
                    </div>
                </div>
                <div className = "flex flex-col w-full justify-evenly items-center">
                    <span className ="shadow bg-gray-800 text-white w-11/12 lg:w-8/12 py-4 m-2 text-center rounded border-l-8 border-red-400">Pastebin</span>
                    <p className="text-5xl bg-green-400 p-5 m-2 w-11/12 lg:w-8/12 rounded-xl text-white shadow-xl text-center">{pastebinCount} entr{pastebinCount === 1 ? 'y' : 'ies'}</p>
                </div>
            </div>
            :
            <div className="flex flex-col lg:flex-row h-4/6 justify-evenly items-center bg-indigo-100">
                <span className="p-5 m-3 bg-purple-400 text-white rounded-xl flex flex-row justify-center items-center" id="loading">
                    <img src="loading.png" alt="loading" className="animate-spin mx-5 w-10 h-10 p-3"></img>
                    Loading
                </span>
            </div>
        }
        </>
    )
}
export default Metrics