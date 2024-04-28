"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import { useDragControls, useAnimationControls } from "framer-motion"
import { useRouter } from 'next/navigation'
import React from "react";


export default function HeroAlert({children, page}: {children: React.ReactNode, page: string}) {
    const controls = useDragControls()
    const control2 = useAnimationControls()
    const router = useRouter()
    // drag
    function startDrag(event:any) {
        controls.start(event, {})
    }
    // drag end
    function click(){
        control2.start({x: 0, y: 0})
    }
    // push to new page
    function pushToNewPage(){
        router.push(page)
    }
    return (
        <motion.div onDragEnd={click} onClick={click} onPointerDown={startDrag} onAnimationComplete={pushToNewPage} animate={control2} className=" w-fit h-8" drag dragControls={controls}  >
            {children}
        </motion.div>
    );
}