import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiZ3wpN_5CPKFRDw-skLR5mlStw3cwQWB2A&s";

  return (
    <nav className={`bg-white w-full  ${!user ? 'min-h-screen  flex flex-col' : ''}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${!user ? 'flex-1 flex flex-col justify-center' : ''}`}>
        <div className={`flex ${!user ? 'flex-col items-center justify-center space-y-8' : 'justify-between items-center'} h-16 ${!user ? 'h-auto py-8' : ''}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoUrl} 
              alt="Orange Digital Center Logo" 
              className={`${!user ? 'h-20' : 'h-12'} w-auto object-contain cursor-pointer`}
              onClick={() => {
                if (user) {
                  navigate('/home');
                } else {
                  navigate('/');
                }
              }}
            />
          </div>

          {/* Desktop Navigation - Only show if logged in */}
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/home')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Contact
              </button>
            </div>
          )}

          {/* Auth Buttons - Desktop */}
          <div className={`hidden md:flex items-center ${!user ? 'flex-col space-y-4' : 'space-x-3'}`}>
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <div className="text-center mb-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Orange Digital Center</h2>
                  <p className="text-lg text-gray-600">Please sign in to continue</p>
                </div>
                <div className="flex flex-col space-y-3 w-full gap-4 mt-12 max-w-xs">
                  <SignInButton mode="modal" afterSignInUrl="/home">
                    <button className="w-full shadow-md text-black bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition shadow-lg">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal" afterSignUpUrl="/home">
                    <button className="w-full shadow-md text-orange-600 bg-white hover:bg-orange-50 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition">
                      Create Account
                    </button>
                  </SignUpButton>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button - Only show when logged in */}
          {user && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}

          {/* Mobile Auth Buttons - Show when not logged in */}
          {!user && (
            <div className="md:hidden w-full mt-8">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Orange Digital Center</h2>
                <p className="text-base text-gray-600">Please sign in to continue</p>
              </div>
              <div className="flex flex-col space-y-3 px-4">
                <SignInButton mode="modal" afterSignInUrl="/home">
                  <button className="w-full text-white bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition shadow-lg">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal" afterSignUpUrl="/home">
                  <button className="w-full text-orange-600 bg-white hover:bg-orange-50 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition">
                    Create Account
                  </button>
                </SignUpButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {user ? (
            <>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => {
                    navigate('/home');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    navigate('/about');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </button>
              </div>
              <div className="px-4 py-3 border-t border-gray-200">
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </>
          ) : (
            <div className="px-4 py-6 space-y-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Orange Digital Center</h2>
                <p className="text-base text-gray-600">Please sign in to continue</p>
              </div>
              <SignInButton mode="modal" afterSignInUrl="/home">
                <button className="w-full text-white bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition shadow-lg">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal" afterSignUpUrl="/home">
                <button className="w-full text-orange-600 bg-white hover:bg-orange-50 px-6 py-3 rounded-md text-base font-semibold border-2 border-orange-600 hover:border-orange-700 transition">
                  Create Account
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}