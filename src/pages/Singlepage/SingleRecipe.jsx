import React from 'react'
import image16 from "../../components/Recipes/image 16.png"
import {BiLike} from 'react-icons/bi'
import {AiOutlineComment} from 'react-icons/ai'
import {RiShareForwardLine} from 'react-icons/ri'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'

const SingleRecipe = () => {

   


  return (

    <div className='container p-2 flex flex-col md:flex-row'>
        <div className='image-container md:w-6/12'>
            <h3 className='font-bold mb-3 text-2xl'>NAME: GOATMEAT PEPPERSOUP</h3>
            <img src={image16} alt="Goat-meat peppersoup" className='w-full h-2/4 mb-3 '/>
            <div className='flex mb-3'>
                <div className='flex items-center'>
                    <div><BiLike /></div>
                    <div className='mr-4'>50</div>
                </div>

                <div className='flex items-center'>
                    <div><AiOutlineComment /></div>
                    <div className='mr-4'>10</div>
                </div>
                <div className='flex items-center'>
                    <div><RiShareForwardLine /></div>
                    <div>18</div>
                </div>
            </div>
            <h3 className='font-bold mb-1'>INGREDIENTS</h3>
            <div className='grid grid-cols-3 mb-3'>
                
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
                    <li>Goat meat</li>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold'>DURATION</h3>
                    <p>40 minutes</p>
                </div>

                <div>
                    <h3 className='font-bold'>TAG</h3>
                    <p>African</p>
                </div>

                <div>
                    <h3 className='font-bold'>RATING</h3>
                    <div className='flex'><BsStarFill /><BsStarFill /><BsStarHalf /></div>
                </div>

            </div>

        </div>
        <div className='preparation p-2 md:w-6/12'>
            <h3 className='font-bold'>PREPARATION</h3>
            <p className='mb-3'>
                Wash rice, Put rice in .... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog. wash rice put rice in ... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog.
                Wash rice, Put rice in .... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog. wash rice put rice in ... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog.
                Wash rice, Put rice in .... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog. wash rice put rice in ... lorem ipsum isi dolor amet, the quick brown fox jumps over the lazy dog.
            </p>
            
            <h3 className='font-bold'>SIMILAR RECIPE:</h3>
            <p>Jellof rice</p>

            <div className='comments border border-brightRed w-full p-2 rounded-xl'>
                <p className='mb-2'><span className='font-bold'>funty-art</span> This is an awesome recipe. Well detailed and in simple english. Would definitely try this at home.  </p>
                <p className='mb-2'><span className='font-bold'>apotheosis</span> Not bad. Although missing one or two steps, it is easy to understand and straight to the point. Well done.</p>
                <p className='mb-2'><span className='font-bold'>DefNotCash</span> Just like my girlfriend's cooking!</p>
                <a href="#" className='underline'>View all comments</a>
            </div>

        </div>
    </div>

    
  )
}

export default SingleRecipe