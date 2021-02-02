import React from 'react'


function SingleImage({ Image }) {
    
    const { urls, user,alt_description } = Image
    
    return (
        <div className="SingleImage border border-gray-300 rounded-lg cursor-pointer transform  transition-transform duration-300 hover:scale-105">
            <img className=" rounded-t-lg w-full" src={urls.regular} alt={alt_description} />

            <div className="p-2">
            <span className="underline"> Photographer:</span>
                <a className="hover:text-gray-500" href={`https://unsplash.com/@${user.username}`} target="_blank" rel="noreferrer"> {user.first_name}</a>
            </div>
        </div>
    )
}

export default SingleImage
