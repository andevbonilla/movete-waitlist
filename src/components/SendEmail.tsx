"use client"
import React, { useState } from 'react'

export const SendEmail = ({ buttonText, placeholderText, errorLong, errorShort, errorInvalid }: { buttonText: string, placeholderText: string, errorLong: string, errorShort: string, errorInvalid: string }) => {

    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    const realTimeErrorEmail = (e: any) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let newValue = e.target.value;
        setEmail(newValue);

        if (newValue.length === 0) {
            setemailError(errorShort);
            return;
        };

        if (newValue.length > 100) {
            setemailError(errorLong);
            return;
        };

        if (!emailRegex.test(newValue)) {
            setemailError(errorInvalid);
            return;
        };

        setemailError("");

    }

    const saveEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.length === 0) {
            setemailError("");
            return;
        }


    }

    return (
        <form
            onSubmit={saveEmail}
            className='w-full md:px-[10%]'
        >
            <div className='md:flex-row flex flex-col items-center justify-cente w-full'>
                <input
                    className={`${(emailError.length > 0) ? "border-red-600 text-red-600 border-[.1rem]" : ""} md:mr-2 py-3 px-5 rounded text-black text-opacity-90 w-full bg-white`}
                    name='email'
                    type="email"
                    value={email}
                    onChange={realTimeErrorEmail}
                    placeholder={placeholderText}
                />
                <button
                    type='submit'
                    className={`${(emailError || email === "") ? "bg-opacity-40 text-opacity-40" : "hover:bg-[#00CE74]"} md:mt-0 mt-4 duration-200 bg-[#00FF8F] rounded py-3 px-5 font-bold w-full`}
                    disabled={(emailError || email === "") ? true : false}
                >
                    {buttonText}
                </button>
            </div>
            {
                (emailError.length > 0) &&
                <p className='text-red-600 font-bold max-w-[50%]'>{emailError}</p>
            }

        </form>
    );

}
