import Image from 'next/image';
import { useState } from 'react';
import Spinner from '@/component/spinner';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPixbayData } from '@/utils/store/picSlice';
import { searchItemData } from '@/utils/store/searchSlice';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [placeholder, setPlaceholder] = useState('Search');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const apiKey = process.env.React_PIXABAY_KEY;

    const handleSearch = () => {
        setLoading(true);
        fetch(`https://pixabay.com/api/?key=37819534-610a8a2819036d674cbeb3178&q=${searchTerm}&image_type=photo`)
            .then((res) => res.json())
            .then((data) => {
                const mainData = data.hits;
                dispatch(setPixbayData(mainData));
                dispatch(searchItemData(searchTerm));
                setPlaceholder('Start new Search');
                setSearchTerm('');
                setLoading(false);
                router.push('/result');
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="mt-[76px] flex justify-center">
                <form className="w-full max-w-[756px] hero-container px-4 mx-5">
                    <div className="flex items-center py-3">
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
                        />
                        <button
                            className="flex-shrink-0 border-2 border-[#fff] hover:border-[#262525] hover:text-[#2c2b2b] text-white font-semibold text-lg py-1 px-4 rounded-lg"
                            type="button"
                            onClick={handleSearch}
                        >
                            GO!
                        </button>
                    </div>
                </form>
            </div>

            {loading && <Spinner />}
        </>
    );
}

export default Search;
function onSearchValueChange(searchTerm: string) {
    throw new Error('Function not implemented.');
}

