import React from 'react'
import Intern from '../assets/Intern.pdf';
import './Project.css';

const Experience = () => {
  return (
    <div className='flex overflow-y-auto h-full no-scrollbar'><section class="text-gray-600 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Frontend Developer Intern</h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">At <a href="https://fathershops.com/" target="_blank"><b><u>FatherShops</u></b></a>, Dehradun, Uttarakhand, India - December,2022 to May,2023.</p>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Worked closely with senior developers to learn industry best practices and gain hands-on experience in modern front-end development techniques.</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Actively participated in daily stand-up meetings and sprint planning sessions to ensure timely project delivery.</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Developed reusable React components and implemented efficient state management using Redux.</span>
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="title-font font-medium">Stayed up-to-date with the latest trends and advancements in ReactJS and front-end development through continuous learning and self-study.</span>
          </div>
        </div>
      </div>
      <a href={Intern} target='_blank'><button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Certificate</button></a>
    </div>
  </section></div>
  )
}

export default Experience