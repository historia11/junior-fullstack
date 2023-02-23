import React from 'react'
import image from "../assets/image.png"
import soho from '../assets/soho.png'
import danubis from '../assets/danubis.png'
import bridge from '../assets/bridge.png'

import Breakfast from '../assets/Breakfast.png'
import FreeWIfi from '../assets/FreeWIfi.png'
import kerja from '../assets/kerja.png'
import swim from '../assets/swim.png'
import Electricity from '../assets/Electricity.png'
import olahraga from '../assets/olahraga.png'




const Umkm = () => {
  return (

      
<>
        <div id='container' className='container bg-[#24AB700A] mx-auto '>
            <div className='flex justify-center'>
                <div className=' grow mx-5 item-centers'>
                    <h3 className='text-6xl font-semi-bold mx-8 my-10'>Find your perfect <br/>place to stay</h3>
                    <p className='mx-8'>We provide what you need to enjoy your <br />
                    holiday with family, Time to make another 
                    memorable moments. 
                    </p>
                </div>
                <div className='flex'>
                        <img src={image} alt="home" />
                </div>
            </div>  
        </div>


        <div className="bg-white">
            <div className="mx-auto py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl semi-bold mb-1">Products</h2>
                <ul className='flex flex-row gap-20 mx-5'>
                <li className=" gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a className="mx-auto">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src={soho} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">The Resident Soho</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
                    </a>
                </li>
                <li className=" gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a className="mx-auto">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src={danubis} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">Danubius Hotel Regents Park</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
                    </a>
                </li>
                <li className=" gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a className="mx-auto">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src={bridge} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">London Bridge Hotel</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
                    </a>
                </li>
                </ul>
            </div>
        </div>

<div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">We do our best facilities provide you</h1>
        <p className="mt-4 text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laborum quisquam. Facere quibusdam eum eos! Reiciendis suscipit pariatur, corporis rem deserunt vitae doloribus officia vero. Quas ea optio suscipit debitis!</p>
      </div>
      <div>
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:top-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                <div className="grid grid-cols-3 gap-6 ">
                  <div className="h-30 w-40 shadow-md rounded-md">
                    <img src={Breakfast} alt=""/>
                  </div>
                  <div className="h-50 w-40 shadow-md rounded-md">
                    <img src={FreeWIfi} alt=""/>
                  </div>
                  <div className="h-50 w-40 shadow-md rounded-md">
                    <img src={swim}alt="" />
                  </div>
                  <div className="h-50 w-40 shadow-md rounded-md">
                    <img src={Electricity}alt=""/>
                  </div>
                  <div className="h-50 w-40 shadow-md rounded-md">
                    <img src={kerja}alt="" />
                  </div>
                  <div className="h-50 w-40 shadow-md rounded-md">
                    <img src={olahraga}alt="" />
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
 </>
  )
}

export default Umkm