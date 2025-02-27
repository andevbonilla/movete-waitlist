"use client"
import { addNewEmail } from '@/lib/request/addNewEmail';
import React, { useState } from 'react'
import { Loading } from './Loading';
import { Alert } from './Alert';

export const SendEmail = ({
    buttonText,
    placeholderText,
    errorLong,
    errorShort,
    errorInvalid,
    errorGeneral,
    succcessMessage,
    closeButton,
    successTitle,
    errorTitle,
}: {
    buttonText: string,
    placeholderText: string,
    errorLong: string,
    errorShort: string,
    errorInvalid: string,
    errorGeneral: string,
    succcessMessage: string,
    closeButton: string,
    successTitle: string,
    errorTitle: string,
}) => {

    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [isLoading, setisLoading] = useState(false);

    // alert states
    const [showAlert, setShowAlert] = useState(false);
    const [messageOfAlert, setMessageOfAlert] = useState("");
    const [messageIsError, setmessageIsError] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com)$/;

    const realTimeErrorEmail = (e: any) => {

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

    const saveEmail = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        setisLoading(true);
        let emailToSend = email.toLowerCase();

        if (emailToSend.length === 0 || emailToSend.length > 100 || !emailRegex.test(emailToSend)) {
            setisLoading(false);
            setShowAlert(true);
            setMessageOfAlert(errorInvalid);
            setmessageIsError(true);
            //error message
            return;
        }

        try {

            const result = await addNewEmail(emailToSend);

            if (result.isError === "") {
                setisLoading(false);
                setShowAlert(true);
                setMessageOfAlert(succcessMessage);
                setmessageIsError(false);
                // success message
            } else {
                setisLoading(false);
                setShowAlert(true);
                setMessageOfAlert(result.isError);
                setmessageIsError(true);
                // error message
            }

        } catch (error) {
            setisLoading(false);
            setShowAlert(true);
            setMessageOfAlert(errorGeneral);
            setmessageIsError(true);
            // error message
        }

    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <>

            {
                showAlert &&
                <Alert
                    setCloseModal={setShowAlert}
                    message={messageOfAlert}
                    isError={messageIsError}
                    closeButton={closeButton}
                    successTitle={successTitle}
                    errorTitle={errorTitle}
                />
            }

            < form
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
        </>

    );

}
