import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import people from './data';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className=" w-[100%]  mx-auto  rounded-md overflow-hidden flex items-center justify-center">
      <button
          className=""
          onClick={prevPerson}
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
      
      <div className="p-4 w-[70%]">
        <p className="mt-2 text-lg text-gray-600">"{text}"</p>
      </div>
      <div className="relative">
        <img src={image} alt={name} className="w-[50rem] p-3 rounded-3xl" />
      </div>
      <button
          className=""
          onClick={nextPerson}
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
    </div>
  );
};

export default Carousel;
