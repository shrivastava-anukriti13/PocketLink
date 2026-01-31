import React, { useState } from 'react'
import Graph from './Graph'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const DashboardLayout = () => {
    // const refetch = false;
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);


    // Calculate startDate (1 year ago) and endDate (today)
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()).toISOString().split('T')[0];

    const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)
    const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(token, startDate, endDate, onError)

    function onError() {
        navigate("/error");
    }

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50">
            {loader ? (
                <Loader />
            ) : (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Hero Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600 mb-4">
                            URL Analytics Hub
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Monitor, analyze, and optimize your shortened URLs with powerful insights
                        </p>
                    </div>

                    {/* Floating Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-3xl blur-md opacity-25 group-hover:opacity-35 transition-opacity"></div>
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <FaLink className="text-white text-xl" />
                                    </div>
                                    <span className="text-3xl">🔗</span>
                                </div>
                                <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Total Links</h3>
                                <p className="text-4xl font-bold text-gray-800">{myShortenUrls?.length || 0}</p>
                                <p className="text-pink-600 text-sm mt-2 font-medium">Active URLs</p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-3xl blur-md opacity-25 group-hover:opacity-35 transition-opacity"></div>
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-3xl">⭐</span>
                                </div>
                                <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Most Popular</h3>
                                <p className="text-lg font-bold text-gray-800 truncate">
                                    {myShortenUrls && myShortenUrls.length > 0
                                        ? `/${myShortenUrls.reduce((prev, current) => (prev.clickCount > current.clickCount) ? prev : current).shortUrl}`
                                        : 'No links yet'
                                    }
                                </p>
                                <p className="text-yellow-600 text-sm mt-2 font-medium">
                                    {myShortenUrls && myShortenUrls.length > 0
                                        ? `${myShortenUrls.reduce((prev, current) => (prev.clickCount > current.clickCount) ? prev : current).clickCount} clicks`
                                        : '0 clicks'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="relative mb-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-3xl blur-lg opacity-30"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
                            <div className="flex items-center justify-between p-8 border-b border-gray-200">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Analytics Overview</h2>
                                    <p className="text-gray-600">Real-time performance insights</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full animate-pulse"></span>
                                    <span className="text-gray-500 text-sm">Live Data</span>
                                </div>
                            </div>
                            <div className="h-96 relative p-8">
                                {totalClicks.length === 0 && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-yellow-200">
                                            <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                                            No Analytics Data Yet
                                        </h3>
                                        <p className="text-gray-600 text-center max-w-md leading-relaxed">
                                            Create and share your first short link to start seeing beautiful analytics charts and engagement insights.
                                        </p>
                                    </div>
                                )}
                                <Graph graphData={totalClicks} />
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="text-center mb-16">
                        <button
                            className='group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25'
                            onClick={() => setShortenPopUp(true)}>
                            <FaLink className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                            <span>Create Magic Link</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    {/* URLs Section */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl blur-lg opacity-30"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
                            <div className="p-8 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Magic Links</h2>
                                        <p className="text-gray-600">All your shortened URLs in one place</p>
                                    </div>
                                    <div className="hidden sm:flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                        <span className="text-gray-500 text-sm">{myShortenUrls?.length || 0} Active</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                {!isLoading && myShortenUrls.length === 0 ? (
                                    <div className="text-center py-16">
                                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-200">
                                            <FaLink className="text-yellow-500 text-2xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                            Ready to Get Started?
                                        </h3>
                                        <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                                            Transform your long URLs into powerful, trackable short links.
                                            Create your first magic link and start analyzing your audience engagement.
                                        </p>
                                        <button
                                            className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                                            onClick={() => setShortenPopUp(true)}>
                                            <FaLink className="text-sm" />
                                            Create First Link
                                        </button>
                                    </div>
                                ) : (
                                    <ShortenUrlList data={myShortenUrls} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ShortenPopUp
                refetch={refetch}
                open={shortenPopUp}
                setOpen={setShortenPopUp}
            />
        </div>
    )
}

export default DashboardLayout