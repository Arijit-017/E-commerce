const Loader = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative w-14 h-14">
                <div className="absolute inset-0 animate-spin">
                    <svg
                        className="w-full h-full text-[#9a52ff] drop-shadow-lg"
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                    >
                        <circle
                            cx="25"
                            cy="25"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="90"
                            strokeDashoffset="30"
                            className="opacity-30"
                        />
                        <circle
                            cx="25"
                            cy="25"
                            r="20"
                            stroke="url(#grad)"
                            strokeWidth="4"
                            strokeDasharray="90"
                            strokeDashoffset="60"
                            strokeLinecap="round"
                            className="animate-pulse"
                        />
                        <defs>
                            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#8447ff" />
                                <stop offset="100%" stopColor="#b388eb" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Loader;
