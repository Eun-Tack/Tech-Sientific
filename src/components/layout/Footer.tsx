

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-navy-900 border-t border-slate-800 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">T SCIENTIFIC</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            디지털 신뢰를 만드는 기술 인사이트.<br />
                            보안, 클라우드, 데이터 엔지니어링의<br />
                            실무 노하우를 공유합니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Categories</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/category/industry-trends" className="hover:text-primary-blue">Industry Trends</Link></li>
                            <li><Link to="/category/tech-trends" className="hover:text-primary-blue">Tech Deep Dive</Link></li>
                            <li><Link to="/category/product-research" className="hover:text-primary-blue">Product Research</Link></li>
                            <li><Link to="/category/governance" className="hover:text-primary-blue">Governance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/community" className="hover:text-primary-blue">Documents & Guides</Link></li>
                            <li><Link to="/community" className="hover:text-primary-blue">Q&A</Link></li>
                            <li><Link to="/community" className="hover:text-primary-blue">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">최신 기술 트렌드를 매주 받아보세요.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-navy-800 border border-slate-700 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-primary-blue"
                            />
                            <button className="bg-primary-blue text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2026 T Scientific. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
