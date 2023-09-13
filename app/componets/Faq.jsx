'use client'

import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {data} from './accordiondata'

function Faq () {
        const [open, setOpen] = React.useState(1);
        const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className=" bg-black" >
            <h1 className=" text-center text-3xl font-extrabold md:text-5xl pt-7 pb-5" >
                Frequently Asked Questions
            </h1>
            <div className="flex flex-col" >
                {
                    data.map((info)=> {
                        <div className="flex flex-col" >
                        <Accordion key={info.key} className=" w-[60rem] mx-auto bg-gray-900 mb-2"  open={open === 1}>
                            <AccordionHeader className=" text-white border-black hover:text-white pl-7 font-normal text-2xl py-7"  onClick={() => handleOpen(1)}>
                                {info.question}
                            </AccordionHeader>
                            <AccordionBody className=" text-white font-normal p-7 text-2xl" >
                                {info.answer}
                            </AccordionBody>
                        </Accordion>
                        </div>
                    })
                }
            </div>
        </section>
    )
    }

export default Faq




