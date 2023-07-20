import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <>
    <div class="px-6 flex flex-wrap ">
      Projects
    </div>
    <div className=' h-screen overflow-y-auto overflow-x-hidden pb-8 no-scrollbar'>

  
  <div class="sm:w-full mb-8 px-4 mt-16">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Prayers</h2>
        <p class="leading-relaxed text-base">A music player based on ReactJs, Formspree, Router Dom that consists of all the religious based Hymns.</p>
        <div class="px-6 flex flex-wrap">
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button>
        <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Stack-Code</h2>
        <p class="leading-relaxed text-base">A text-editor that consists of 4 fields i.e. HTML, CSS , JS and output frame. Made with ReactJs, Codemirror Library.</p>
        <div class="px-6 flex flex-wrap">
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button>
        <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Reactolife</h2>
        <p class="leading-relaxed text-base">A social media application based on MERN Stack with Bootstrap, JWT Authentication, REST APIs (Tested with Postman), Multer,etc. </p>
        <div class="px-6 flex flex-wrap">
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button>
        <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20 pb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">MyPersonal</h2>
        <p class="leading-relaxed text-base">A web application based on ReactJs, Redux/Redux-Toolkit, Firebase, TailwindCSS, Tailwind UI Kits that contains all the details of my career profile.</p>
        <div class="px-6 flex flex-wrap">
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button>
        <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button>
        </div>
      </div>

</div>
</>

  )
}

export default Project