

import React from 'react';

const NotFound: React.FC = () => {
    return (
        <section id="journal-scroll">
            <main>
                <div className="bg-indigo-900 relative overflow-hidden h-screen">
                    <img src="https://raw.githubusercontent.com/AkkilMG/tool/main/images/error.svg" className="absolute h-full w-full object-cover bg-fixed" />
                    <div className="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div className="w-full font-mono flex flex-col items-center relative z-10">
                            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                                {/* <!-- Description --> */}
                                The url you visit is having error.
                            </h1>
                            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                                {/* <!-- Error Code --> */}
                                404
                                <br />
                                <span className="font-extrabold text-4xl text-center text-white leading-tight mt-4">
                                    {/* <!-- Sub-Description --> */}
                                    Not Found
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default NotFound;