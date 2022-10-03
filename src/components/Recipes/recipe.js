import React from 'react'
import imageone from "./image 16.png"
import imagetwo from "./image 15.png"
import imagethree from "./breadpicture.png"

export default function Recipe(){
  return (
    <>
        <div className='container mx-auto'>
            <div className='font-bold text-xl mb-3 mt-5'> Latest Recipes</div>
                <div className='container mx-auto flex flex-col md:flex-row'>
                    <div className='container w-full h-96 md:w-1/3 border border-brightRed mr-3 mb-3 rounded-xl drop-shadow-2xl'>
                        <img src={imageone} className='w-full h-3/5' />
                        <div className="container ml-5">
                            <h1 className='font-bold text-xl  mt-3'>Goatmeat peppersoup</h1>
                            <p className=''>Tag: Nigerian Dish</p>
                            <p className=''>Description: Wash ya goatmeat....
                            </p>
                            <a href="#" className='text-brightRed mb-2 underline'>Continue reading</a>
                        </div>
                    </div>
                    <div className='container w-full h-96 md:w-1/3 border border-brightRed mr-3 mb-3 rounded-xl drop-shadow-2xl'>
                        <img src={imagetwo} className='w-full h-3/5' />
                        <div className="container ml-5">
                            <h1 className='font-bold text-xl  mt-3'>Beans and Dodo</h1>
                            <p className=''>Tag: Nigerian Dish</p>
                            <p className=''>Description: Wash ya beans....
                            </p>
                            <a href="#" className='text-brightRed mb-2 underline'>Continue reading</a>
                        </div>
                    </div>
                    <div className='container w-full h-96 md:w-1/3 border border-brightRed mb-3 rounded-xl drop-shadow-2xl'>
                        <img src={imagethree} className='w-full h-3/5' /> 
                        <div className="container ml-5">
                            <h1 className='font-bold text-xl  mt-3'>Fresh bread</h1>
                            <p className=''>Tag: English Dish</p>
                            <p className=''>Description: Get your flour....
                            </p>
                            <a href="#" className='text-brightRed mb-2 underline'>Continue reading</a>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

