"use client"
import React, { useState } from 'react'

export const SendEmail = ({ buttonText, placeholderText }: { buttonText: string, placeholderText: string }) => {

    const [email, setEmail] = useState("");

    const saveEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={saveEmail}
            className='md:flex-row flex flex-col items-center justify-cente w-full px-[12%]'
        >
            <input
                className='md:mr-2 py-3 px-5 rounded text-black text-opacity-90 w-full bg-white'
                name='email'
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                placeholder={placeholderText}
            />
            <button
                type='submit'
                className='md:mt-0 hover:bg-[#00CE74] mt-4 duration-200 bg-[#00FF8F] rounded py-3 px-5 font-bold w-full'
            >
                {buttonText}
            </button>
        </form>
    );

}
