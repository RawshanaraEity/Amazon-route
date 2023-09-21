import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex gap-5'>
         
            <div className='w-[20%] bg-red-300'>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/editProfile'>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[20%] bg-orange-500'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;