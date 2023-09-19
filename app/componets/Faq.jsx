'use client'

import Link from "next/link";

import React, {useState, useEffect} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {data} from './accordiondata'
import CloseIcon from "./CloseIcon";

function Faq () {
        const [open, setOpen] = useState(0);
        const [iconOpen, setIconOpen] = useState(false)
        const [faq, setFaq] = useState([])
        const handleOpen = (value) => {
            setOpen(open === value ? 0 : value);
            setIconOpen(!iconOpen)
        }
        useEffect(()=>{
            setFaq(data)
            console.log(faq)
        },[faq])

    return (
        <section className="bg-black pt-20" >
            <h1 className=" text-center text-3xl font-extrabold md:text-5xl pb-5" >
                Frequently Asked Questions
            </h1>
            <div className="container mx-auto flex flex-col" >
                {
                    
                    faq.map((info)=> (
                            <Accordion key='info.id' className="flex flex-col w-[20rem] sm:w-[32rem] md:w-[46rem] lg:w-[64rem] mx-auto bg-gray-900 mb-2"  open={open === info.id}>
                                <AccordionHeader className=" flex w-full text-white border-black hover:text-white text-[1.125rem] pl-6 lg:pl-7 font-normal lg:text-2xl lg:py-7"  onClick={() => handleOpen(info.id)}>
                                    <div className=" flex items-center justify-between w-full " >
                                        <span className="" >{info.question}</span>
                                        
                                        <CloseIcon id={info.id} iconOpen={iconOpen} />
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" text-white font-normal p-7 text-[1.125rem] lg:text-2xl" >
                                    {info.answer}
                                </AccordionBody>
                            </Accordion>
                    ))
                }
            </div>
            <div className="flex flex-col lg:justify-center  lg:items-center pt-10 pb-20" >
                <p className=" text-lg px-6 text-center pb-4 mx-auto" >
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className=" flex flex-col lg:flex-row justify-center items-center " >
                    <div className=" text-lg" >
                        <input className='bg-gray-900 w-[20rem] md:w-60 lg:w-72 opacity-80 border rounded border-gray-500 mr-1 py-3 px-2' type="text" placeholder=" Email address" />
                    </div>
                    <div className=" mt-5 lg:ms-2 lg:mt-2 mx-auto" >
                        <Link className=' bg-red-900 text-lg rounded-sm ps-4 pr-8 py-3 lg:px-5 lg:text-2xl lg:py-3 z-10' href='/' >Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    )
    }

export default Faq




