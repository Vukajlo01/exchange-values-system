import React, { useEffect, useState } from 'react';
import IUser from '../../../interfaces/IUser';
import axios from 'axios';
import { API_URL } from '../../..';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { AiFillCreditCard } from 'react-icons/ai';

const UsersList: React.FC = () => {
    const [data, setData] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get<IUser[]>(API_URL + 'users');
                setData(response.data);
            } catch (error) {
                setData([]);
                //console.error('Error fetching data:', error);
                // Handle errors, display a message, or perform appropriate actions
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? <LoadingSpinner /> :
                <div className="p-2 bg-white dark:bg-transparent bg-opacity-60 rounded-lg shadow-lg mx-0 my-0">
                    <h1 className='text-gray-700 dark:text-gray-200 text-2xl font-medium'>Users</h1>
                    <p className="text-gray-700 dark:text-gray-200 mb-6 ml-1 my-2 text-justify font-medium" style={{ fontSize: 17.5 }}>
                        As an admin, you have access to powerful tools and features to manage user profiles.
                        Explore the user data, utilize verification process and quickly find the information
                        you need. <br />
                    </p>
                    {data.length !== 0 ?
                        <table className="w-full text-md text-left text-black dark:text-white">
                            <thead className="text-lg text-white bg-cyan-700">
                                <tr>
                                    <th scope="col font-semibold" className="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        City
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-1 py-3">
                                        Account Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Verification
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((user: IUser) => (
                                    !user.admin ? (
                                        <tr
                                            className="bg-white border-1 border-b-gray-950 dark:bg-slate-950 dark:border-gray-700"
                                            key={user.uid}
                                        >
                                            <td className="px-6 py-4">{user.first_name}</td>
                                            <td className="px-6 py-4">{user.surname}</td>
                                            <td className="px-6 py-4">{user.address}</td>
                                            <td className="px-6 py-4">{user.city}</td>
                                            <td className="px-6 py-4">{user.country}</td>
                                            <td className="px-6 py-4">{user.email}</td>
                                            <td className="px-6 py-4">
                                                {user.verified ? (
                                                    <div className='inline'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6 inline -mt-0.5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>&nbsp;&nbsp;Verified</span>
                                                    </div>
                                                ) : (
                                                    <div className='inline'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="crimson" className="w-6 h-6 inline -mt-0.5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                        </svg>
                                                        <span>&nbsp;&nbsp;Unverified</span>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    <button onClick={() => { }} className="px-5 py-1.5 bg-sky-700 text-white text-md rounded-lg hover:bg-sky-800">
                                                        <AiFillCreditCard className="inline -mt-1 mr-2 text-2xl" /> 
                                                        View Credit Cards Details</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (<></>)
                                ))}
                            </tbody>
                        </table>
                        : <div>
                            <h1 className="border border-cyan-700  bg-cyan-700 p-4 rounded-xl w-full text-xl font-semibold text-center text-white dark:text-white">
                                Sorry, there are no users to display at the moment. Check back later for an updated information.
                            </h1>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default UsersList;
