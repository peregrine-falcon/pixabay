'use client'
import React from 'react';
import { useSelector } from "react-redux";


function Modal({ setModal, imageUrl }: { setModal: any, imageUrl: string }) {

    const movieList = useSelector((store: any) => store.pixbay.pixbayResults);
    console.log(movieList, "modalStore");

    console.log(imageUrl, "imageUrl");
    return (
        <div>
            <>
                {setModal ? (
                    <>
                        <div className="justify-center items-center flex fixed inset-0 z-50 m-6">
                            <div className="relative w-auto mx-auto max-w-full">
                                <div className="border-0 rounded-lg shadow-lg px-8 py-6 relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div className="flex justify-between items-center">
                                        <h3 className='text-xl font-medium text-[#3B4043]'>Preview ID: 48755</h3>
                                        <button
                                            type="button"
                                            onClick={() => setModal(false)}
                                        >
                                            <img src={'/svg/close.svg'} alt="close-button" width={32} height={33} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-[60px]">
                                        <div className='col-span-2'>
                                            <img src={imageUrl} alt="image" width={832} height={555} />
                                        </div>
                                        <div className='col-span-1'>
                                            <h3 className='text-[#3B4043] font-medium text-xl'>Download</h3>

                                            <table className="table-auto">
                                                <tbody>
                                                    <tr>
                                                        <td>Small</td>
                                                        <td>640*960</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>1920*2660</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Big</td>
                                                        <td>2400*3600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Original</td>
                                                        <td>3850*5640</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <button className="bg-[#4BC34B] hover:bg-[#2b6b2b] text-white font-bold py-2 px-4 rounded">
                                                Download for free!
                                            </button>

                                            <div>Information</div>

                                            <div>
                                                <div className='flex gap-4'>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                </div>
                                                <div className='flex gap-4 mt-4'>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                    <div>
                                                        <p>User</p>
                                                        <h4>Josch13</h4>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div>Tags:</div>

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
