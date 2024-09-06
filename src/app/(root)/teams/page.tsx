"use client";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover";
import { dummyData } from "@/json/dummydata";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
    const router = useRouter();
    return (
        <section className="select-none">
            <div className="container flex flex-col items-center pt-12">
                <div className="max-w-2xl space-y-2 text-center">
                    <h1 className="text-3xl font-semibold">Our Teams</h1>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo? Dolorum vero incidunt dolore corporis quod maxime in quidem laboriosam?</p>
                </div>
                <HoverEffect items={dummyData} limit={4} />
                <div className="w-full flex justify-end items-center">
                    <Button variant="ghost" size="sm" onClick={() => { router.push("/teams/Teams") }}>
                        View More
                    </Button>
                </div>
            </div>
            <div className="container flex flex-col items-center pt-12">
                <div className="max-w-2xl space-y-2 text-center">
                    <h1 className="text-3xl font-semibold">Our Sponsers</h1>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo? Dolorum vero incidunt dolore corporis quod maxime in quidem laboriosam?</p>
                </div>
                <HoverEffect items={dummyData} limit={4} />
                <div className="w-full flex justify-end items-center">
                    <Button variant="ghost" size="sm" onClick={() => { router.push("/teams/Sponsers") }}>
                        View More
                    </Button>
                </div>
            </div>
            <div className="container flex flex-col items-center pt-12 pb-4">
                <div className="max-w-2xl space-y-2 text-center">
                    <h1 className="text-3xl font-semibold">Our Contributers</h1>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo? Dolorum vero incidunt dolore corporis quod maxime in quidem laboriosam?</p>
                </div>
                <HoverEffect items={dummyData} limit={4} />
                <div className="w-full flex justify-end items-center">
                    <Button variant="ghost" size="sm" onClick={() => { router.push("/teams/contributers") }}>
                        View More
                    </Button>
                </div>
            </div>
        </section>
    );
}