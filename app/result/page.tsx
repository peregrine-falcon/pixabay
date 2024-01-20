'use client'
import { useSelector } from "react-redux";
import Link from 'next/link'
import Image from "next/image";
import { useState } from "react";
import Modal from "@/component/modal";
import Navbar from "@/component/navbar";
import Search from "@/component/search";
import React from 'react';

const Page = () => {
    const movieList = useSelector((store: any) => store.pixbay.pixbayResults);
    console.log(movieList, "thisislist");

    const [showModal, setShowModal] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const handleOpenModal = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl);
        setShowModal(true);
    };

    return (
        <div>
            <Navbar />

            <Search />

            <h2 className="text-[42px] font-bold text-center text-white my-[76px]">
                Results:
            </h2>

            <div className="mx-auto px-4 md:px-12 bg-[#F5F5F5] py-[30px] overflow-x-auto">
                <ul className="flex text-center">
                    {movieList?.slice(0, 4).map((e: any) => (
                        <li className="me-2 flex" key={e.id}>
                            {e.tags.split(',').map((tag: string, index: number) => (
                                <a key={index} href="#" className="border text-nowrap me-2 rounded inline-block px-[55px] py-[13px] text-sm font-medium text-[#767676] hover:text-gray-100 hover:bg-gray-900">
                                    {tag.trim()}
                                </a>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-auto px-4 md:px-12 bg-white pt-[44px] cursor-pointer">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {movieList?.map((e: any) => (
                        <div className="my-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={e.id}>
                            <article className="overflow-hidden" onClick={() => handleOpenModal(e?.webformatURL)}>
                                <img
                                    alt="Placeholder"
                                    className="block h-[364px] w-full object-cover rounded-lg transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/50"
                                    src={e?.webformatURL}
                                />
                                <header className="flex items-center leading-tight mt-2">
                                    {e.tags.split(',').map((tag: string, index: number) => (
                                        <div key={index} className="me-2 rounded bg-[#F5F5F5] inline-block py-1 px-3 text-sm font-normal text-[#767676] ">
                                            {tag.trim()}
                                        </div>
                                    ))}
                                </header>
                            </article>
                        </div>
                    ))}
                </div>
            </div>


            {showModal && <Modal imageUrl={selectedImageUrl} setModal={setShowModal} />}
        </div>
    )
}

export default Page;
