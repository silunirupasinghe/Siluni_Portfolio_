import React from "react";
import textile from "../assets/projects/textile.png";
import sellwin from "../assets/projects/sellwin.png";
import hirely from "../assets/projects/hirely.png";
import cv from "../assets/pdf/Siluni Rupasinghe- Resume.pdf";
import Natura from "../assets/projects/Natura.png";
import medihelp from "../assets/projects/medihelp.png";
import portfolio from "../assets/projects/portfolio.png";

function Projects() {
    return (
        <>
            <section id="projects" className="pb-10">
                <div className="container mx-auto md:px-28 sm:px-auto">
                    <h2 className="text-3xl md:text-4xl text-center text-yellow-300 font-bold">PROJECTS</h2>
                    <hr className="my-4 border-yellow-200" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
                        <div className="container2">
                            <a href={cv} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={medihelp}
                                    alt="Avatar"
                                    className="image h-full w-full object-cover rounded-lg"
                                />
                                <div className="middle">
                                    <div className="text font-bold">MediHelp Management System</div>
                                </div>
                            </a>
                        </div>

                        <div className="container2">
                            <img
                                src={sellwin}
                                alt="Avatar"
                                className="image h-full w-full object-cover rounded-lg"
                            />
                            <div className="middle">
                                <div className="text">Farm Tech</div>
                            </div>
                        </div>

                        <div className="container2">
                            <img
                                src={Natura}
                                alt="Avatar"
                                className="image h-full w-full object-cover rounded-lg"
                            />
                            <div className="middle">
                                <div className="text">Natura React Native Mobile App</div>
                            </div>
                        </div>

                        <div className="container2">
                            <a href="https://github.com/SLIIT-Group-projects/SLIIT-Y2S2-ITPproject-TextileSystem/tree/main/user%20management%20system" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={textile}
                                    alt="Avatar"
                                    className="image h-full w-full object-cover rounded-lg"
                                />
                                <div className="middle">
                                    <div className="text font-bold">Textile & Garment Management System</div>
                                </div>
                            </a>
                        </div>

                        <div className="container2">
                            <img
                                src={medihelp}
                                alt="Avatar"
                                className="image h-full w-full object-cover rounded-lg"
                            />
                            <div className="middle">
                                <div className="text">Website for Sellwin Holdings (Pvt) Ltd</div>
                            </div>
                        </div>

                        <div className="container2">
                            <img
                                src={portfolio}
                                alt="Avatar"
                                className="image h-full w-full object-cover rounded-lg"
                            />
                            <div className="middle">
                                <div className="text">Website for Sellwin Holdings (Pvt) Ltd</div>
                            </div>
                        </div>


                        <div className="container2">
                            <a href="https://github.com/silunirupasinghe/HirelyAI/tree/Development/files">
                            <img
                                src={hirely}
                                alt="Avatar"
                                className="image h-full w-full object-cover rounded-lg"
                            />
                            <div className="middle">
                                <div className="text">Hirely</div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
