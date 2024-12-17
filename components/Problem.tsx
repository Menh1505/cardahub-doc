const Problems = () => {
    return (
        <section id="problems" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <span className="text-sm font-semibold text-red-500/80 tracking-wider uppercase mb-4 block">
                        Current State
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 inline-block text-transparent bg-clip-text">
                        Challenges and Limitations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Traditional social networks face significant challenges that affect user experience and data security
                    </p>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-2 gap-8 perspective-1000">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 
                                          shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                          transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                            {problem.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                                            {problem.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center animate-fadeIn">
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        These challenges highlight the need for a new approach to social networking—one that prioritizes user privacy,
                        security, and true ownership of content.
                    </p>
                    <a href="#product"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 
                                text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg 
                                hover:shadow-red-500/25">
                        Discover Our Solution
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

// Problems data
const problems = [
    {
        title: "Lack of Security and Privacy",
        description: "Users' personal data is collected and exploited without full consent. Data breaches and security violations are increasing, raising concerns about personal information protection.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    },
    {
        title: "Censorship and Lack of Transparency",
        description: "Platforms exercise strict content control, sometimes removing or restricting freedom of expression without clear justification, creating unfairness and ambiguity.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
    },
    {
        title: "NFT Transaction Challenges",
        description: "Traditional NFT platforms are difficult to use, lack comprehensive features, and have high transaction costs, making it challenging for new users to participate.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    },
    {
        title: "Advertising and Spam",
        description: "Invasive advertising and spam have become major issues, degrading user experience as users face an overwhelming amount of unwanted advertisements.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    },
    {
        title: "User Data Collection and Exploitation",
        description: "Social platforms collect excessive personal information that users cannot fully control, leading to privacy violations.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    },
    {
        title: "Community Fragmentation",
        description: "Traditional social networks often lead to community fragmentation, making it difficult for user groups to connect with each other, reducing expansion and interaction opportunities.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    },
    {
        title: "Lack of Content Ownership Control",
        description: "Users don't own the content they create, preventing them from monetizing or extracting value from their own posts, images, and videos.",
        icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
    }
];

export default Problems