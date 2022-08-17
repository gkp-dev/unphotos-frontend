import React, {useState, useEffect}from 'react'
import unsplash from '../config/unsplash'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ContainerImages from '../components/ContainerImages'


function Water() {
    const [data, setImagesResponse] = useState(null);
    const [searchData, setSearchPhotoResponse] = useState(null);
    
    async function fetchImages() {
        const reqData = await  unsplash.search.getPhotos({
            query: 'water',
            page: 1,
            perPage: 30,
            orientation: 'portrait',
            });
        setImagesResponse(reqData); 
    }    
    
//Search by name
    
    async function search(name = '') {
        if (name === ''|| !name) {
        return ''
    }
        const searchImages = await unsplash.search.getPhotos({
        query: name,
        page: 1,
        perPage: 30,
        orientation: 'portrait',
        });

        await setSearchPhotoResponse(searchImages);
        
}
    useEffect(() => {
        fetchImages()
        search()
        
    }, [])
    
    return (
        <React.Fragment>
            <title>Water |Unsplash Clone</title>
            <Header onSearch={search}/>
            <Banner />
            <ContainerImages data={data} searchData={searchData}/>
        </React.Fragment>
    )
}




export default Water
