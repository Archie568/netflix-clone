import Image from "next/image"
import Secondimg from '../../public/images/second_section_image.png'
import Thirdimg from '../../public/images/third_section_image.jpg'
import Fourthimg from '../../public/images/fourth_section_image.png'

function Secondpage() {
    return (
        <section className=" bg-black text-white w-full" >

            {/* First section */}

            <div className=" flex flex-col pt-16 md:flex-row md:justify-center " >
                <div className=" flex flex-col text-center justify-center md:text-justify md:p-10" >
                    <h1 className=" text-3xl font-extrabold md:text-5xl" >
                        Enjoy on your TV
                    </h1>
                    <p className=" text-lg pt-3 md:text-2xl " >
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                <div>
                    <Image
                    className='w-full h-full'
                    src={Secondimg}  
                    alt="Second image" 
                    width='100%' 
                    height='100%' />
                </div>
            </div>

            {/* Second Section */}

            <div className=" flex flex-row-reverse justify-center pt-16  bg-black" >
                <div className=" flex flex-col text-center justify-center md:p-10" >
                    <h1 className=" text-3xl font-extrabold md:text-4xl" >
                        Download your shows to watch offline
                    </h1>
                    <p className=" text-lg pt-3 md:text-2xl" >
                        Save your favorites easily and always have something to watch.
                    </p>
                </div>
                <div>
                    <Image
                    className='w-full h-full'
                    src={Thirdimg}  
                    alt="Second image" 
                    width='100%' 
                    height='100%' />
                </div>
            </div>

            {/* Third Section */}
            <div className="bg-black flex flex-col text-center justify-center py-32 px-10" >
                    <h1 className=" text-3xl font-extrabold" >
                        Watch everywhere
                    </h1>
                    <p className=" text-lg pt-3 md:text-2xl" >
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
            </div>
            {/* Fourth Section */}

            <div className=" flex flex-row-reverse pt-16  bg-black" >
                <div className=" flex flex-col text-center justify-center md:p-10 md:text-left" >
                    <h1 className="text-3xl font-extrabold md:text-5xl" >
                        Create profiles for kids
                    </h1>
                    <p className=" text-lg pt-3  md:text-xl" >
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </p>
                </div>
                <div className="
                " >
                    <Image
                    className='w-full h-full'
                    src={Fourthimg}  
                    alt="Second image" 
                    width='100%' 
                    height='100%' />
                </div>
            </div>
        </section>
    )
}

export default Secondpage
