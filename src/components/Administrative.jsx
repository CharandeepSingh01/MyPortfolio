import React from 'react'

const Administrative = () => {
  return (
    <div className='overflow-y-auto h-full'>
    <div className="container mx-auto flex flex-col items-center mt-2 overflow-y-auto overflow-x-hidden">
    <div className='overflow-y-auto flex '>
      <section class="text-gray-600 body-font overflow-y-auto">
  <div class="container px-5 py-8 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Admin Authentication required to access the editable features.</h1>
      <p class="leading-relaxed mt-4">Successful authentication enables access to Widget page to dynamically add new details in other sections. </p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Admin</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Enter Password</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Re-enter Password</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Confirm</button>
      <p class="text-xs text-gray-500 mt-3">Credentials for Authentication.</p>
    </div>
  </div>
</section>
    </div>
    </div>
    </div>
  )
}

export default Administrative