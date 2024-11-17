import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftLayout from '../Layouts/LeftLayout';
import RightLayout from '../Layouts/RightLayout';

const MainLayout = () => {
    return (
        <div className='font-poppins w-4/5 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <Latest></Latest>
                </section>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-12 mt-7'>
                <aside className='col-span-3'>
                    <LeftLayout></LeftLayout>
                </aside>
                <section className='col-span-6 '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightLayout></RightLayout>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;