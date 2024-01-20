"use client"
import Navbar from './navbar';
import Search from './search';

const hero = () => {

    return (
        <div className='hero-background'>

            <Navbar />

            <div className="mt-8 md:mt-16 lg:mt-24">
                <h1 className="text-center font-bold text-white text-4xl md:text-5xl lg:text-7xl">
                    Discover over 2,000,000 <br /> free Stock Images
                </h1>
            </div>

            <Search />

            <div className="mt-[20px] flex justify-center">
                <div className="w-full max-w-[271px] hero-container px-4 py-2">
                    <p className="text-white text-sm font-normal"><span className='font-bold'>Trending:</span> flowers, love, forest, river</p>
                </div>
            </div>
        </div>
    )
}

export default hero;
