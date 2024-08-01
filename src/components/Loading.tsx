import React from 'react'
import { FadeLoader } from 'react-spinners';

export const Loading = () => {
    return (
        <div className='z-[999] bg-black h-screen flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 w-full'>
            <FadeLoader color='#36d7b7' loading={true} className='mt-4 mb-12' />
        </div>
    )
}
