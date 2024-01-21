'use client'
import Link from 'next/link';
import React from 'react';
import { useSelector } from "react-redux";


function Modal({ setModal, imageUrl }: { setModal: any, imageUrl: string }) {

    const movieList = useSelector((store: any) => store.pixbay.pixbayResults);
    const [selectedMovie, setSelectedMovie] = React.useState<any>(null);

    React.useEffect(() => {
        const foundMovie = movieList.find((movie: any) => movie.webformatURL === imageUrl);
        setSelectedMovie(foundMovie);
    }, [imageUrl, movieList]);

    return (
        <div>
            <>
                {setModal ? (
                    <>
                        <div className="justify-center items-center md:flex fixed inset-0 z-50 sm:m-6 rounded-md overflow-auto">
                            <div className="relative w-auto mx-auto max-w-full">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div className="flex justify-between items-center bg-[#F5F5F5] p-6 rounded-lg">
                                        <h3 className='sm:text-xl font-medium text-[#3B4043]'>Preview ID: {selectedMovie?.id}</h3>
                                        <button
                                            type="button"
                                            onClick={() => setModal(false)}
                                        >
                                            <img src={'/svg/close.svg'} alt="close-button" width={32} height={33} />
                                        </button>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4 pt-[60px] px-6">
                                        <div className='md:col-span-2'>
                                            <img src={selectedMovie?.largeImageURL} alt="image" width={832} height={555} className="block lg:h-[470px] w-full object-cover rounded-lg" />
                                        </div>
                                        <div className='md:col-span-1'>

                                            <h3 className='text-[#3B4043] font-medium text-xl'>Download</h3>

                                            <table className="table-auto my-3" style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr className='bg-[#F5F5F5] border rounded-t-lg'>
                                                        <td className='text-[#475467] text-xs font-normal p-2'>Small</td>
                                                        <td className='text-[#475467] font-bold text-xs text-center p-2'>640*960</td>
                                                    </tr>
                                                    <tr className='border'>
                                                        <td className='text-[#475467] text-xs font-normal p-2'>Medium</td>
                                                        <td className='text-[#475467] font-bold text-xs text-center p-2'>1920*2660</td>
                                                    </tr>
                                                    <tr className='border'>
                                                        <td className='text-[#475467] text-xs font-normal p-2'>Big</td>
                                                        <td className='text-[#475467] font-bold text-xs text-center p-2'>2400*3600</td>
                                                    </tr>
                                                    <tr className='border'>
                                                        <td className='text-[#475467] text-xs font-normal p-2'>Original</td>
                                                        <td className='text-[#475467] font-bold text-xs text-center p-2'>3850*5640</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {selectedMovie?.previewURL && (
                                                <Link href={selectedMovie?.previewURL}>
                                                    <button className="bg-[#4BC34B] hover:bg-[#2b6b2b] w-full text-white font-bold py-2 px-4 rounded">
                                                        Download for free!
                                                    </button>
                                                </Link>
                                            )}

                                            <h2 className='text-[#3B4043] font-medium text-xl my-4'>Information</h2>

                                            <div>
                                                <div className='flex gap-4 items-center justify-between'>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>User</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.user}</h4>
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>User ID</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.user_id}</h4>
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>Type</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.type}</h4>
                                                    </div>
                                                </div>
                                                <div className='flex gap-4 items-center justify-between mt-4'>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>Views</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.views}</h4>
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>Downloads</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.downloads}</h4>
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-[#717579] text-sm'>Likes</p>
                                                        <h4 className='text-base text-[#3B4043] font-semibold'>{selectedMovie?.likes}</h4>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='text-lg font-bold overflow-auto text-[#3B4043] p-6 flex items-center gap-4'>Tags:
                                        <ul className="flex text-center overflow-auto gap-4">
                                            {movieList?.slice(0, 3).map((e: any) => (
                                                <li className="me-4 flex" key={e.id}>
                                                    {e.tags.split(',').map((tag: string, index: number) => (
                                                        <h3 key={index} className="text-nowrap me-2 text-xs font-normal px-2 text-[#767676] inline-block bg-[#F5F5F5]">
                                                            {tag.trim()}
                                                        </h3>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </>
        </div>
    );
}

export default Modal;
