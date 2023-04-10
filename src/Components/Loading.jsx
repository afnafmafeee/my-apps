import React from 'react';
import Lottie from "lottie-react";
import animationD from "../assets/laoding.json"

const Loading = () => {
    return (
        <div>
            <Lottie animationData={animationD} loop={true}></Lottie>
        </div>
    );
};

export default Loading;