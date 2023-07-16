import React from 'react'
import '../Noscrollbar.css'
import './Dashboard.css'
import coverphoto from '../assets/covers.png'

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
                          <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">About Me</button>
                          <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm"><a href="#">My CV</a></button>
                      </div>
                  </div>
                  <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40 px-4">
                      <div className="relative sm:w-2/3 w-11/12">
                          <img src={coverphoto} alt="Sample Page" role="img" />
                      </div>
                  </div>
              </div>
          
          {/* Code block ends */}
          <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-16 lg:px-8 py-26 mt-8 mx-8">
    <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Interactive
                </p>
                <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Interactivity between me and web technologies is the key of my success.
                </h4>
                <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
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
                                Live modifications
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
                                Data tracker
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
                                24/24 support
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
                                Free tips to improve work time
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

<div class="w-full p-12 bg-white">
    <div class="flex items-end justify-between mb-12 header">
        <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
                Lastest articles
            </p>
           
        </div>
        </div>
        
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/1.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Video
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Work at home
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/2.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/3.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/4.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/5.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/6.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>


      </div>
    
  )
}

export default Dashboard