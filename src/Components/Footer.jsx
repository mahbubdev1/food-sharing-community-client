import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-100 text-gray-900">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link to='/' rel="noopener noreferrer" className="flex justify-center space-x-3 lg:justify-start">
                        <img className='w-12' src={logo} alt="" />
                        <span className="self-center text-2xl font-semibold">Food Sharing</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-bold text-gray-900">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer">Features</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">Integrations</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">Pricing</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-bold text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer">Privacy</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase font-bold text-gray-900 ">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer">Public API</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">Documentation</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-900 font-bold">Social media</div>
                        <div className="flex justify-start items-center space-x-3">
                            <Link rel="noopener noreferrer" title="Facebook" className="flex items-center p-1 hover:text-violet-600">
                               <FaInstagram size={25}></FaInstagram>
                            </Link>
                            <Link rel="noopener noreferrer" title="Twitter" className="flex items-center p-1 hover:text-violet-600">
                                <FaFacebook size={25}></FaFacebook>
                            </Link>
                            <Link rel="noopener noreferrer" title="Instagram" className="w-10 hover:text-violet-600">
                                <FaSquareXTwitter size={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-900">&copy; {new Date().getFullYear()} Food Co. LT All rights reserved.</div>
        </footer>
    );
};

export default Footer;