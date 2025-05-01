import React, { useState } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { MdOutlineContentCopy, MdOutlineRestartAlt } from 'react-icons/md';
import MessageLogo from "../../assets/Message.png";
import ScriptLogo from "../../assets/script.png";

const LiveAiCoach = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'AI Sales Coach', text: "Hello! I'm your sales coach. How can I help you improve your sales performance?" }
    ]);
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');

    const handleSendMessage = () => {
        if (!inputText.trim()) {
            setError('Message cannot be empty');
            return;
        }
        setError('');
        const newMessage = {
            id: messages.length + 1,
            sender: 'User',
            text: inputText.trim()
        };
        setMessages([...messages, newMessage]);
        setInputText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputText(suggestion);
    };

    return (
        <div className="my-12 py-12 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto text-white">
            {/* Headline */}
            <div className="mb-6">
                <p className="text-[#FCE38A] font-PJS text-2xl">Live AI Coach</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-Qtl text-white">Take a Suggestion Coaching</h1>
            </div>

            {/* Main Content: Flexbox Layout */}
            <div className="flex flex-col lg:flex-row min-h-[500px] h-fit gap-6">
                {/* Left Side: Chat Section */}
                <div className="flex flex-col  gap-6">
                    <div className="bg-white text-Primary rounded-lg shadow-lg p-4 flex flex-col">
                        <div className="flex items-center mb-4">
                     
                            <h2 className="text-lg font-semibold">AI Sales Coach</h2>
                        </div>
                        <div className="max-h-[300px] h-[300px] overflow-y-scroll mb-4 px-4 bg-AiBG">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex items-center mb-4 p-3 rounded-lg ${
                                        message.sender === 'AI Sales Coach'
                                            ? 'bg-gray-100 text-gray-800 w-full justify-start'
                                            : 'bg-blue-500 text-white ml-auto justify-end w-fit'
                                    }`}
                                >
                                           <div className="w-10 h-10 bg-gray-200 rounded-full mr-2"></div>
                                    <p>{message.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4">
                            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                                    onClick={() => handleSuggestionClick('How do I handle objections?')}
                                >
                                    How do I handle objections?
                                </button>
                                <button
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                                    onClick={() => handleSuggestionClick('Give me a cold email template')}
                                >
                                    Give me a cold email template
                                </button>
                                <button
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                                    onClick={() => handleSuggestionClick('Closing techniques')}
                                >
                                    Closing techniques
                                </button>
                                <button
                                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300"
                                    onClick={() => handleSuggestionClick('Negotiation tips')}
                                >
                                    Negotiation tips
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask anything you need"
                                    className="flex-1 p-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-AiBtn text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                                >
                                    Send
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Control */}
                <div className='flex flex-col text-3xl gap-5 h-[70%] py-4 px-2 my-auto rounded-full bg-white text-Primary'>
                    <button className='hover:bg-blue-500 rounded-full p-2'><MdOutlineRestartAlt /></button>
                    <button className='hover:bg-blue-500 rounded-full p-2'><BiLike /></button>
                    <button className='hover:bg-blue-500 rounded-full p-2'><BiDislike /></button>
                    <button className='hover:bg-blue-500 rounded-full p-2'><MdOutlineContentCopy /></button>
                    <button className='hover:bg-blue-500 rounded-full p-2'><HiOutlineSpeakerWave /></button>
                </div>

                {/* Right Side: Real-time Analysis, Quick Actions, and Animated Images */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
                    {/* Real-time Analysis */}
                    <div className="bg-AiBG rounded-lg shadow-lg p-4">
                        <h2 className="text-2xl text-Primary font-semibold mb-4">Real-time Analysis</h2>
                        <div className="mb-4 bg-white rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-green-500 font-medium">Confidence Level</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-AiBG rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg p-4'>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 font-medium">Confidence Level</span>
                                <span>85%</span>
                            </div>
                            <p className="text-sm text-gray-600">85% improvement in objection handling</p>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-AiBG rounded-lg shadow-lg p-4">
                        <h2 className="text-2xl text-Primary font-semibold mb-4">Quick Actions</h2>
                        <div className="flex gap-4">
                            <button className="bg-gray-100 text-AiBtn font-Mrp font-bold text-xl flex-1 px-4 py-2 rounded-lg hover:bg-gray-200 text-left gap-2">
                                <img src={ScriptLogo} alt="" className="w-fit h-fit object-left" />
                                Generate Script
                            </button>
                            <button className="bg-gray-100 text-AiBtn font-Mrp font-bold text-xl flex-1 px-4 py-2 rounded-lg hover:bg-gray-200 text-left gap-2">
    
                                <img src={ScriptLogo} alt="" className="w-fit h-fit object-left" />
                                Practice Pitch
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default LiveAiCoach;