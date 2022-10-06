import React from "react";
import image from "./image.png";
import "./hero.css";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="py-3 mb-4">
      <h3 className="container font-bold text-xl mx-auto mt-8 mb-4">
        Recipe of the week
      </h3>
      <div className="container mx-auto flex flex-col md:flex-row border rounded-xl shadow-lg ">
        <img src={image} alt="rice and stew" className="w-full image" />
        <div className="hero-description">
          <div className="container ml-5 w-4/5">
            <h1 className="font-bold text-xl mb-5 mt-4">Rice and Stew</h1>
            <p className="mb-2">Duration: 1 hour</p>
            <p className="mb-2">
              Ingredients: Rice-2cups, water,salt, tomato, groundnut oil, beef
              or chicken
            </p>
            <p className="mb-2">Duration: 1 hour</p>
            <p className="mb-2">Tag: Nigerian Dish</p>
            <p className="mb-2">
              Description: Wash ya rice, put am inside water, parboil am small.
              After parboiling, strain the water off the rice. Put anoda water
              and wait like 15-20 mins for ya rice to boil. when e don boil, u
              fit sieve am or u fit let the water dry- anyone wey u like sha....
            </p>
            <a
              href="/home/recipe/singleRecipe"
              className="text-brightRed mb-2 underline"
            >
              Continue reading
            </a>
          </div>
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
    </div>
  );
};

export default Hero;
