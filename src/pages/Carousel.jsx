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
    <div className="max-w-md mx-auto mt-8 rounded-md overflow-hidden shadow-lg">
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={prevPerson}
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 focus:outline-none"
          onClick={nextPerson}
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Carousel;
