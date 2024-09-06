import { HoverEffect } from '@/components/ui/card-hover'
import { dummyData } from '@/json/dummydata'
import React from 'react'

export default function page({ params }: { params: { params: string } }) {
    return (
        <div className="container flex flex-col items-center pt-12 pb-4">
            <div className="max-w-2xl space-y-2 text-center">
                <h1 className="text-3xl font-semibold">Our {params.params}</h1>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo? Dolorum vero incidunt dolore corporis quod maxime in quidem laboriosam?</p>
            </div>
            <HoverEffect items={dummyData} />
            <div className="w-full flex justify-end items-center">
            </div>
        </div>
    )
}
