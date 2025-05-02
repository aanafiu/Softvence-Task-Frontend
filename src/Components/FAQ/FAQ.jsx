import React from "react";

const FAQ = () => {
  return (
    <div className="px-6 py-16">
      {/* FAQ Section */}
      <div className=" w-full h-full relative">
        <h4 className="text-xl h-full absolute top-0 left-0 text-AiBtn font-Qtl mb-2">
          Frequently asked <br /> questions
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-Qtl  text-gray-800 w-full sm:pl-[25%] mb-8 pt-[70px] sm:pt-5 text-center">
          Constant collaboration is how we roll.
          <br className="hidden sm:flex"></br>Let’s see if we are a good fit.
        </h2>
      </div>

      {/* FAq */}
      {/* FAQ */}
      <div className="space-y-4 font-Qtl">
        {[
          "Why should I choose Humestic?",
          "I like your works, how do we start a project?",
          "What info is required to get a quotation?",
        ].map((question, index) => (
          <div
            key={index}
            className="collapse collapse-plus bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-Qtl text-2xl md:text-4xl flex items-center gap-2">
              <span className="text-[#8B7D4C] font-bold">{`0${index + 1}`}</span>
              {question}
            </div>
            <div className="collapse-content text-AllParaText font-Qtl text-base">
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter view, for what
              the. Let's put a pin in that we need to build it so that it
              scales, are there any leftovers in the kitchen?, if you're not
              hurting you're not winning loop back
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
