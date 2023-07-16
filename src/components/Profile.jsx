import React from 'react'
import profimg from "../assets/img.png";

const Profile = () => {
  return (
	<>
	<div className='overflow-y-auto  h-full'>
	
    
        <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-xl p-5 border-4 border-solid border-blue-800 overflow-y-auto ">
    <img class="w-32 h-32 rounded-full mx-auto" src={profimg} alt="Profile picture" />
    <h2 class="text-center text-2xl font-semibold mt-3">Charandeep Singh Chawla</h2>
    <p class="text-center text-gray-600 mt-1">Aspiring Software Engineer</p>
    <div class="flex justify-center mt-5 px-8">
      <a href="https://www.instagram.com/the_conquerorguy/" target='_blank' class="text-blue-500 hover:text-blue-700 mx-3">Instagram</a>
      <a href="https://www.linkedin.com/in/charandeepsingh01/" target='_blank' class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="https://github.com/CharandeepSingh01" target='_blank' class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Bio</h3>
      <p class="text-gray-600 mt-2">Detail-oriented, organized and   meticulous student. Well-versed with Web Development skills. Excellent in Project Management, a strong candidate who works well under pressure, quick learner and exudes positivity. Enthusiastic team player ready to contribute towards company success.</p>
    </div>
  </div>
    </div>
	
	
	</>
  )
}

export default Profile