import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPixbayData } from '@/utils/store/picSlice';

const search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [placeholder, setPlaceholder] = useState('Search');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSearch = () => {
        fetch(`https://pixabay.com/api/?key=37819534-610a8a2819036d674cbeb3178&q=${searchTerm}&image_type=photo`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.hits);
                const mainData = data.hits;
                dispatch(setPixbayData(mainData));
                setPlaceholder('Start new Search');
                setSearchTerm('');
                router.push('/result');
            });
    };

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };


    return (
        <>
            <div className="mt-[76px] flex justify-center">
                <form className="w-full max-w-[756px] hero-container px-4 mx-5">
                    <div className="flex items-center border-b py-3">
                        <Image src={'/svg/search.svg'} alt="search-icon" width={22} height={22} />
                        <div
                            className="inline-block h-[32px] mx-3 mt-1 min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100"></div>
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 leading-tight placeholder-white focus:outline-none"
                            type="text"
                            placeholder={placeholder}
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="flex-shrink-0 border-2 border-[#fff] text-white font-semibold text-lg py-1 px-4 rounded-lg"
                            type="button"
                            onClick={handleSearch}
                        >
                            GO!
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default search;
