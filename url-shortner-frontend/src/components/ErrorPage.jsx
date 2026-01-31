import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 p-6">
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-3xl blur-lg opacity-20"></div>

                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-2xl text-center max-w-md">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaExclamationTriangle className='text-3xl text-white' />
                    </div>

                    <h1 className='text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600'>
                        Oops! Something went wrong
                    </h1>

                    <p className='text-gray-600 mb-8 leading-relaxed'>
                        {message ? message : "An unexpected error has occurred. Don't worry, we're here to help you get back on track."}
                    </p>

                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                        className='bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer'
                    >
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage