const ProductIntroduction = () => {
    return (
        <section id="product" className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50">
            <div className="container mx-auto text-center px-4 relative">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                {/* Main content */}
                <div className="relative space-y-6 mb-16">
                    <div className="animate-fadeIn">
                        <span className="text-sm font-semibold text-primary/80 tracking-wider uppercase mb-4 block">
                            Welcome to the Future
                        </span>
                        <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text hover:scale-105 transform transition-transform duration-300">
                            Introducing Cardahub
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold animate-pulse border border-primary/20">
                                Web3 Ecosystem
                            </span>
                            <span className="px-6 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold animate-pulse border border-secondary/20">
                                Cardano Blockchain
                            </span>
                            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold animate-pulse border border-primary/20">
                                NFT Platform
                            </span>
                        </div>
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn delay-300">
                        <p className="text-xl leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            Cardahub is an advanced Web3 ecosystem built on the Cardano blockchain, providing users with an 
                            <span className="font-semibold text-primary hover:underline decoration-wavy decoration-primary/30"> unlimited space </span> 
                            for NFT creation and trading.
                        </p>
                        <p className="text-xl leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            At Cardahub, all your activities are conducted entirely on the blockchain, ensuring 
                            <span className="font-semibold text-secondary hover:underline decoration-wavy decoration-secondary/30"> transparency</span>, 
                            <span className="font-semibold text-primary hover:underline decoration-wavy decoration-primary/30"> security</span>, and 
                            <span className="font-semibold text-secondary hover:underline decoration-wavy decoration-secondary/30"> unlimited interoperability</span>. 
                        </p>
                    </div>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-12 perspective-1000">
                    {features.map((feature, index) => (
                        <div key={index} 
                            className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1"
                            style={{ animationDelay: `${index * 150}ms` }}>
                            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
                                         hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.9)] transition-all duration-300
                                         border border-gray-100">
                                <div className="mb-6 relative">
                                    {feature.icon}
                                    <div className="absolute -inset-2 bg-primary/5 rounded-full blur-lg"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom text */}
                <p className="text-xl mt-16 max-w-3xl mx-auto text-gray-700 animate-fadeIn bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                    With Cardahub, you have full control over what you create, share, and trade, while being protected by the 
                    <span className="font-semibold text-primary"> powerful </span> and 
                    <span className="font-semibold text-secondary"> secure </span> 
                    Cardano blockchain system.
                </p>
            </div>
        </section>
    )
}

// Features data
const features = [
    {
        title: "Post and Share Content",
        description: "Create and share posts, images, videos, or livestreams. All content is secured on the blockchain, cannot be edited or deleted without your consent.",
        icon: <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
    },
    {
        title: "Buy, Sell and Display NFTs",
        description: "Trade NFTs easily and securely on Cardahub. Users can showcase their NFT works and participate in the NFT market with optimized transaction costs.",
        icon: <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    },
    {
        title: "Create and Manage Your NFTs",
        description: "Cardahub helps you create and manage NFTs simply and efficiently, while supporting the protection of your digital asset ownership on the Cardano blockchain.",
        icon: <svg className="w-12 h-12 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
    }
];

export default ProductIntroduction