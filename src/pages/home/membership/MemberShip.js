import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MemberShip = () => {
  return (
    <div className="relative w-full bg-blue-300 text-white overflow-hidden pb-12">
      <div className="absolute inset-0 bg-cover bg-no-repeat opacity-15 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vAZgKtu42Lpm-FY3nc17ReUbB-NFnurwoQ&usqp=CAU')]"></div>
      <div className="relative z-10">
        <div className='pt-12 mx-3'>
            <h2 className='text-2xl md:text-4xl font-bold mb-2'>Your MemberShips </h2>
            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ab magni vitae!</p>
        </div>
        
      <div className="flex flex-wrap justify-around align-middle gap-x-5 mx-12 my-5 md:mx-32 md:mt-12 ">
      <div class="max-w-sm rounded overflow-hidden shadow-lg  my-5 py-5 bg-white">
      <SettingsIcon 
        style={{ 
          fontSize: '80px',  
          color: '#fff', 
          borderRadius: '50%', 
          backgroundColor: 'rgb(239 68 68)',  
          padding: '8px' ,
          borderWidth:5,
          borderColor: 'rgb(239 68 68)'
        }} 
      />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2 text-red-500">The Coldest Sunset</div>
          <p class="text-slate-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
         <a href="#test" className='text-red-500'>View More<span><KeyboardArrowRightIcon /></span></a>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg my-5 py-5 bg-white">
      <SettingsIcon 
        style={{ 
          fontSize: '80px',  
          color: '#fff', 
          borderRadius: '50%', 
          backgroundColor: 'rgb(59 130 246)',  
          padding: '8px' ,
          borderWidth:5,
          borderColor: 'rgb(59 130 246)'
        }} 
      />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2 text-blue-500">The Coldest Sunset</div>
          <p class="text-slate-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
         <a href="#test" className='text-blue-500'>View More<span><KeyboardArrowRightIcon /></span></a>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg my-5 py-5 bg-white">
      <SettingsIcon 
        style={{ 
          fontSize: '80px',  
          color: '#fff', 
          borderRadius: '50%', 
          backgroundColor: 'rgb(234 179 8)',  
          padding: '8px' ,
          borderWidth:5,
          borderColor: 'rgb(234 179 8)'
        }} 
      />
        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2 text-yellow-500">The Coldest Sunset</div>
          <p class="text-slate-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
         <a href="#test" className='text-yellow-500'>View More<span><KeyboardArrowRightIcon /></span></a>
        </div>
      </div>

      <div className='pt-5 mx-3'>
            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ab magni vitae!</p>
            <div className='mt-5'>
                <a href="#btn" className='h-20 w-20 py-2 px-5 bg-red-500 rounded-md hover:bg-white hover:text-red-500 uppercase font-bold'>Join Now</a>
            </div>
        </div>
      
    </div>

      </div>
    </div>
  )
}

export default MemberShip