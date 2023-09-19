import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import Logo from '../../public/images/Netflix-Logo.wine.png'
import MainImage from '../../public/images/main_image.jpg'

export default function Landingpage() {
    return (
        <section className='' >
            <div className=' w-full h-full relative ' >
            <Image
                className=' w-full top-0 left-0 relative h-[500px] md:h-full' 
                src={MainImage}
                alt='main image'
                />
                <div className='absolute bg-black w-full h-full top-0 left-0 opacity-60' >
                
                </div>
            </div>
            <div className=' absolute top-0 left-0 w-full pt-1 px-4 lg:container lg:mx-auto lg:px-40 z-0  '>
                <div className='flex justify-between text-white items-center  ' >
                    <Image
                    src={Logo}
                    alt='logo'
                    width='110'
                    height='auto'
                    className=' z-10'
                    />
                    <button className='bg-red-900 py-1 px-3 text-justify rounded-sm hover:bg-red-700 z-10' >
                        Sign In
                    </button>
                </div>
                <div className='pt-[3rem] lg:pt-[15rem]' >
                    <div className='flex flex-col items-center text-center' >
                        <h2 className='font-bold text-[2rem] opacity-100 z-40 ' >
                            Unlimited movies, TV shows, and more
                        </h2>
                        <p className='py-4 text-lg lg:text-2xl ' >
                            Watch anywhere. Cancel anytime.
                        </p>
                        <p className=' text-lg lg:text-2xl ' >
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                    </div>
                    <form className=' flex flex-col md:flex-row justify-center items-center  pt-6' >
                        <div>
                            <input 
                            className=' mx-auto bg-gray-900 w-[18rem] md:w-60 lg:w-72 opacity-80 border rounded border-gray-500 text-lg mr-1 py-2 px-2 lg:text-2xl' type="text" placeholder='Email address' 
                            />
                        </div>
                        <div className=' ml-1 mt-7 lg:mt-0' >
                            <Link className=' bg-red-900 text-lg rounded-sm px-10 py-3 mdx:px-5 lg:text-2xl lg:py-3 z-10' href="/" >Get Started</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
