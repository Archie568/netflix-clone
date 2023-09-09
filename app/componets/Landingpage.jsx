import Image from 'next/image'
import '../globals.css'
import Logo from '../../public/images/Netflix-Logo.wine.png'

export default function Landingpage() {
    return (
        <section>
            <div className='main-img top-0 left-0 opacity-100 relative'>
                <div className=' bg-black w-full h-full opacity-40' >

                </div>
            </div>
            <div className=' absolute top-0 left-0 w-full pt-1 px-8 z-0'>
                <div className='flex justify-between text-white items-center' >
                    <Image
                    src={Logo}
                    alt='logo'
                    width='110'
                    height='110'
                    className=' z-10'
                     />
                    <button className='bg-red-600 py-1 px-3 text-justify rounded-sm hover:bg-red-700 z-10' > Sign In</button>
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
            </div>
        </section>
    )
}
