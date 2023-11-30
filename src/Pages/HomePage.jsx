import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaUserFriends,
  FaFileAlt,
  FaPalette,
  FaFolder,
  FaGlobe,
  FaUser,
} from "react-icons/fa";

function HomePage() {
  const [show, setShow] = useState(false);

  const steps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1484/1484799.png",
      text: "Fill in Your Requirements and Contact Details",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh0G18EAiAQLNm_jrc_NRPDU7pDELGbIn0A&usqp=CAU",
      text: "Compare and Choose the right Plan",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/013/484/039/original/secure-payment-3d-icon-png.png",
      text: "Make Payment and Start with Us",
    },
  ];
  return (
    <div>
      <div className="relative">
        <div className="bg-purple-900 h-16 flex justify-between px-3 items-center">
          <IconButton onClick={() => setShow(true)}>
            <MenuIcon className="text-white " fontSize="large" />
          </IconButton>
          <img className="w-12 h-12 mr-3" src="/logo.png" alt="" />
        </div>
        <Navbar WIDTH={show} show={setShow} />
        <div className="grid grid-cols-2 bg-purple-900 from-black  h-screen">
          <div className="sm:col-span-1 col-span-2 flex justify-center  items-center">
            <img
              className="animate-bounce w-[100rem]"
              src="/Rectangle 1.png"
              alt=""
            />
          </div>

          <div className="sm:col-span-1 col-span-2  flex justify-center  items-center text-3xl text-white m-10">
            <div>
              Open Source Alternative to SAP, Oracle, Salesforce, Net Suite, MS
              Dynamics, Zoho, Freshworks and more. Trused by 3,00,000+ satisfied
              users in 5000+ companies globally.
              <button className="my-2 rounded bg-black hover:bg-purple-900 h-12 font-semibold text-white p-2 ">
                Learn More ➪
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:m-5 ">
          <div className="md:col-span-1 col-span-2 flex flex-col justify-center items-center m-4">
            <div className="text-3xl font-bold mt-4  mb-4">
              What is ERPNext?
            </div>
            <div className="text-lg font-semibold p-8">
              {" "}
              ERPNext, in 70+ languages, is the world's top 100% free and
              open-source integrated Enterprise Resource Planning Software
              developed by Frappé Technologies Pvt. Ltd. and is built on MariaDB
              database system using a Python based server-side framework.
              ERPNext is a full featured business management solution that helps
              SMEs and MNCs to record all the business transactions in one
              system. ERPNext is trusted by satisfied Users in 150+ Countries
              Globally. ERPNext is build for various business verticals like
              Manufacturing, Distribution Retail, Services, Education,
              Healthcare, Non-Profit, Agriculture, Hospitality and more.
              Discover this amazing system to get updated to new technologies
              and to implement an international work culture in your
              establishment.
            </div>
            <button className="my-2 rounded bg-black hover:bg-purple-900 h-12 font-bold text-white p-2">
              Book A Demo
            </button>
          </div>
          <div className="w-screen  md:w-auto sm:col-span-1 col-span-2">
            <img
              className="w-full   h-full"
              src="https://erpnext.com/files/erpnext-comic400604.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-purple-900 pb-3">
          <div className="flex flex-col text-white justify-center items-center ">
            <div className="text-3xl font-bold mt-10"> What we did?</div>
            <div className="text-lg font-semibold m-3">
              We accomplished following numbers in different sector of Business
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <div className="text-white gap-x-14  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 m-12 ">
              {/* First Row */}
              <div className="sm:text-2xl text-xl col-span-1  flex items-center font-bold">
                <FaFolder size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Projects</p>
              </div>
              <div className="sm:text-2xl text-xl  col-span-1 flex items-center font-bold">
                <FaGlobe size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Countries</p>
              </div>
              <div className="sm:text-2xl text-xl col-span-1   flex items-center font-bold">
                <FaPalette size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Customisations</p>
              </div>

              {/* Second Row */}
              <div className="sm:text-2xl text-xl col-span-1 flex items-center font-bold">
                <FaUserFriends size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Collaborators</p>
              </div>
              <div className="sm:text-2xl text-xl col-span-1 flex items-center font-bold">
                <FaFileAlt size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Formats</p>
              </div>
              <div className="sm:text-2xl text-xl  col-span-1  flex items-center font-bold">
                <FaUser size={30} className="mr-2" />
                <p className="font-extrabold text-3xl">2 Experts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 text-white">
          <div className="col-span-3 text-4xl text-black mt-6 font-bold text-center">
            Our Services
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Implementation
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Customization
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Migration
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Server Maintenance
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Training
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>

          <div class="relative sm:col-span-1  col-span-3 flex flex-col m-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-2xl font-bold antialiased  leading-snug tracking-normal text-blue-gray-900">
                Migration
              </h5>
              <p class="block font-sans  antialiased font-semibold text-lg leading-relaxed text-inherit">
                We provide ERPNext implementation service with all the functions
                to implement an international work culture and workflow to
                reduce the workload, improve productivity and to enable "Work
                from Anywhere" for your entire establishment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center py-12">
        <div className="    rounded-lg p-4 w-[95%]  border border-purple-300">
          <h1 className="text-3xl font-bold mb-8 mt-3 text-slate-800 text-center">
            Avail our Services in 3 Steps
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center">
            {steps.map((step, index) => (
              <div
                className="flex flex-col col-span-3 md:col-span-1 items-center text-center relative"
                key={index}
              >
                <img
                  src={step.icon}
                  loading="lazy"
                  className="h-20 w-20 md:h-28 md:w-28 rounded-full border border-gray-400 transition-transform transform hover:scale-105"
                  alt={step.text}
                />
                <p className="text-3xl font-medium text-b mt-4">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
