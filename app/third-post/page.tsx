import React from 'react';

export const metadata = {
   title: 'The Benefits of Meditation: Finding Peace in a Busy World | MetaBlog',
   description: 'Discover the numerous benefits of incorporating meditation into your daily life.',
};

const SinglePost = () => {
   return (
      <main>
         <section>
            <div className="container mx-auto px-5 md:px-0 w-full md:w-10/12 lg:w-5/12 font-work">
               <div className="py-5">
                  <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
                     Wellness
                  </div>
                  <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10">
                     The Benefits of Meditation: Finding Peace in a Busy World
                  </h3>
                  <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                     <div className=" flex items-center gap-3">
                        <div className="avatar">
                           <div className="w-9 rounded-full">
                              <img
                                 src="https://avatars.githubusercontent.com/u/110733438?s=96&v=4"
                                 alt="avatar"
                              />
                           </div>
                        </div>
                        <a
                           href="/author"
                           className=" text-xs md:text-sm font-medium hover:text-primary transition hover:duration-300"
                        >
                           Atharv Sankpal
                        </a>
                     </div>
                     <p className="text-xs md:text-sm">March 23, 2024</p>
                  </div>
               </div>
               <div className="mt-8">
                  <img
                     width="800"
                     height="462"
                     alt={`Meditation illustration`}
                     className={`rounded-xl`}
                     src="https://puffy.com/cdn/shop/articles/how-to-meditate-3_1024x.jpg?v=1639635327"
                  />
               </div>

               {/* article section start  */}
               <div className="font-serif">
                  <div className="mt-8">
                     <p className="text-xl leading-8 text-base-content/80">
                        In the hustle and bustle of modern life, finding moments
                        of peace and calm can seem like a challenge. This is
                        where meditation comes in. Originating from ancient
                        practices, meditation has gained popularity in recent
                        years as a powerful tool for managing stress and
                        improving overall well-being.
                     </p>
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        What is Meditation?
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        At its core, meditation is the practice of training your
                        mind to focus and redirect your thoughts. It involves
                        various techniques, such as mindfulness, breathing
                        exercises, and guided imagery. The goal is to achieve a
                        state of deep relaxation and heightened awareness.
                     </p>
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Benefits for Mind and Body
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        The benefits of meditation are extensive and backed by
                        scientific research. It not only reduces stress and
                        anxiety but also improves emotional health, enhances
                        self-awareness, and promotes better sleep. Physically,
                        meditation can lower blood pressure, boost immunity,
                        and even improve cardiovascular health.
                     </p>
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        How to Get Started
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        If you're new to meditation, getting started is simple.
                        Find a quiet and comfortable place to sit or lie down.
                        Close your eyes and focus on your breath. Notice the
                        sensation of each inhale and exhale. If your mind
                        wanders, gently bring it back to your breath. Start
                        with just a few minutes a day and gradually increase
                        the duration as you become more comfortable.
                     </p>
                  </div>
                  <div className="p-8 bg-base-200 rounded-xl border-l-4  border-base-content/10 mt-8">
                     <p className="text-base-content italic text-2xl">
                        “Meditation is the journey from noise to silence,
                        from chaos to peace.”
                     </p>
                  </div>
                  <div className="mt-8">
                     <img
                        width="800"
                        height="462"
                        alt={`Meditation in nature`}
                        className={`rounded-xl`}
                        src="https://oliversapparel.com/cdn/shop/articles/s-migaj-Yui5vfKHuzs-unsplash.jpg?v=1651259971"
                     />
                  </div>
                  <div className="flex items-center justify-center my-8 font-work">
                     <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl w-11/12">
                        <p className="text-sm">Advertisement</p>
                        <h6 className="text-xl font-semibold leading-[24px]">
                           Find Inner Peace with our Meditation Retreats
                        </h6>
                        <p className="text-lg leading-[26px]">Book Now!</p>
                     </div>
                  </div>
                  <div className="mb-20">
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                        Incorporating Meditation into Your Life
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        To fully experience the benefits of meditation, it's
                        important to make it a regular practice. Set aside
                        time each day, even if it's just a few minutes, to
                        meditate. You can also explore guided meditation apps
                        or classes to help you along the way. As you develop
                        your meditation practice, you'll likely find yourself
                        more present, calm, and centered amidst the chaos of
                        everyday life.
                     </p>
                     <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                        Conclusion
                     </h5>
                     <p className="text-xl leading-8 text-base-content/80">
                        Meditation is a simple yet powerful practice that can
                        transform your life. Whether you're looking to reduce
                        stress, improve focus, or enhance your overall
                        well-being, meditation offers a path to inner peace.
                        Take a moment each day to quiet your mind, and
                        rediscover the peace that resides within you.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default SinglePost;
