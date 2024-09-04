import Cards from '@/components/custom/Cards'
import axios from 'axios';
import React from 'react'


export async function generateRandomUser() {
    const response = await axios.get('https://randomuser.me/api/?results=8')
    return await response.data
}


export default async function page() {
    const data = await generateRandomUser();
    return (
        <div className='container h-screen grid place-content-center overflow-y-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    data.results.map((item: any, index: number) => (
                        <Cards key={index} name={item.name.first} profession={item.name.last} image={item.picture.large} />
                    ))
                }
            </div>
        </div>
    )
}
