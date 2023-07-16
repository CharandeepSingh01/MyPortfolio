import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import './App.css';
import logo  from "./assets/Logo_.png";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";
import Social from "./components/Social";
import Widget from "./components/Widget";
import Administrative from "./components/Administrative";
import Testimonial from "./components/Testimonial";
import Profile from "./components/Profile";
export default function IndexPage() {
 
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(!show);
    };
    
    return (
      <Router>
     
      <div className="flex flex-no-wrap">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-screen flex-col justify-between hidden sm:flex">
          <div>
              <div className="mt-10 h-16 w-full flex items-center justify-center px-3">
                  
                  <img src={logo} alt="logo" className="w-16 h-16" />
              </div>
              <ul className="mt-8 text-blue-50">
                  <Link to="/"><li className="flex w-full justify-between text-blue-50 hover:text-gray-300 hover:bg-indigo-800 focus:bg-indigo-800 cursor-pointer items-center py-3 px-8">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={4} y={4} width={6} height={6} rx={1} />
                              <rect x={14} y={4} width={6} height={6} rx={1} />
                              <rect x={4} y={14} width={6} height={6} rx={1} />
                              <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className="text-sm  ml-2 ">Dashboard</span>
                      </div>
                  </li></Link>
                  <Link to="/project"> <li className="flex w-full justify-between  hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                          <span className="text-sm  ml-2">Projects</span>
                      </div>
                  </li></Link>
                  <Link to="/qualification"> <li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="8 16 10 10 16 8 14 14 8 16" />
                              <circle cx={12} cy={12} r={9} />
                          </svg>
                          <span className="text-sm  ml-2">Qualifications</span>
                      </div>
                  </li></Link>
                  <Link to="/skill"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="7 8 3 12 7 16" />
                              <polyline points="17 8 21 12 17 16" />
                              <line x1={14} y1={4} x2={10} y2={20} />
                          </svg>
                          <span className="text-sm  ml-2">Skills</span>
                      </div>
                  </li></Link>
                  <Link to="/experience"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                          <span className="text-sm  ml-2">Experience</span>
                      </div>
                  </li></Link>
                  <Link to="/social"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="12 4 4 8 12 12 20 8 12 4" />
                              <polyline points="4 12 12 16 20 12" />
                              <polyline points="4 16 12 20 20 16" />
                          </svg>
                          <span className="text-sm  ml-2">Social Links</span>
                      </div>
                  </li></Link>
                  <Link to="/extracurricular"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="text-sm  ml-2">Extracurricular</span>
                      </div>
                  </li></Link>
              </ul>
              
          </div>
          <div className="w-full bg-indigo-900">
          <div className="flex items-center bg-indigo-900 pb-4 px-8 w-full">
                  <div className="w-10 h-10 bg-cover rounded-md mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                  </div>
                  <div>
                      <p className="text-blue-50 text-sm font-medium">Charandeep Singh</p>
                      <Link to="/profile"><p className="text-blue-50 text-xs">View Profile</p></Link>
                  </div>
              </div>
              <ul className="w-full px-8 flex items-center justify-between bg-indigo-800 ">
              <Link to="/contact"> <li className="cursor-pointer text-white pt-5 pb-3">
                    
                      <span class="material-symbols-outlined">
contacts
</span>
                  
                  </li></Link>
                  <Link to="/testimonial"> <li className="cursor-pointer text-white pt-5 pb-3">
                      
                      <span class="material-symbols-outlined">
forum
</span>
                  </li></Link>
                  <Link to="/widget"><li className="cursor-pointer text-white pt-5 pb-3">
                      
                      <span class="material-symbols-outlined">
widgets
</span>
                  </li></Link>
                  <Link to="/administrative"><li className="cursor-pointer text-white pt-5 pb-3">
                      
                      <span class="material-symbols-outlined">
admin_panel_settings
</span>
                  </li></Link>
              </ul>
          </div>
      </div>
      
      {show ? 
      <div className="w-full h-screen absolute bg-indigo-900 shadow md:h-screen flex-col justify-between flex ">
        
      <div>
      <div className="mt-10 h-16 w-full flex items-center justify-center px-3">
                  
                  <img src={logo} alt="logo" className="w-16 h-16" />
              </div>
          <ul className="mt-12 text-blue-50" onClick={showHandler}>
              <Link to="/"><li className="flex w-full justify-between text-blue-50 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={4} y={4} width={6} height={6} rx={1} />
                          <rect x={14} y={4} width={6} height={6} rx={1} />
                          <rect x={4} y={14} width={6} height={6} rx={1} />
                          <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                      <span className="text-sm  ml-2 ">Dashboard</span>
                  </div>
              </li></Link>
              <Link to="/project"> <li className="flex w-full justify-between  hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                      <span className="text-sm  ml-2">Projects</span>
                  </div>
              </li></Link>
              <Link to="/qualification"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                          <circle cx={12} cy={12} r={9} />
                      </svg>
                      <span className="text-sm  ml-2">Qualifications</span>
                  </div>
              </li></Link>
              <Link to="/skill"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                      <span className="text-sm  ml-2">Skills</span>
                  </div>
              </li></Link>
              <Link to="/experience"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                      </svg>
                      <span className="text-sm  ml-2">Experience</span>
                  </div>
              </li></Link>
              <Link to="/social"><li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="12 4 4 8 12 12 20 8 12 4" />
                          <polyline points="4 12 12 16 20 12" />
                          <polyline points="4 16 12 20 20 16" />
                      </svg>
                      <span className="text-sm  ml-2">Social Links</span>
                  </div>
              </li></Link>
              <Link to="/extracurricular"> <li className="flex w-full justify-between hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                  <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <circle cx={12} cy={12} r={3} />
                      </svg>
                      <span className="text-sm  ml-2">Extracurricular</span>
                  </div>
              </li></Link>
          </ul>
          
      </div>
      <div className="w-full bg-indigo-900">
      <div className="flex items-center bg-indigo-900 pb-4 px-8 w-full">
              <div className="w-10 h-10 bg-cover rounded-md mr-3">
                  <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
              </div>
              <div>
                  <p className="text-blue-50 text-sm font-medium">Charandeep Singh</p>
                  <Link to="/profile"><p className="text-blue-50 text-xs" onClick={showHandler}>View Profile</p></Link>
              </div>
          </div>
          <ul className="w-full px-8 flex items-center justify-between bg-indigo-800 " onClick={showHandler}>
          <Link to="/contact"> <li className="cursor-pointer text-white pt-5 pb-3">
                 
                  <span class="material-symbols-outlined">
contacts
</span>
              </li></Link>
              <Link to="/testimonial"> <li className="cursor-pointer text-white pt-5 pb-3">
                 
                  <span class="material-symbols-outlined">
forum
</span>
              </li></Link>
              <Link to="/widget"> <li className="cursor-pointer text-white pt-5 pb-3">
                  
                  <span class="material-symbols-outlined">
widgets
</span>
              </li></Link>
              <Link to="/administrative"> <li className="cursor-pointer text-white pt-5 pb-3">
                 
                  <span class="material-symbols-outlined">
admin_panel_settings
</span>
              </li></Link>
          </ul>
      </div>
  </div> : null}
      
     
      {!show ? <div className="container mx-auto md:px-10  py-10 h-screen md:w-4/5 w-11/12 overflow-y-hidden overflow-x-hidden">
      <button style={{position:"fixed", zIndex:"9999"}} className="toggle-bar" onClick={showHandler}><i class="fa fa-bars toggle-bar h-18 w-18 ico"></i></button>
          <div className="w-full h-full rounded ">
          <Routes>
             
          <Route path="/" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/administrative" element={<Administrative />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/social" element={<Social />} />
          <Route path="/profile" element={<Profile />} />
              
              </Routes>
          </div> 
      </div>: null}
  </div>
  </Router>
    );
}
