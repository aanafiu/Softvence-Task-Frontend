import Lottie from 'lottie-react';
import React from 'react';
import constructionAnimation from '../../assets/OnConstruction.json';
const OnCOnstruction = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className='my-10'>
            <div className='flex justify-center w-[500px] h-full mx-auto'>
            <Lottie animationData={constructionAnimation}></Lottie>
            </div>
            <h1 className='mx-auto w-fit font-PJS text-AiBtn text-3xl font-bold'>Construction On Process...</h1>
        </div>
    );
};

export default OnCOnstruction;