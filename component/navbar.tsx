import Link from 'next/link';

const navbar = () => {
    return (

        <div className="hero-container my-5 mx-4 md:mx-12">
            <div className="md:flex md:justify-between md:items-center py-5 px-8">
                <Link href="/" className="font-semibold text-lg text-white">Homepage</Link>
                <div className="mt-4 md:mt-0 md:flex">
                    <button className="font-semibold text-lg text-white md:mr-4">Login</button>
                    <div className="md:ml-4 mt-4 md:mt-0">
                        <button className="font-semibold text-lg text-white">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar;
