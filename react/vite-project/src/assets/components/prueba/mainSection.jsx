import '../../../index.css'
import { Calendario } from '../calendario';
import { Eventos } from '../eventos';
import { Courses } from './courses';
import { Filters } from './filters';
import { NextEvent } from './nextEvent';

 export function MainSection() {

  

 return (
  
    <div className="max-w-[90rem]  m-4 text lg:m-auto">
    <div className="grid  grid-cols-1  min-[430px]:grid-cols-2   xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8">
        <NextEvent />
        <Courses />
        <Filters />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-10 gap-y-4 h-[70rem] sm:h-[30rem] mb-32  ">
        <Calendario/>
        <div className="overflow-y-auto scrollbar-hide  col-span-2  bg-sky-600 rounded-3xl ">
            <h1 className="text-center titulo mt-4 mb-4 text-white">Jueves 25 Abril 2024</h1>
            <Eventos/>
            <Eventos />
            <Eventos />
            <Eventos />
            <Eventos />
            <Eventos />
        </div>
    </div>
</div>

 );
 }