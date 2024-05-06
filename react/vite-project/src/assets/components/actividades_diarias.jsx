
import '../../index.css'
import React from "react";


import { Eventos } from './eventos';
import { Courses } from '../components/prueba/courses';
import { Filters } from '../components/prueba/filters';
import { NextEvent } from '../components/prueba/nextEvent';
import { ListaEvent } from './listaEvent';

export function Actividades_diarias() {

  

    return (

<div className="max-w-[90rem]  m-5  ">
    <div className="grid  grid-cols-1  min-[430px]:grid-cols-2   xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8">
        <NextEvent />
        <Courses />
        <Filters />
    </div>
<div className='grid grid-cols-2'>
    <div className="grid col-span-1 gap-1 grid-cols-2 sm:gap-5  sm:h-[30rem] mb-32  ">


       
        <div className="overflow-y-auto scrollbar-hide size- col-span-1 bg-sky-600 rounded-3xl ">
            <h1 className="text-center text-2xl text-bold mt-4 mb-4 text-white">Actividades del día 25 de abril</h1>
          
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
        </div>

 <div className="grid    h-full sm:h-[30rem]  ">
       
 <div className="overflow-y-auto scrollbar-hide col-span-1 bg-sky-600 rounded-3xl ">
            <h1 className="text-center text-2xl text-bold mt-4 mb-4 text-white">Actividades del día 25 de abril</h1>
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
        </div>
   </div>


    </div>
    <div className="col-start-2 ">
    <div className='grid grid-cols-2'>

    <div className="grid overflow-y-auto scrollbar-hide text-center items-center t m-5 mt-0 col-span-1 bg-sky-600 rounded-3xl h-[10rem] ">
    <h1 className="text-center items-center text-4xl text-bold mt-4 mb-4 text-white">Fecha</h1>


    </div>

    <div className="grid overflow-y-auto scrollbar-hide text-center items-center t m-5 mt-0 col-span-1 bg-sky-600 rounded-3xl h-[10rem] ">
    <h1 className="text-center items-center text-4xl text-bold mt-4 mb-4 border m-2 mt-0  text-white border-white rounded-full px-3 py-2 ">25/04/24</h1>


    </div>


    </div>

    <div className="grid  overflow-y-auto text-center  m-5 mt-0 col-span-1 bg-sky-600 rounded-3xl h-[19rem] ">
    <h1 className="text-center text-4xl text-bold m-1 text-white">Estadisticas</h1>

    <div className='grid grid-cols-2'>

  <div className='grid'>
  <h1 className="text-center text-2xl font-bold m-1 text-white">Actividades del día completadas</h1>
  <div className="flex flex-col items-center  border m-2 mt-0 rounded-full  border-white  text-white">
    <span className="m-2">4/5</span>
    <div className='flex'>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    </div>
  </div>
</div>


<div className='grid'>
  <h1 className="text-center text-2xl font-bold m-1 text-white">Actividades de la semana completadas</h1>
  <div className="flex flex-col items-center  border m-2 mt-0 rounded-full  border-white  text-white">
    <span className="m-2">4/5</span>
    <div className='flex'>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10   dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10   dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    </div>
  </div>
</div>

 </div>
    </div>

    </div>
    </div>
   
</div>

 );
 }


  