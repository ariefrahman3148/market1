"use client"
import React, { useState } from 'react';
import Slide from './Slide';
import Carda from './Card';
import { Button, Card, Navbar } from 'flowbite-react';

export default function Home() {

    const menu = (link, title) =>{
        return <>
            <a className='md:flex-shrink text-zinc-500 my-auto text-sm md:text-lg' href={link}>{title.toUpperCase()}</a>
        </>
    }
    const [toggle, settoggle] = useState(false);

    return (
        <>
        <div className='sticky top-0 z-10'>
        <Navbar
            fluid={true}
            // rounded={true}
            // className='bg-zinc-900'
            >
            <div className="block md:hidden">
                <Navbar.Brand href="https://flowbite.com/">
                <div className="flex-shrink text-3xl font-bold flex">
                    <div>LOGO</div>
                </div>
            </Navbar.Brand></div>
            
            <div className="hidden md:block flex-auto">
                <div className='container w-100 flex px-10 mx-auto py-4 space-x-6 '>
                <div className="flex-1 flex space-x-4 hidden md:block">
                    {menu('/','categories')}
                    {menu('/','Brands')}
                    {menu('/','About Us')}
                </div>
                <div className="flex-shrink md:flex-1 flex  md:justify-center text-3xl font-bold flex">
                    <div>LOGO</div>
                </div>
                <div className="md:flex-1 md:flex md:justify-end text-right space-x-6 hidden md:block">
                    {menu('/','Account')}
                    {menu('/','Chart')}
                </div>
                </div>
            </div>
                <div className="block md:hidden">
                    <Navbar.Toggle onClick={() => settoggle(!toggle)}/>
                    {toggle && (
                        <>
                        <div className='transition-all delay-900 w-[100%] h-[100vh] z-1 absolute top-0 left-0 bg-zinc-100 text-right p-3'>
                            <Navbar.Toggle onClick={() => settoggle(!toggle)}/>
                            <div className="flex flex-col space-y-4 p-4">
                                {menu('/','categories')}
                                {menu('/','Brands')}
                                {menu('/','About Us')}
                                {menu('/','Account')}
                                {menu('/','Chart')}
                            </div>
                        </div>
                        
                        </>
                    )}
                </div>
            </Navbar>
            </div>

            {/* section 1 */}
            <Slide />

        
            {/* section 2 */}
            <div className="container grid md:grid-cols-3 gap-4 px-4 py-4  mx-auto my-10 grid-cols-1">
                <div className=''>
                    <Carda title={'Tes'} image={'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'} />
                </div>
                <div className=''>
                    <Carda title={'Logo'} image={'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
                </div>
                <div className=''>
                    <Carda title={'New'} image={'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80'} />
                </div>
            </div>


            {/* section 3 */}
            <div className="grid container md:grid-cols-2 gap-4 py-4 mx-auto my-10 grid-cols-1">
                <div className='grid h-full content-center text-center justify-items-center mx-6'>
                <img
                    className="h-max-[90vh] shadow-lg"
                    src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt="Bonnie image"
                />
                </div>
                <div className='grid h-full content-center text-center justify-items-center mx-6' >
                <p className="text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div className='my-5'>
                    <Button size="md" color='gray' className='text-zinc-500'>
                    View Product
                    </Button>
                </div>
                </div>
            </div>

            {/* section 4 */}
            <div className="grid container md:grid-cols-2 gap-4 py-4 mx-auto my-10 grid-cols-1 text-zinc-500">
                <div className='md:order-last grid h-full content-center text-center justify-items-center mx-6'>
                    <img
                        className="h-max-[90vh] shadow-lg"
                        src="https://images.unsplash.com/photo-1638656749922-9158fd414393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="Bonnie image"
                    />
                </div>
                <div className=' grid h-full content-center text-center justify-items-center mx-6 ' >
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <div className='my-5'>
                        <Button size="md" color='gray'>
                        View Product
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-full p-20 bg-zinc-200'>
                <div className='flex font-sans gap-6 flex-col md:flex-row'>
                    <div className='flex-1 text-zinc-500'>
                        <div className='text-black pb-2'>Main Menu</div>
                        <div className='pb-2'>Categories</div>
                        <div className='pb-2'>About Us</div>
                    </div>
                    <div className='flex-1 text-zinc-500'>
                        <div className='text-black pb-2'>Terms & Condition</div>
                        <div className='pb-2'>Privacy</div>
                        <div className='pb-2'>Policy</div>
                    </div>
                    <div className='grow text-3xl font-semibold tracking-tight'>
                        <div>BE OUR FRIENDS</div>
                        <div>#SHAFRIENDS</div>
                        <div className='pt-3 text-sm font-normal tracking-normal text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}