import React from 'react';

function Contact() {
  return (
    <div className="font-sans overflow-x-hidden min-h-screen bg-white">
      <section className="flex min-h-[calc(100vh-64px)] relative bg-white">
        {/* Orange Shape Background */}
        <div className="absolute right-[-120px] top-[-220px] bottom-[-10px] w-[55%] rounded-[60%_20%_0_80%] bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 shadow-2xl z-0"></div>

        {/* Content */}
        <div className="z-10 flex flex-col justify-center px-16 py-24 max-w-4xl">
          <h1 className="text-6xl leading-tight text-gray-900 font-bold mb-6">
            Contact <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Get in touch with us through any of the following ways:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-lg text-gray-600">contact@orangedigitalcenter.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-lg text-gray-600">+212 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-lg text-gray-600">Agadir ,Maroc</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
