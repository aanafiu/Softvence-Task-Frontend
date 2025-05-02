import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "Working with their team was a breeze. Their approach to solving complex challenges is unmatched. We saw immediate results in our campaign performance.",
    name: "Sarah Lindon",
    title: "Marketing Director, CreativeHub",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Innovative, agile, and effective. They provided solutions tailored exactly to our business needs. We're extremely happy with the results.",
    name: "David Harmon",
    title: "CTO of TechSavvy",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "Innovative, agile, and effective. They provided solutions tailored exactly to our business needs. We're extremely happy with the results.",
    name: "David Harmon",
    title: "CTO of TechSavvy",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "Innovative, agile, and effective. They provided solutions tailored exactly to our business needs. We're extremely happy with the results.",
    name: "David Harmon",
    title: "CTO of TechSavvy",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const { quote, name, title, avatar } = testimonials[current];

  return (
    <div className="text-center space-y-6 max-w-3xl mx-auto">
      <p className="text-xl md:text-2xl font-semibold text-gray-800">
        “{quote}”
      </p>

      <div className="flex items-center justify-between">
        {/* Info */}
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt={name} />
            </div>
          </div>
          <div className="text-left">
            <p className="font-bold text-Primary">{name}</p>
            <p className="text-sm text-AllParaText">{title}</p>
          </div>
        </div>
        {/* Button Section */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="btn rounded-full text-Primary btn-outline px-4 hover:bg-AiBtn hover:text-white">
            ←
          </button>
          <span className="text-gray-500 text-sm">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={handleNext}
            className="btn rounded-full text-Primary btn-outline px-4 hover:bg-AiBtn hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
