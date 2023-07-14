import React from "react";
import { GiNotebook } from "react-icons/gi";
import { useSelector } from "react-redux";
import MeetrDream from '../Assets/MeetUrDream.jpg'
import GosMart from '../Assets/GosMart.jpg'
import  EasyStore from '../Assets/EasyStore.png'
const Projects = () => {
  const {ColorNameFirst} = useSelector(state => state.Color);
  return (
    <div id="Project">
      <div className="flex gap-2 items-center border border-gray-500 w-32 justify-center  py-1 rounded-2xl">
        <GiNotebook className="text-slate-200 " size={15} />
        <span className="text-slate-200 text-sm">PORTFOLIO</span>
      </div>
      <div className="py-14">
        <h1 className="text-white text-3xl lg:text-5xl">
          Featured <span style={{color:ColorNameFirst}} >Projects</span>
        </h1>
        <h1 className="mt-10 border  w-20 text-center rounded-full" style={{color:ColorNameFirst,borderColor:ColorNameFirst}}>WebApps</h1>
          <div className="mt-8   flex flex-wrap gap-20 justify-center md:justify-start">
          <a className="cursor-pointer" href="https://www.meeturdream.com/"> <img src={MeetrDream} className="max-w-[400px]  max-h-[400px] rounded-xl hover:-translate-y-6 duration-500"/></a>
          {/* <a className="cursor-pointer" href="https://www.easystore.online/"> <img src={GosMart} className="max-w-[400px]  max-h-[400px] rounded-xl hover:-translate-y-6 duration-500"/></a> */}
         <a className="cursor-pointer" href="https://www.easystore.online/"> <img src={EasyStore} className="max-w-[400px]  h-[260px] rounded-xl hover:-translate-y-6 duration-500"/></a>
          </div>
          <h1 className="mt-16 border text-[12px] w-20 text-center rounded-full" style={{color:ColorNameFirst,borderColor:ColorNameFirst}}>MobileApps</h1>
      </div>
    </div>
  );
};

export default Projects;
