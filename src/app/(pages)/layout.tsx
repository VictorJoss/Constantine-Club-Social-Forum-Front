import React from 'react';
import {PageMenu} from "@/components/page/menu";

export default function pageLayout({children, }:{
    children: React.ReactNode;
}){
    return(
        <div className="relative flex justify-center items-start w-[1200px] m-auto">
            <div className="sticky top-0 flex mx-4 max-w-[200px]">
                <PageMenu/>
            </div>
            {children}
            <div className="sticky top-0 flex w-full max-w-[320px]">BUSCAR</div>
        </div>
    );
}