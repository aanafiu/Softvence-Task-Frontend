
import CoursesSection from '../Components/Courses Section/CoursesSection';
import Hero from '../Components/Hero/Hero';
import LiveAiCoach from '../Components/Live Ai Coach/LiveAiCoach';

const HomeLayout = () => {
    return (
        <div>
            <section className="my-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
               <Hero></Hero>
            </section>
            {/* Ai Section */}
            <section className='blue-gradient'>
                <LiveAiCoach></LiveAiCoach>
            </section>
            {/* Courses Section */}
            <section className="my-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
                <CoursesSection></CoursesSection>
            </section>
      
        </div>
    );
};

export default HomeLayout;