const Features = () => {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <span className="text-sm font-semibold text-primary/80 tracking-wider uppercase mb-4 block">
                        Platform Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                        Key Features
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 
                                          shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                          transition-all duration-300 h-full">
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                                    {feature.title}
                                </h3>
                                <div className="space-y-3 text-gray-600 text-sm">
                                    {feature.description.map((desc, i) => (
                                        <p key={i} className="leading-relaxed">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center animate-fadeIn">
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join us in building the future of social networking with these groundbreaking features.
                    </p>
                    <a href="#contact"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary 
                                text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg 
                                hover:shadow-primary/25">
                        Get Early Access
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

// ... rest of the component code stays the same ...

const features = [
    {
        title: "Content Management System",
        description: [
            "Create and share posts, images, videos, podcasts, and livestreams with blockchain security.",
            "Customize content access permissions and control sharing options.",
            "Earn tokens and rewards for creating quality content."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    },
    {
        title: "DAO Governance",
        description: [
            "Community-driven platform development through DAO voting system.",
            "Participate in decision-making using platform tokens.",
            "Active community management and rewards for participation."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    },
    {
        title: "Wallet Integration",
        description: [
            "Integrated blockchain wallet for seamless transactions.",
            "Easy NFT trading and token gifting between users.",
            "Support for multiple token conversions and exchanges."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    },
    {
        title: "Blockchain Events",
        description: [
            "Host virtual events secured on the blockchain.",
            "NFT-based event tickets and participation tokens.",
            "Earn rewards for active event participation and contributions."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    },
    {
        title: "GameFi & Metaverse",
        description: [
            "Integrated mini-games with token rewards.",
            "Virtual metaverse space for social interactions.",
            "Own and build virtual assets in the social metaverse."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    },
    {
        title: "Digital Asset Management",
        description: [
            "Comprehensive digital asset ownership system.",
            "Special access rights and VIP community memberships.",
            "Investment opportunities in platform tokens and projects."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    },
    {
        title: "Currency & Reputation",
        description: [
            "Platform-specific tokens for in-network transactions.",
            "User reputation system based on platform activity.",
            "Personal branding through achievement tracking."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    },
    {
        title: "Community Projects",
        description: [
            "Launch and fund community-driven projects.",
            "Token-based crowdfunding opportunities.",
            "NFT rewards for project supporters and contributors."
        ],
        icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    }
];

export default Features;
