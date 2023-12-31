import React from 'react'
import './Project.css'
import theprayer from '../assets/pray.png'
import stackcode from '../assets/stack.png'
import reactolife from '../assets/reactolife.png'
import myportfolio from '../assets/myprofile.png'

const Project = () => {
  return (
    <>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
      Projects
    </h1>
    <div className=' h-screen overflow-y-auto overflow-x-hidden pb-8 no-scrollbar'>

  
  <div class="sm:w-full mb-8 px-4 mt-12">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object- object-center h-full w-full" src={theprayer} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Prayers</h2>
        <p class="leading-relaxed text-base">A music player based on ReactJs, Formspree, Router Dom that consists of all the religious based Hymns.</p>
        <div class="px-6 flex flex-wrap">
        <a href="https://the-prayers-charandeep.vercel.app/" target="_blank" class="flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button></a>
       <a href="https://github.com/CharandeepSingh01/ThePrayers" target="_blank" class="flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button></a>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object- object-center h-full w-full" src={stackcode} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Stack-Code</h2>
        <p class="leading-relaxed text-base">A text-editor that consists of 4 fields i.e. HTML, CSS , JS and output frame. Made with ReactJs, Codemirror Library.</p>
        <div class="px-6 flex flex-wrap">
        <a href="https://charandeepsingh01.github.io/Stack-Code/" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button></a>
        <a href="https://github.com/CharandeepSingh01/Stack-Code" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button></a>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object- object-center h-full w-full" src={reactolife} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Reactolife</h2>
        <p class="leading-relaxed text-base">A social media application based on MERN Stack with Bootstrap, JWT Authentication, REST APIs (Tested with Postman), Multer,etc. </p>
        <div class="px-6 flex flex-wrap">
        <a href="https://reactolife.vercel.app/login" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button></a>
        <a href="https://github.com/CharandeepSingh01/Reactolife" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button></a>
        </div>
      </div>
      <div class="sm:w-full mb-10 px-4 mt-20 pb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object- object-center h-full w-full" src={myportfolio} />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">MyPersonal</h2>
        <p class="leading-relaxed text-base">A web application based on ReactJs, Redux/Redux-Toolkit, Firebase, TailwindCSS, Tailwind UI Kits that contains all the details of my career profile.</p>
        <div class="px-6 flex flex-wrap">
        <a href="https://www.charandeepsingh.tech/" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded">Visit</button></a>
        <a href="https://github.com/CharandeepSingh01/MyPortfolio" target="_blank" class=" flex mx-auto flex-wrap"> <button class="flex mx-auto mt-6 text-white bg-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Github</button></a>
        </div>
      </div>

</div>
</>

  )
}

export default Project