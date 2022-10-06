import React, { useState, useEffect } from "react";
import imageone from "./image 16.png";
import "./recipe.css";
// import imagetwo from "./image 15.png"
// import imagethree from "./breadpicture.png"
import { RotatingTriangles } from "react-loader-spinner";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

export default function Recipe() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://aquatic-harbor-production.up.railway.app/recipe")
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, []);

  return (
    <>
      <div className="font-bold text-xl mb-3 mt-5 flex justify-center latest-recipes"> Latest Recipes</div>
      <div className="container flex flex-col md:flex-row flex-wrap mx-auto justify-evenly">
        {loading ? (
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        ) : (
          recipes?.map((recipe) => (
            // <div className=" recipe-wrapper">
            <div className="container p-5 md:w-2/6 border mr-1 mb-3 rounded-xl shadow-md recipe-card ">
              <img src={recipe.photo} className="recipe-image" />
              <div className="container">
                <h1 className="font-bold text-xl  mt-3 mb-2">{recipe.recipeName}</h1>
                <p className="mb-2"><span className="font-bold">Tag:</span> {recipe.tag}</p>
                <p className="mb-2"><span className="font-bold">Description:</span> {recipe.description}</p>
                <a
                  href="/home/recipe/singleRecipe"
                  className="text-brightRed mb-4 underline"
                >
                  Continue reading
                </a> <br />

                <div className="h-10 w-full ml-5 mt-2 hero-like">
            <div className="flex mb-3">
              <div className="flex items-center">
                <div>
                  <BiLike />
                </div>
                <div className="mr-4">50</div>
              </div>

              <div className="flex items-center">
                <div>
                  <AiOutlineComment />
                </div>
                <div className="mr-4">10</div>
              </div>
              <div className="flex items-center">
                <div>
                  <RiShareForwardLine />
                </div>
                <div>18</div>
              </div>
            </div>
          </div>

              </div>
            </div>
            // </div>
          ))
        )}
      </div>
    </>
  );
}

{
  /* <div className='container w-full h-96 md:w-1/3 border border-brightRed mr-3 mb-3 rounded-xl drop-shadow-2xl'>
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
                    </div> */
}
