'use client'

import Link from "next/link";

import React, {useState, useEffect} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {data} from './accordiondata'

function Faq () {
        const [open, setOpen] = useState(0);
        const [iconOpen, setIconOpen] = useState(false)
        const [faq, setFaq] = useState([])
        const handleOpen = (value) => {
            setOpen(open === value ? 0 : value);
            setIconOpen(!iconOpen);
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
            <div className="flex flex-col" >
                {
                    
                    faq.map((info)=> (
                        <div className="flex flex-col" key='info.id' >
                            <Accordion  className=" w-[60rem] mx-auto bg-gray-900 mb-2"  open={open === info.id}>
                                <AccordionHeader className=" flex w-full text-white border-black hover:text-white pl-7 font-normal text-2xl py-7"  onClick={() => handleOpen(info.id)}>
                                    <div className=" flex justify-between w-full" >
                                        <span className="" >{info.question}</span>
                                        {
                                            iconOpen ? <span>
                                            <svg 
                                                className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            </span> : 
                                            <span>
                                                <svg 
                                                    className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                                </svg>
                                            </span>
                                        }
                                        
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" text-white font-normal p-7 text-2xl" >
                                    {info.answer}
                                </AccordionBody>
                            </Accordion>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center pt-10 pb-20" >
                <p className=" text-lg pb-4" >
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className=" flex justify-center" >
                    <input className='bg-gray-900 w-40 md:w-60 lg:w-72 opacity-80 border rounded border-gray-500 mr-1 py-3 px-2' type="text" placeholder=" Email address" />
                    <Link className=' bg-red-900 text-sm rounded-sm py-4 md:px-5 lg:text-2xl lg:py-3' href='/' >Get Started</Link>
                </div>
            </div>
        </section>
    )
    }

export default Faq




