const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto animate-fadeIn">
                    <span className="text-sm font-semibold text-primary/80 tracking-wider uppercase mb-4 block">
                        Welcome to the Future
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                        Web3 Social Network
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore a secure, private, and free social space with breakthrough Web3 features!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#product"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary 
                                     text-white font-semibold hover:scale-105 transform transition-all duration-300 
                                     shadow-lg hover:shadow-primary/25"
                        >
                            Explore Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Optional: Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero