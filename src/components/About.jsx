import React from 'react';

function About() {
  return (
    <div className="font-sans overflow-x-hidden min-h-screen bg-white">
      <section className="flex min-h-[calc(100vh-64px)] relative bg-white">
        {/* Orange Shape Background */}
        <div className="absolute right-[-120px] top-[-220px] bottom-[-10px] w-[55%] rounded-[60%_20%_0_80%] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 shadow-2xl z-0"></div>

        {/* Content */}
        <div className="z-10 flex flex-col justify-center px-16 py-24 max-w-4xl">
          <h1 className="text-6xl leading-tight text-gray-900 font-bold mb-6">
            About <span className="text-orange-600">Orange</span> Digital Center
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We are a leading digital center dedicated to helping individuals and businesses achieve their dreams through innovative technology solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to empower people with the tools and knowledge they need to succeed in the digital age. We combine creativity, passion, and technical expertise to deliver exceptional results.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're looking to build a new application, enhance your digital presence, or learn new skills, we're here to help you every step of the way.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
