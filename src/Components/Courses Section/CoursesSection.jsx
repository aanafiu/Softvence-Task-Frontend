import React from "react";
import { Link } from "react-router";

const courses = [
  {
    title: "Web Design Fundamentals",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    image: "https://i.ibb.co.com/TD97Z3j5/c1image.png",
  },
  {
    title: "Web Design Fundamentals",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    image: "https://i.ibb.co.com/Kzm6ZV94/c2image.png",
  },
];

const CoursesSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-Primary font-Mrp">Our Courses</h2>
            <p className="text-AllParaText font-Mrp mt-2 max-w-[70%]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <Link to={"/courses"} className="bg-AiBtn text-white px-4 py-2 rounded-md whitespace-nowrap">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-AiBG p-4 rounded-xl shadow-sm space-y-5">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[280px] object-fill rounded-md mb-4"
              />
              <div className="flex gap-3 text-sm text-gray-500 mb-2">
                <span className="bg-gray-200 px-2 py-1 rounded">{course.duration}</span>
                <span className="bg-gray-200 px-2 py-1 rounded">{course.level}</span>
                <span className="ml-auto">By {course.instructor}</span>
              </div>
              <h3 className="text-lg font-Mrp font-semibold text-Primary mb-2">{course.title}</h3>
              <p className="text-sm text-AllParaText font-Mrp mb-4">{course.description}</p>
              <button className="bg-AiBtn text-white w-full py-2 rounded-md font-bold ">
                Get it Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
