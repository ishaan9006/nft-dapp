import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* Left View */}
       <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
                <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-1 rounded-xl">
                    <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                    src="https://links.papareact.com/8sg" alt="Error" />
                </div>

                <div className='space-y-2 text-center p-5'>
                    <h1 className="text-4xl font-bold text-white">Ishhhh Apes</h1>
                    <h2 className="text-xl text-gray-300">A collection of Ishhhh Apes who lives & breathe React!</h2>
                </div>
            </div> 
       </div>

        {/* Right View */}
       <div className="col-span-6 py-12">
        {/* Header */}
        <header className='flex items-center justify-between mx-6'>
            <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                The <span className='font-extrabold underline decoration-pink-600/50'> ISHHHH</span> NFT MARKET PLACE
            </h1>

            <button className='rounded-full bg-rose-400 text-white
             text-xs px-4 py-2 font-bold lg:px-5 lg:py-3 lg:text-base'>
                Sign In
            </button>
        </header>

        <hr className='my-2 border'/>

        {/* Content */}
        <div className='h-4/5 mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0 px-5 pb-6'>
            <img src='https://links.papareact.com/bdy' alt=''
                className='w-80 object-cover pb-10 lg:h-40'
            />
            <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Ishhh Ape Coding Club | NFT Drop</h1>
            <p className='text-l text-green-600 font-bold lg:py-5'>13/21 NFT's claimed</p>
        </div>




        {/* Button */}
        <div className='flex justify-center items-center px-20'>
            <button className='h-16 bg-red-600 w-full text-white rounded-full font-bold'>Mint NFT(0.01 ETH)</button>
        </div>



       </div>
       
    </div>
  )
}

export default NFTDropPage
