import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-6 pt-16 pb-8">

                {/* Footer Top */}
                <div className="grid grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div>
                            <img src={Logo} alt="" />
                        </div>

                        <p className="mt-4 max-w-xs text-sm leading-5 text-gray-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-xs text-gray-700">
                            <a href="" className="hover:text-pink-500 transition">
                                GitHub
                            </a>

                            <a href="" className="hover:text-pink-500 transition">
                                Twitter
                            </a>

                            <a href="" className="hover:text-pink-500 transition">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-bold uppercase text-gray-900">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-2 text-xs text-gray-500">
                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-bold uppercase text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-2 text-xs text-gray-500">
                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xs font-bold uppercase text-gray-900">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-2 text-xs text-gray-500">
                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="" className="hover:text-pink-500 transition">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-gray-100"></div>

                {/* Footer Bottom */}
                <div className="pt-6 flex items-center justify-between text-xs text-gray-400">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="" className="hover:text-pink-500 transition">
                            Privacy
                        </a>

                        <a href="" className="hover:text-pink-500 transition">
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;