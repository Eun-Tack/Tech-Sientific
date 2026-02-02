import React from 'react';
import Card from '../components/ui/Card';

// Dummy Data
const POSTS = [
    {
        id: '1',
        title: 'i-PMS로 홈페이지 PII 실시간 차단하기',
        excerpt: '개인정보 보호 솔루션 i-PMS를 활용하여 웹사이트에서 유출될 수 있는 PII를 실시간으로 탐지하고 차단하는 방법을 알아봅니다.',
        tags: ['PII', 'Product', 'How-to'],
        author: 'Tech Lab',
        date: '2026.02.01',
        readTime: '12분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Tech Monthly #01: NDR vs SIEM SOC 최적화',
        excerpt: '보안 관제 센터(SOC)의 효율성을 높이기 위해 NDR과 SIEM을 어떻게 상호보완적으로 구성할 수 있는지, 최신 트렌드를 분석합니다.',
        tags: ['Monthly', 'SIEM', 'NDR'],
        author: 'Security Team',
        date: '2026.01.28',
        readTime: '8분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '3',
        title: '랜섬웨어 대응 플레이북: WaterWall DLP 사례',
        excerpt: '실제 랜섬웨어 공격 시나리오를 바탕으로 WaterWall DLP를 활용한 방어 및 대응 전략을 단계별로 소개합니다.',
        tags: ['Threat Research', 'DLP'],
        author: 'Research Center',
        date: '2026.01.15',
        readTime: '15분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1563206767-5b1d972e9fb9?q=80&w=2070&auto=format&fit=crop'
    }
];

const Home = () => {
    return (
        <div className="container mx-auto px-4 pt-10">
            <section className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    디지털 신뢰를 만드는 <span className="text-primary-blue">기술 인사이트</span>
                </h1>
                <p className="text-lg text-slate-400">
                    보안·클라우드·데이터 엔지니어링 실무 노하우
                </p>
            </section>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Featured Posts</h2>
                        <button className="text-primary-blue text-sm hover:underline">View All</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {POSTS.map(post => (
                            <Card key={post.id} {...post} />
                        ))}
                        {/* Duplicate for grid check */}
                        {POSTS.map(post => (
                            <Card key={`${post.id}-dup`} {...post} />
                        ))}
                    </div>
                </div>

                {/* Sidebar Placeholder */}
                <aside className="w-full md:w-1/4 hidden md:block">
                    <div className="sticky top-24 space-y-8">
                        <div className="bg-card-bg p-6 rounded-2xl border border-slate-800">
                            <h3 className="font-bold text-white mb-4">Categories</h3>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="hover:text-primary-blue cursor-pointer">Industry Trends</li>
                                <li className="hover:text-primary-blue cursor-pointer">Tech Deep Dive</li>
                                <li className="hover:text-primary-blue cursor-pointer">Product Research</li>
                                <li className="hover:text-primary-blue cursor-pointer">Governance</li>
                            </ul>
                        </div>

                        <div className="bg-card-bg p-6 rounded-2xl border border-slate-800">
                            <h3 className="font-bold text-white mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['SIEM', 'NDR', 'PII', 'ZeroTrust', 'Cloud'].map(tag => (
                                    <span key={tag} className="text-xs bg-navy-900 border border-slate-700 px-2 py-1 rounded text-slate-400 hover:text-white hover:border-primary-blue cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Home;
