import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoonPage = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }
    // Set launch date - adjust as needed
    const launchDate = new Date('May 30, 2025 00:00:00').getTime();

    useEffect(() => {
        // Animation on load
        setIsLoaded(true);

        // Countdown timer
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [launchDate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email subscription logic here
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white opacity-20"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 6 + 1}px`,
                                height: `${Math.random() * 6 + 1}px`,
                                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Glowing orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

            <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                {/* Logo */}
                <div className="mb-8">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500" onClick={goToHome} >
                        <img src="signatures.png" alt="logo" />
                    </div>
                </div>

                {/* Main content */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="block">Something</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Extraordinary
                        </span>
                        <span className="block">Is Coming</span>
                    </h1>

                    <p className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Where silicon dreams meet human imagination—a digital renaissance awaits.
                        At the threshold of consciousness and code, we're crafting an experience where
                        the singularity unfolds in elegant complexity, revealing patterns that connect us all.
                    </p>


                </div>

            </div>
        </div>
    );
};

export default ComingSoonPage;