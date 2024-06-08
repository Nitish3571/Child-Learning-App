import React from 'react'
import CarouselComp from '../../components/carouselComp'
import CardHome from './card/CardHome'
import MemberShip from './membership/MemberShip'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {
  return (
    <>
    <CarouselComp />
    <CardHome />
    <MemberShip />

    <div className="relative w-full bg-blue-300 text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-no-repeat opacity-80 bg-[url('https://media.istockphoto.com/id/925644610/photo/rural-girls-studying-in-light-bulb.jpg?s=2048x2048&w=is&k=20&c=DCoxvemW5bYLjHnaXnyKrP0Za3cijhQ_cRU9HeNJDPY=')]"></div>
      <div className="relative z-10 py-16">
      <div class="mx-5 my-5 md:mx-32 md:mt-12 rounded overflow-hidden shadow-lg  py-5 bg-white">
  
        <div class="px-6 py-2">
          <div class="font-bold text-3xl mb-2 text-red-500">Testimonials </div>
          <p class="text-slate-500 italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! consectetur adipisicing elit.
            Voluptatibus quia, nulla! 
          </p>
          <p class="text-slate-500 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! 
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
          <p className=" px-3 text-sm font-semibold text-slate-500 mr-2 mb-2">
            Nitish Rana, Gujarat
          </p>
          <div class="px-6 pt-2 pb-2">
         <a href="#test" className='text-red-500'>Read More<span><KeyboardArrowRightIcon /></span></a>
          </div>

        </div>
      </div>
      </div>
    </div>

    </>
  )
}

export default Home