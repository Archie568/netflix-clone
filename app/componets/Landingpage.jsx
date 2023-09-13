import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'
import Logo from '../../public/images/Netflix-Logo.wine.png'
import MainImage from '../../public/images/main_image.jpg'

export default function Landingpage() {
    return (
        <section className=' ' >
            <div className=' w-full h-full relative ' >
            <Image
                className=' w-full top-0 left-0 relative h-[500px] md:h-full' 
                src={MainImage}
                alt='main image'
                />
                <div className='absolute bg-black w-full h-full top-0 left-0 opacity-60' >
                
                </div>
            </div>
            <div className=' absolute top-0 left-0 w-full pt-1 px-16 z-0'>
                <div className='flex justify-between text-white items-center' >
                    <Image
                    src={Logo}
                    alt='logo'
                    width='110'
                    height='auto'
                    className=' z-10'
                    />
                    <button className='bg-red-600 py-1 px-3 text-justify rounded-sm hover:bg-red-700 z-10' >
                        Sign In
                    </button>
                </div>
                <div className='flex flex-col items-center pt-24 text-center' >
                    <h2 className='font-bold text-3xl opacity-100 z-40 ' >
                        Unlimited movies, TV shows, and more
                    </h2>
                    <p className='py-4 text-lg ' >
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p className=' text-lg' >
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                </div>
                <form className=' flex items-center justify-center pt-6' >
                    <div>
                        <input 
                        className='bg-gray-900 w-40 md:w-60 lg:w-72 opacity-80 border rounded border-gray-500 mr-1 py-3 px-2' type="text" placeholder='Email address' 
                        />
                    </div>
                    <div className=' ml-1' >
                        <Link className=' bg-red-600 text-sm rounded-sm px-2 py-4 md:px-5 lg:text-2xl lg:py-3' href="/" >Get Started</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
