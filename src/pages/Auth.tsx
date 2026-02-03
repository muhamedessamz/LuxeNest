import React, { useState } from 'react';

const Auth: React.FC = () => {
    const [mode, setMode] = useState<'Login' | 'Register'>('Login');

    return (
        <div className="bg-background-light text-charcoal transition-colors duration-300 min-h-[calc(100vh-64px)] flex flex-col">
            <main className="flex-grow flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-[500px] bg-white shadow-2xl rounded-2xl border border-[#f0eeea] overflow-hidden transform transition-all duration-500 hover:shadow-primary/5">

                    <div className="pt-8 px-8">
                        {/* HeadlineText */}
                        <h1 className="text-charcoal tracking-tight text-3xl font-black leading-tight text-center pb-2 font-display">
                            Welcome to LuxeNest
                        </h1>
                        {/* BodyText */}
                        <p className="text-charcoal/70 text-base font-normal leading-normal text-center pb-8 max-w-[320px] mx-auto">
                            {mode === 'Login'
                                ? 'Sign in to access your curated collection of luxury furniture.'
                                : 'Join our exclusive community of luxury design enthusiasts.'}
                        </p>
                    </div>

                    <div className="px-8 pb-6">
                        <div className="flex h-12 items-center justify-center rounded-xl bg-[#f0eeea] p-1 relative">
                            <div
                                className={`absolute h-10 w-[calc(50%-4px)] bg-white rounded-lg shadow-md transition-all duration-300 ease-out
                                    ${mode === 'Login' ? 'left-1' : 'left-[calc(50%+1px)]'}
                                `}
                            />
                            <button
                                onClick={() => setMode('Login')}
                                className={`flex-1 relative z-10 text-sm font-bold transition-colors duration-300
                                    ${mode === 'Login' ? 'text-charcoal' : 'text-[#86775f]'}
                                `}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setMode('Register')}
                                className={`flex-1 relative z-10 text-sm font-bold transition-colors duration-300
                                    ${mode === 'Register' ? 'text-charcoal' : 'text-[#86775f]'}
                                `}
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    <div className="px-8 space-y-4">
                        {/* Form Fields */}
                        {mode === 'Register' && (
                            <div className="space-y-2">
                                <label className="text-charcoal text-sm font-bold">Full Name</label>
                                <input
                                    className="w-full rounded-lg text-charcoal border border-[#e1ddd5] bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 outline-none px-4 text-base transition-all"
                                    placeholder="Jane Doe"
                                    type="text"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-charcoal text-sm font-bold">Email Address</label>
                            <input
                                className="w-full rounded-lg text-charcoal border border-[#e1ddd5] bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 outline-none px-4 text-base transition-all"
                                placeholder="name@example.com"
                                type="email"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-charcoal text-sm font-bold">Password</label>
                                {mode === 'Login' && (
                                    <button className="text-primary text-xs font-bold hover:underline transition-all">Forgot password?</button>
                                )}
                            </div>
                            <input
                                className="w-full rounded-lg text-charcoal border border-[#e1ddd5] bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 outline-none px-4 text-base transition-all"
                                placeholder="Enter your password"
                                type="password"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button className="w-full bg-primary hover:bg-primary/90 text-[#1d1a15] font-black py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] text-base group">
                                {mode === 'Login' ? 'Sign In' : 'Create Account'}
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 py-4">
                            <div className="h-px bg-[#f0eeea] flex-grow"></div>
                            <span className="text-[#86775f] text-[10px] font-bold uppercase tracking-widest">Or continue with</span>
                            <div className="h-px bg-[#f0eeea] flex-grow"></div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex gap-4 pb-10">
                            <button className="flex-1 flex items-center justify-center gap-2 h-12 border border-[#e1ddd5] rounded-xl hover:bg-[#fbfaf9] transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
                                </svg>
                                <span className="text-charcoal text-sm font-bold">Google</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 h-12 border border-[#e1ddd5] rounded-xl hover:bg-[#fbfaf9] transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                                </svg>
                                <span className="text-charcoal text-sm font-bold">GitHub</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#fbfaf9] py-6 text-center border-t border-[#f0eeea]">
                        <p className="text-[10px] text-[#86775f] px-12 leading-relaxed uppercase tracking-widest font-bold">
                            By continuing, you agree to LuxeNest s <button className="underline hover:text-primary transition-colors">Terms of Service</button> and <button className="underline hover:text-primary transition-colors">Privacy Policy</button>.
                        </p>
                    </div>
                </div>
            </main>
            <footer className="py-8 text-center text-[#86775f]/60 text-[10px] uppercase tracking-widest font-bold">
                <p>© 2024 LuxeNest Furniture. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Auth;
