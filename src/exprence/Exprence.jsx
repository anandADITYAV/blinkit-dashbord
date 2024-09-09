import React from 'react'

function Exprence() {
  return (
    <div>   
        <div id='Exprence' className='my-10 text-gray-300 text-left'>
                <h2>Exprence</h2>
                <div className='border border-dashed rounded p-6 pb-11 pt-11 border-gray-700/50 grid md:grid-cols-1 sm:grid-cols-1  justify-center mt-[25px] gap-[70px]'>
                    <div className='shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90 p-5'>
                        <div className="sec">
                            <div className="flex justify-between">
                                <h3 className='border-dashed border-b-[1.5px] border-gray-700/50 cursor-pointer hover:text-white flex items-center gap-3'>
                                    exp-1</h3>
                            </div>
                        </div>
                        <ul className='list-disc pl-5 mt-[30px] text-[13px]'>
                            <li className='mb[10px] text-[12px]'>
                                Health Aura is a patient-centric platform enabling seamless online appointment booking and secure access to digital prescriptions
                            </li>
                            <li className='list-none style-flex text-[30px] gap-7 pt-4 items-center justify-start'>
                                {/* < svg>svg</svg> */}

                            </li>
                        </ul>
                    </div>

                    <div className='shadow-lg shadow-gray-800/50 ease-in-out duration-300 hover:shadow-gray-800/90 p-5'>
                        <div className="sec">
                            <div className="flex justify-between">
                                <h3 className='border-dashed border-b-[1.5px] border-gray-700/50 cursor-pointer hover:text-white flex items-center gap-3'>
                                    exp-2</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


    </div>
  )
}

export default Exprence
