import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <section id="about" className="py-10">
                <div className="container mx-auto md:px-28 sm:px-auto">
                    <h2 className="text-3xl md:text-4xl text-yellow-300 font-bold text-center">About Me</h2>
                    <hr className="my-4 border-yellow-200" />
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">Name :</h2>
                            <h2 className="text-xl font-normal text-yellow-100">Siluni Nimahara Rupasinghe</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">Birthday :</h2>
                            <h2 className="text-xl font-normal text-yellow-100">3rd FEB 2002</h2>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row gap-6 pl-4">
                        <h2 className="text-xl font-normal">University:</h2>
                        <h2 className="text-xl font-normal text-yellow-100">
                            Sri Lanka Institute of Information Technology (SLIIT) (2022-current)<br />
                            Bsc (Hons) In Information Technology Specializing in Software Engineering<br />
                            CGPA- 3.4/4.0
                        </h2>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">School:</h2>
                            <h2 className="text-xl font-normal text-yellow-100">
                                Anula Vidyalaya, Nugegoda (2008-2021)<br />
                                AL Stream- Physical Science
                            </h2>
                        </div>
                    </div>

                    <div className="mt-8">
                        <hr className="my-4 border-yellow-300 " />
                        <h2 className="text-xl font-normal text-yellow-100 pl-4">EXPERIENCE</h2>
                        <div className="mt-4 pl-8">
                            <div className="relative">
                                <div className="border-l-2 border-yellow-300 absolute h-full left-8"></div>
                                <div className="flex items-center mb-6 relative">
                                    <div className="bg-yellow-300 h-6 w-6 rounded-full absolute left-5 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBriefcase} className="text-white text-xs" />
                                    </div>
                                    <div className="ml-12">
                                        <h3 className="text-lg font-normal text-yellow-100">Software Engineering Intern</h3>
                                        <Link to="https://www.linkedin.com/company/oxzonai/posts/?feedView=all">
                                        <p>OXZON AI - UK</p>
                                        </Link>
                                        <span>October 2024 - Present</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-8 relative">
                                    <div className="bg-yellow-300 h-6 w-6 rounded-full absolute left-5 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBriefcase} className="text-white text-xs" />
                                    </div>
                                    <div className="ml-12">
                                        <h3 className="text-lg font-normal text-yellow-100 ">Finance Associate</h3>
                                        <Link>
                                        <p>Sellwin Holdings (Pvt) Ltd</p>
                                        </Link>
                                        <span>March 2023 - September 2024</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6 relative">
                                    <div className="bg-yellow-300 h-6 w-6 rounded-full absolute left-5 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBriefcase} className="text-white text-xs" />
                                    </div>
                                    <div className="ml-12">
                                        <h3 className="text-lg font-normal text-yellow-100">Intern Finance</h3>
                                        <Link>
                                        <p>Sellwin Holdings (Pvt) Ltd</p>
                                        </Link>
                                        <span>October 2022 - March 2023</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
