import Image from "next/image"
import Secondimg from '../../public/images/second_section_image.png'

function Secondpage() {
    return (
        <section className=" bg-black text-white w-full h-[40rem]" >
            <div className=" flex flex-col pt-16" >
                <div className=" flex flex-col text-center justify-center" >
                    <h1 className=" text-3xl font-extrabold" >
                        Enjoy on your TV
                    </h1>
                    <p className=" text-lg pt-3" >
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                <div>
                    <Image
                    className='w-full h-full'
                    src={Secondimg}  
                    alt="Second image" 
                    width='100' 
                    height='100' />
                </div>
            </div>
        </section>
    )
}

export default Secondpage
