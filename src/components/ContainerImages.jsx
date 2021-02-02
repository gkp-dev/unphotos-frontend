import React from 'react'
import SingleImage from "../components/helpers/SingleImage"



function ContainerImages({data, searchData}) {
    if (data === null ) {
        return (
        <section className="grid place-items-center text-center p-4 font-poppins">
            <div id="intro">
                    <h1 className="text-2xl sm:text-3xl">Scroll to discover a New World</h1>
                    <h1 className="text-bold">The images are loading...</h1>
            </div>
        </section>
    )
    }else if(searchData){
        let ImagesData =  searchData.response.results;
        return(
        <section className=" text-center py-4 font-poppins">
            <div id="intro">
                    <h1 className="text-2xl sm:text-3xl mb-20">Scroll to discover a New World</h1>
                    <div className="Images px-2 w-full grid place-items-center gap-x-7 gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{breakInside:"avoid"}}>
                    {ImagesData.map((image) => {
                        return <SingleImage
                            key={ImagesData.indexOf(image)}
                            Image={image}>
                            {image}
                        </SingleImage>
                    })}
                    </div>     
            </div>
        </section>
        )
    } else {
        let ImagesData =  data.response.results;
        return(
        <section className=" text-center py-4 font-poppins">
            <div id="intro">
                    <h1 className="text-2xl sm:text-3xl mb-20">Scroll to discover a New World</h1>
                    <div className="Images px-2 w-full grid place-items-center gap-x-7 gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{breakInside:"avoid"}}>
                    {ImagesData.map((image) => {
                        return <SingleImage
                            key={ImagesData.indexOf(image)}
                            Image={image}>
                            {image}
                        </SingleImage>
                    })}
                    </div>     
            </div>
        </section>
        )}
    
}
    

    

export default ContainerImages
