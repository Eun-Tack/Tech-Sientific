import React, { useState } from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

type Tab = 'docs' | 'gallery';

// Dummy Data for Docs/Meetups
const MEETUP_DOCS = [
    {
        id: 'doc-1',
        title: 'Tech Monthly #05: 2026 하반기 보안 트렌드 결산',
        excerpt: '지난 6개월간의 주요 보안 이슈를 되짚어보고, 다가오는 하반기 위협 트렌드를 예측한 월례회 발표 자료입니다.',
        tags: ['Monthly', 'Trend', 'Presentation'],
        author: 'Security Lab',
        date: '2026.06.30',
        readTime: 'PDF View',
        thumbnail: 'https://images.unsplash.com/photo-1544531696-9342a533bf63?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 'doc-2',
        title: 'InfraEye v2.0 아키텍처 Deep Dive',
        excerpt: '새로워진 InfraEye의 마이크로서비스 아키텍처 구조와 성능 최적화 포인트를 공유한 개발팀 내부 세미나 영상 및 문서입니다.',
        tags: ['Architecture', 'Product', 'Internal'],
        author: 'Dev Team',
        date: '2026.05.15',
        readTime: 'Video + Doc',
        thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'doc-3',
        title: '제3회 T-Scientific 해커톤 우승작 발표',
        excerpt: '사내 해커톤에서 우승한 "AI 기반 로그 자동 분석기" 프로젝트의 기획 의도와 시연 영상을 확인하세요.',
        tags: ['Hackathon', 'Culture', 'AI'],
        author: 'AI Team',
        date: '2026.04.20',
        readTime: '10분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    }
];

const CommunityPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>('docs');

    return (
        <div className="container mx-auto px-4 pt-10 pb-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
                <p className="text-slate-400">
                    T Scientific의 기술 문서와 생생한 현장을 만나보세요.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="flex bg-navy-800 p-1 rounded-xl border border-slate-700">
                    <button
                        onClick={() => setActiveTab('docs')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'docs' ? 'bg-primary-blue text-white shadow-lg' : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        <FileText className="w-4 h-4" /> 문서·가이드 (월례회)
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'gallery' ? 'bg-primary-blue text-white shadow-lg' : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        <ImageIcon className="w-4 h-4" /> 사진 갤러리
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                {activeTab === 'docs' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MEETUP_DOCS.map(doc => (
                                <Card key={doc.id} {...doc} category="community-docs" />
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'gallery' && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&random=${item}`}
                                    alt="Gallery"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-bold">Tech Seminar #{item}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CommunityPage;
