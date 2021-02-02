import React,{useState} from 'react'
import { Link } from "react-router-dom"


function Nav() {
    const [isPop, setPop] = useState(false)

    const navName = [
        { nom: "Water", link:"/water" },
        { nom: "Wallpaper", link:"/wallpaper" },
        { nom: "Nature", link:"/nature" },
        { nom: "People", link:"/people" },   
    ]

    const show = () => {
        setPop(true)
    }
    
    const hide = () => {
        setPop(false)
    }
    
    return (
        <nav className="mt-2.5 ml-4 overflow-x-auto p-4 pb-6">
            {navName.map((navElement) => {
                return (
                    <Link to={navElement.link} className={`bg-red-200 border border-0 rounded-3xl text-black text-sm p-2.5 mr-2`} key={navName.indexOf(navElement)}>
                        {navElement.nom}
                    </Link>  
                )
            })}
            <Link to="#" className={`bg-red-200 border border-0 rounded-3xl text-black text-sm p-2.5 mr-2 `} id="archi" onClick={show}>Architecture</Link>
            <Link to="#" className={`bg-red-200 border border-0 rounded-3xl text-black text-sm p-2.5 mr-2`} id="current"onClick={show}>Current</Link>
            <Link to="#" className={`bg-red-200 border border-0 rounded-3xl text-black text-sm p-2.5 mr-2`} id="events"onClick={show}>Events</Link>
            {isPop ? <Popup hide={hide}/>: null}
        </nav>
    )
}

export default Nav


function Popup({hide}) {
    return (
        <div className="w-40 h-20 rounded-lg bg-white border border-8  border-red-500 absolute top-36 left-24 p-2 z-20 hover:border-red-600 hover:ring-offset-2 sm:left-80">
            <div className="w-full h-full relative">
                <div className="w-6 h-6 bg-errorBtn bg-cover absolute -top-0.5 -right-1 cursor-pointer" onClick={hide}></div>
                <p className="text-center relative top-5">Bientôt disponible</p>
            </div>
            
        </div>
    )
}


