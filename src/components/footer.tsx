"use client";

export default function Footer() {
    return (
        <div className="container flex flex-col items-center justify-center px-5 py-2 mx-auto fixed bottom-0 sm:flex-row">
            <p className="mt-4 text-sm text-white">
                © <span>2024</span> Quick.ly — Made with <span className="text-red-700">❤️</span> by
                <a href="https://github.com/AkkilMG" className="ml-1 text-orange-600" rel="noopener noreferrer" target="_blank">
                    AkkilMG
                </a>
            </p>
            <span className="inline-flex justify-center mt-5 text-sm sm:ml-auto sm:mt-0 sm:justify-start">
                {/* <!-- Youtube --> */}
                <a href="https://www.youtube.com/@LearnwithAkkil" target="_blank" className="ml-5 text-white">
                    <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="w-5 h-5">
                        <path d="M21.745,5.029c-0.256-0.953-1.027-1.71-1.98-1.96C17.748,3,12,3,12,3S6.252,3,3.235,3.069C2.282,3.319,1.512,4.076,1.256,5.029C0.229,9.745,0,12,0,12s0.229,2.255,1.256,6.971c0.256,0.953,1.027,1.71,1.98,1.96C6.252,21,12,21,12,21s5.748,0,8.765-0.069c0.953-0.25,1.723-1.007,1.979-1.96C23.771,14.255,24,12,24,12s-0.229-2.255-1.255-6.971zM9.75,15.584V8.416l6.584,3.584L9.75,15.584z"/>
                    </svg>                
                </a>
                {/* <!-- Telegram --> */}
                <a href="https://telegram.me/HeimanCreatiin" target="_blank" className="ml-5 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"/>
                    </svg>                 
                </a>
                {/* <!-- Facebook --> */}
                <a href="https://www.facebook.com/akkhil.charan" target="_blank" className="ml-5 text-white">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                {/* <!-- Twitter --> */}
                <a href="https://twitter.com/AkkilMG" target="_blank" className="ml-5 text-white">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
            </span>
        </div>
    );
}