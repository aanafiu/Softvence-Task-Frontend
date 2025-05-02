
import CoursesSection from '../Components/Courses Section/CoursesSection';
import FAQ from '../Components/FAQ/FAQ';
import Hero from '../Components/Hero/Hero';
import LiveAiCoach from '../Components/Live Ai Coach/LiveAiCoach';
import Testimonial from '../Components/Testimonial/Testimonial';

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

            {/* FAQ */}
            <section className="my-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
                <FAQ></FAQ>
            </section>
            {/* Testimonial */}
            <section className="my-5 mb-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
                <Testimonial></Testimonial>
            </section>
      
        </div>
    );
};

export default HomeLayout;