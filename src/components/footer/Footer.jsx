import React from 'react'

function Footer() {
    return (
        <div>
            <div id='Contact' className="contact text-left text-gray-300 my-[40px]">
                <div>
                    <h3>Contact</h3>
                    <div className=' text-[13px] flex justify-evenly mt-[50px]'>
                        <div className='flex flex-col gap-10'>
                            <a href="https://www.linkedin.com/in/aditya-anand-77041b22b" className='flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white'>
                                <p className="flex  items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                    LinkedIn
                                </p>
                            </a>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <a href="https://github.com/anandADITYAV" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white'>
                                <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.167 6.84 9.485.5.092.683-.217.683-.483v-1.79c-2.782.605-3.373-1.353-3.373-1.353-.454-1.153-1.11-1.461-1.11-1.461-.908-.621.069-.608.069-.608 1.002.07 1.529 1.025 1.529 1.025.889 1.52 2.334 1.082 2.906.828.093-.645.35-1.082.636-1.333-2.22-.252-4.556-1.11-4.556-4.946 0-1.091.39-1.985 1.03-2.684-.104-.252-.447-1.268.094-2.641 0 0 .84-.269 2.75 1.02A9.546 9.546 0 0 1 12 4.94a9.49 9.49 0 0 1 2.517.34c1.91-1.289 2.75-1.02 2.75-1.02.541 1.373.199 2.389.095 2.641.64.698 1.03 1.593 1.03 2.684 0 3.845-2.338 4.692-4.566 4.938.359.306.686.907.686 1.83v2.72c0 .268.179.577.688.482C19.137 20.168 22 16.419 22 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
                                    </svg>
                                    Github
                                </p>
                            </a>
                        </div>

                        {/* insta  */}
                        <div className='flex flex-col gap-10'>
                            <a href="https://mavenanalytics.io/profile/Aditya-Anand/194115115" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white'>
                                <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12l3 3 6-6 6 6 3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    mavenanalytics
                                </p>
                            </a>
                        </div>



                        <div className='flex flex-col gap-10'>
                            <a href="https://www.instagram.com/iamaditya_anand/" target="_blank" rel="noopener noreferrer" className='flex justify-start items-center cursor-pointer gap-2 ease-in-out duration-300 hover:text-white'>
                                <p className="flex items-center gap-1 border-dashed border-b-[1.5px] border-gray-700/50">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                    Instagram
                                </p>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
