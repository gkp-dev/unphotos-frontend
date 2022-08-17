import React from 'react'

function Banner() {
    const home = 'bg-mini sm:bg-med md:bg-lg'
    const water = ' bg-water-mini sm:bg-water-md md:bg-water-lg'
    const wallpaper = 'bg-wallpaper-mini sm:bg-wallpaper-md md:bg-wallpaper-lg'
    const people = 'bg-people-mini sm:bg-people-md md:bg-people-lg'
    const nature = 'bg-people-nature sm:bg-nature-md md:bg-nature-lg'

    let backgroundImage = home

    switch (document.title) {
        case ('Nature |Unsplash Clone'):
            backgroundImage = nature
            break
        case ('Wallpaper |Unsplash Clone'):
            backgroundImage = wallpaper
            break
         case ('Water |Unsplash Clone'):
            backgroundImage = water
            break
        case ('People |Unsplash Clone'):
            backgroundImage = people
            break
        default:
            backgroundImage = home
            break
            
    }
    
    return (
        <section id="banner" className={`w-screen h-large md:h-96 relative bg-cover text-3xl text-white font-satisfy ${backgroundImage}`}>

            <div className="content absolute top-40 left-20">
            <div className=" flex">
                <img className="mr-2 mb-2 w-14 h-14" src="/images/logo-un.png" alt="logo"></img>
                <h1 className="relative top-2">Unphotos</h1>
            </div>
            
                <h2>A new gallery web application</h2>
            </div>
        </section>
    )
}

export default Banner
