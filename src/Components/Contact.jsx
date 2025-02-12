import Lottie from "lottie-react";
import contactAnimate from '../assets/Lottie/lottie.json';

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center mt-10 sm:mb-4">
                <h2 className="text-4xl font-bold text-gray-800">Call Center</h2>
                <p className="text-gray-600 lg:w-2/6 mx-auto pt-2">
                    Quick solution of your problems
                </p>
                <div className='border-2 border-violet-600 w-[250px] sm:w-[350px] mx-auto mt-3 text-right'></div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-0">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={contactAnimate} loop={true} />
                </div>
                <div className="w-full md:w-1/2 bg-white p-6 border border-gray-300 rounded-lg shadow-md">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-[10px] text-white bg-violet-500 rounded-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
