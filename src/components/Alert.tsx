"use client"
import React from 'react';

export const Alert = ({ setCloseModal, title, message, isError }: { setCloseModal: any, title: string, message: string, isError: boolean }) => {
    return (
        <div className='fixed w-full z-[999] h-full left-0 top-0 flex justify-center items-center'>
            <div onClick={() => setCloseModal(false)} className='cursor-pointer z-[998] absolute bg-black bg-opacity-60 w-full h-full left-0 top-0 flex justify-center items-center'></div>
            <div className='z-[999] bg-white text-black rounded-lg flex p-10 flex-col w-[90%] md:w-[50%] lg:w-[40%] overflow-y-auto'>

                <h3 className={`${isError ? "text-red-600" : "text-black"} text-center font-bold text-xl mb-4`}>{title}</h3>
                <p className='text-center mb-4'>{message}</p>

                <div className='flex items-center justify-end'>
                    <button
                        className='bg-red-600 text-white font-bold rounded py-3 px-5 w-full md:w-auto'
                        onClick={() => setCloseModal(false)}
                        type='button'
                    >
                        Close
                    </button>
                </div>

            </div>

        </div>
    )
}
