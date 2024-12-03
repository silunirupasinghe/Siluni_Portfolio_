import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../assets/pdf/Siluni Rupasinghe- Resume.pdf";
import {
    faCopyright,
    faDownload,
    faEnvelope,
    faLocationDot,
    faPaperPlane,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
    return (
        <>
            <section id="contact">
                <div className="container mx-auto md:px-28 sm:px-auto">
                    <h2 className="text-3xl md:text-4xl text-center text-yellow-300 font-bold">Contact</h2>
                    <hr className="my-4 border-yellow-200 mb-5" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        {/* Form Section */}
                        <div className="order-1 md:order-1 text-left">
                            <form className="max-w-sm lg:mx-10">
                                <div className="mb-2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-lg font-medium text-yellow-300 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Anne "
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-lg font-medium text-yellow-300 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Anne@gmail.com"
                                        required
                                    />
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-lg font-medium text-yellow-300 dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-black bg-yellow-300 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Submit
                                    <FontAwesomeIcon icon={faPaperPlane} className="ml-3 mr-3 text-xl" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Details Section */}
                        <div className="order-2 md:order-2 text-lg lg:pl-10">
                            <div className="text-lg mx-5 mb-4">
                                <a href={cv} target="_blank" rel="noopener noreferrer">
                                <button
                                    type="submit"
                                    className="text-black bg-yellow-300 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                        Download Resume
                                        <FontAwesomeIcon icon={faDownload} className="ml-3 mr-3 text-xl" />
                                    </button>
                                </a>
                            </div>

                            <div className="text-lg mx-5">
                                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300 text-lg" />
                                <span className="ml-2">: silunirupasinghe@gmail.com</span>
                            </div>

                            <div className="text-lg mx-5 my-2">
                                <FontAwesomeIcon icon={faPhone} className="mr-3 text-yellow-300 text-lg" />
                                <span>: +94 71 197 951</span>
                            </div>

                            <div className="text-lg mx-5 my-2 pb-2">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-3 text-yellow-300 text-lg" />
                                <span>: Colombo, Sri Lanka</span>
                            </div>

                            <div className="flex gap-5 pl-5">
                                <Link to={"https://www.linkedin.com/in/siluni-rupasinghe"}>
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://github.com/silunirupasinghe"}>
                                    <FontAwesomeIcon icon={faGithub} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://github.com/silunirupasinghe"}>
                                    <FontAwesomeIcon icon={faFacebook} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://www.instagram.com/siluni.ii/"}>
                                    <FontAwesomeIcon icon={faInstagram} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4 border-yellow-200" />
                    <div className="text-center flex">
                        <FontAwesomeIcon icon={faCopyright} className="mr-3 text-sm" />
                        <span className="text-sm">2024 Siluni Rupasinghe - All Rights Reserved</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacts;
