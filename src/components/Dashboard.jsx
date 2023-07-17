import React from 'react'
import '../Noscrollbar.css'
import './Dashboard.css'
import coverphoto from '../assets/covers.png'
import { Link } from 'react-router-dom';
import pdf from '../assets/CharanCV.pdf';

const Dashboard = () => {
  
        return (
          <div className="bg-color overflow-y-auto h-screen -mx-10 -m-14 overflow-x-hidden no-scrollbar margin-sides">
          {/* Code block starts */}
          
              
              <div className="w-full  overflow-x-hidden">
                  <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                      <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                      <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight px-4">Code is poetry, and the web is my canvas</h1>
                      </div>
                      <div className="flex justify-center items-center mb-10 sm:mb-20">
                       <Link to="/profile"><button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">About Me</button></Link>
                       <a href={pdf} target='_blank'><button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">My CV</button></a>
                      </div>
                  </div>
                  <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40 px-4">
                      <div className="relative sm:w-2/3 w-11/12">
                          <img src={coverphoto} alt="Sample Page" role="img" />
                      </div>
                  </div>
              </div>
          
          {/* Code block ends */}
          <div class="relative max-w-screen-xl p-4 px-12 mx-auto bg-white dark:bg-gray-800 sm:px-16 lg:px-8 py-26 mt-8 ">
    <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Interactive
                </p>
                <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Interactivity between me and web technologies is the key of accomplishment.
                </h4>
                <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    Understanding the web is the key of success. I am always up to date with the latest technologies and I am always ready to learn more.
                </p>
                <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Adaptation
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Creativity
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                 Learn-Unlearn-Relearn
                            </span>
                        </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                        <div class="flex">
                            <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Improvisation
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div class="relative space-y-4">
                    <div class="flex items-end justify-center space-x-4 lg:justify-start">
                        <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="../assets/card.png" alt="1"/>
                        <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/images/landscape/4.jpg" alt="2"/>
                    </div>
                    <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                        <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="/images/landscape/3.jpg" alt="3"/>
                        <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/images/object/9.jpg" alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section className='mx-8'>
    <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800 mt-16">
        <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 lg:w-1/2">
                <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                        Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.
                    </h2>
                    <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                    </p>
                    <div class="w-full md:w-1/3">
                        <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            See more
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full px-8 lg:w-1/2">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                Responsive Elements
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                                All elements are responsive and provide the best display in all screen size. It&#x27;s magic !
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                Flexible Team
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                                Flexibility is the key. All team is available 24/24 and joinable every day on our hotline.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                3
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                Ecologic Software
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                                Our Software are ecologic and responsable. Green is not just a color, it&#x27;s a way of life.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<div class="text-gray-900 pt-12  pb-14  bg-white px-6">
  <div class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
    <div class="flex flex-col items-center sm:px-5 md:flex-row">
      <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
        <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
          <div class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block">
            <p class="inline">
              <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </p>
            <p class="inline text-xs font-medium">New</p>
          </div>
          <a class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Write anything. Be creative.</a>
          <div class="pt-2 pr-0 pb-0 pl-0">
            <p class="text-sm font-medium inline">author:</p>
            <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
            <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
            <p class="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="block">
          <img
              src="https://t4.ftcdn.net/jpg/02/43/63/09/360_F_243630931_Hc5wtf0sRxvLKGv4jPy8fuxbQp9v6oXE.jpg" class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
      <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://1.bp.blogspot.com/-lxdcxLC5nu0/XcGrLzEn6AI/AAAAAAAAA4w/-xMrehC4j6g5mTM7ahy2RMWsXb9aXRbnACNcBGAsYHQ/s1600/Capture.JPG" class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">Entertainment</p>
        <a class="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
        <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div class="pt-2 pr-0 pb-0 pl-0">
          <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
          <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
          <p class="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
        </div>
      </div>
      <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">Entertainment</p>
        <a class="text-lg font-bold sm:text-xl md:text-2xl">Improving your day to the MAX</a>
        <p class="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div class="pt-2 pr-0 pb-0 pl-0">
          <a class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
          <p class="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
          <p class="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
        </div>
      </div>
      
    </div>
  </div>
</div>

    
<section class="bg-indigo-800 px-8">
    <div class="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    5000
                </span>
                <span class="text-indigo-200">
                    +
                </span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Lines of code
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    8
                </span>
                <span class="text-indigo-200">
                    +
                </span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Tech used
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    10
                </span>
                <span class="text-indigo-200">
                    +
                </span>
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Finished projects
            </p>
        </div>
        <div>
            <h5 class="text-5xl font-bold text-white">
                <span class="inline text-white">
                    0-1
                </span>
                
            </h5>
            <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Year experience
            </p>
        </div>
    </div>
    
</section>

<section class="max-w-screen-xl px-4 py-12 mx-auto bg-gray-900 dark:bg-gray-800 sm:py-16 sm:px-6 lg:px-8 lg:py-20 mt-4">
    <div class="max-w-4xl mx-auto text-center px-8">
        <h2 class="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
            I am always up for the opportunity to work with others.
        </h2>
        <p class="mt-3 text-base leading-7 text-white sm:mt-4">
            Feel confident in choosing me as the best candidate for your tech needs.
        </p>
    </div>
    <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-1 sm:gap-8 px-8">
        <div>
            <p class="text-5xl font-extrabold leading-none text-white">
                To get in touch
            </p>
            <p class="mt-2 text-base font-medium leading-6 text-white">
                Just reach me through below button
            </p>
        </div>
        </div>
    <div class="flex p-4 mx-auto mt-4 w-52">
        <Link to="/contact"><button type="button" class="w-full px-14 py-2  text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md bg-gradient-to-r from-blue-800 to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            Contact
        </button></Link>
    </div>
</section>



      </div>
    
  )
}

export default Dashboard