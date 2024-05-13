'use client'
import Link from 'next/link';
import React from 'react'
const About = () => {
  return (
    <div>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      // src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"

                      src="https://www.datasciencecentral.com/wp-content/uploads/2022/07/Smart-Learning-and-Education1.jpeg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1u77fTqHle6lKsO79EH6UniMZqKfeGIN8g&s"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDCzGJo5CGh5rYsGe-uYfvzgZAweAno8p_A&s"

                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      // src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeivCQaBQaSgpDvc0RBCI8PIFtjUO1ISvUpw&s"

                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">


                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px]">
                  Make your teaching and learning experience better and easier.
                </h2>
                <p className="mb-5 text-base dark:text-black sm:text-[15px]/[15px] ">
                Welcome to Learn Palette, where learning and innovation collide. With an emphasis on whiteboard solutions, we are enthusiastic about utilizing cutting-edge technology to revolutionize the educational experience.

At Learn Palette, we recognize how important it is for the classroom to shape children's minds. We are committed to developing technologies that improve teamwork, stimulate innovation, and motivate learning because of this. Our goal is to empower teachers and students by offering dynamic, adaptable, and intuitive whiteboard solutions that revolutionize teaching and learning.

Our team, which possesses extensive experience in both education and technology, is motivated by a common goal of transforming conventional teaching techniques. We think every classroom should have the resources necessary to promote active engagement, faster dynamic relationships, and accommodate a variety of learning styles. 
                </p>
                <p className="mb-8 text-base text-body-color text-dark dark:text-black-6">
                
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
