import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';



const BookInfo = () => {
      const navigation = useNavigation();
      console.log(navigation.state);
      if (navigation.state === "loading") {
        return <Loading></Loading>;
      }
    const singleInfo = useLoaderData()
    
    const {image,title,authors,publisher,rating,desc} = singleInfo
    return (
        <div className='flex max-w-screen-lg mx-auto justify-between'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className='font-bold text-2xl'>{title}</h1>
                <h2>Authors : {authors}</h2>
                <h2>Publisher: {publisher}</h2>
                <h3>Rating{rating}</h3>
                <p>{desc}</p>
                <div>
                    <button>Buy Now</button>
                    <h3>Price{singleInfo.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;