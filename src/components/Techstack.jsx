import React from 'react';
import javaicon from "../assets/svgicons/java.svg";
import javascript from "../assets/svgicons/javascript.svg";
import kotlin from "../assets/svgicons/kotlin.svg";
import python from "../assets/svgicons/python.svg";
import typescript from "../assets/svgicons/typescript.svg";
import cplusplus from "../assets/svgicons/c-plus-plus.svg";

import bootstrap from "../assets/svgicons/libraries/bootstrap.svg";
import express from "../assets/svgicons/libraries/express.svg";
import node from "../assets/svgicons/libraries/node.svg";
import react from "../assets/svgicons/libraries/react.svg";
import tailwind from "../assets/svgicons/libraries/tailwind.svg";

import css from "../assets/svgicons/webtechnologies/css.svg";
import php from "../assets/svgicons/webtechnologies/php.svg";

import mongodb from "../assets/svgicons/db/mongodb.svg";
import mysql from "../assets/svgicons/db/mysql.svg";
import sqlite from "../assets/svgicons/db/sqlite.svg";

import github from "../assets/svgicons/tools/github.svg"
import androidstudio from "../assets/svgicons/tools/androidstudio.svg"
import intellijidea from "../assets/svgicons/tools/intellijidea.svg"
import visualstudio from "../assets/svgicons/tools/visualstudio.svg"
import postman from "../assets/svgicons/tools/postman.svg"
function Techstack() {
    return (
        <section id="techstack">
            <div className="container mx-auto md:px-28 sm:px-auto">
                <h2 className="text-3xl md:text-4xl text-center text-yellow-300 font-bold">Tech Stack</h2>
                <hr className="my-4 border-yellow-200" />

                <h2 className="text-xl font-normal text-yellow-100 pl-4">Programming Languages</h2>
                <div className="mt-6 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-7 pl-4">
                    <div className='items-center text-center'>
                        <img src={javaicon} className="w-24 h-20 mx-auto" alt="Java" />
                        <h4 className="p-6 pt-5 font-serif">Java</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={kotlin} className="w-24 h-20 mx-auto" alt="Kotlin" />
                        <h4 className="p-6 pt-5 font-serif">Kotlin</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={python} className="w-24 h-20 mx-auto" alt="Python" />
                        <h4 className="p-6 pt-5 font-serif">Python</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={typescript} className="w-24 h-20 mx-auto" alt="TypeScript" />
                        <h4 className="p-6 pt-5 font-serif">TypeScript</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={cplusplus} className="w-24 h-20 mx-auto" alt="C++" />
                        <h4 className="p-6 pt-5 font-serif">C++</h4>
                    </div>
                </div>

                <h2 className="text-xl font-normal text-yellow-100 pl-4">Libraries & Frameworks</h2>
                <div className="mt-4 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-7 pl-4">
                    <div className='items-center text-center'>
                        <img src={react} className="w-24 h-20 mx-auto" alt="React" />
                        <h4 className="p-6 pt-5 font-serif">React</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={node} className="w-24 h-20 mx-auto" alt="Node" />
                        <h4 className="p-6 pt-5 font-serif">Node</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={express} className="w-24 h-20 mx-auto" alt="Express" />
                        <h4 className="p-6 pt-5 font-serif">Express</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={bootstrap} className="w-24 h-20 mx-auto" alt="Bootstrap" />
                        <h4 className="p-6 pt-5 font-serif">Bootstrap</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={tailwind} className="w-24 h-20 mx-auto" alt="Tailwind" />
                        <h4 className="p-6 pt-5 font-serif">Tailwind</h4>
                    </div>
                </div>

                <h2 className="text-xl font-normal text-yellow-100 pl-4">Web Technologies</h2>
                <div className="mt-4 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-7 pl-4">
                    <div className='items-center text-center'>
                        <img src={javascript} className="w-24 h-20 mx-auto" alt="JavaScript" />
                        <h4 className="p-6 pt-5 font-serif">JavaScript</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={php} className="w-24 h-20 mx-auto" alt="PHP" />
                        <h4 className="p-6 pt-5 font-serif">PHP</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={css} className="w-24 h-20 mx-auto" alt="CSS" />
                        <h4 className="p-6 pt-5 font-serif">CSS</h4>
                    </div>
                </div>

                <h2 className="text-xl font-normal text-yellow-100 pl-4">Database</h2>
                <div className="mt-4 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-7 pl-4">
                    <div className='items-center text-center'>
                        <img src={mysql} className="w-24 h-20 mx-auto" alt="MySQL" />
                        <h4 className="p-6 pt-5 font-serif">MySQL</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={mongodb} className="w-24 h-20 mx-auto" alt="MongoDB" />
                        <h4 className="p-6 pt-5 font-serif">MongoDB</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={sqlite} className="w-24 h-20 mx-auto" alt="SQLite" />
                        <h4 className="p-6 pt-5 font-serif">SQLite</h4>
                    </div>
                </div>

                <h2 className="text-xl font-normal text-yellow-100 pl-4">Tools</h2>
                <div className="mt-4 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-7 pl-4">
                    <div className='items-center text-center'>
                        <img src={github} className="w-24 h-20 mx-auto" alt="GitHub" />
                        <h4 className="p-6 pt-5 font-serif">GitHub</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={visualstudio} className="w-24 h-20 mx-auto" alt="Visual Studio" />
                        <h4 className="p-6 pt-5 font-serif">Visual Studio</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={androidstudio} className="w-24 h-20 mx-auto" alt="Android Studio" />
                        <h4 className="p-6 pt-5 font-serif">Android Studio</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={intellijidea} className="w-24 h-20 mx-auto" alt="IntelliJ IDEA" />
                        <h4 className="p-6 pt-5 font-serif">IntelliJ IDEA</h4>
                    </div>
                    <div className='items-center text-center'>
                        <img src={postman} className="w-24 h-20 mx-auto" alt="Postman" />
                        <h4 className="p-6 pt-5 font-serif">Postman</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Techstack;
