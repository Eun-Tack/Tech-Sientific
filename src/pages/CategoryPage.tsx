import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';

// Dummy Data (In a real app, this would be fetched)
const ALL_POSTS = [
    {
        id: '1',
        title: 'i-PMS로 홈페이지 PII 실시간 차단하기',
        excerpt: '개인정보 보호 솔루션 i-PMS를 활용하여 웹사이트에서 유출될 수 있는 PII를 실시간으로 탐지하고 차단하는 방법을 알아봅니다.',
        tags: ['PII', 'Product', 'How-to'],
        author: 'Tech Lab',
        date: '2026.02.01',
        readTime: '12분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        category: 'product-research'
    },
    {
        id: '2',
        title: 'Tech Monthly #01: NDR vs SIEM SOC 최적화',
        excerpt: '보안 관제 센터(SOC)의 효율성을 높이기 위해 NDR과 SIEM을 어떻게 상호보완적으로 구성할 수 있는지, 최신 트렌드를 분석합니다.',
        tags: ['Monthly', 'SIEM', 'NDR'],
        author: 'Security Team',
        date: '2026.01.28',
        readTime: '8분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop',
        category: 'tech-trends'
    },
    {
        id: '3',
        title: '랜섬웨어 대응 플레이북: WaterWall DLP 사례',
        excerpt: '실제 랜섬웨어 공격 시나리오를 바탕으로 WaterWall DLP를 활용한 방어 및 대응 전략을 단계별로 소개합니다.',
        tags: ['Threat Research', 'DLP'],
        author: 'Research Center',
        date: '2026.01.15',
        readTime: '15분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1563206767-5b1d972e9fb9?q=80&w=2070&auto=format&fit=crop',
        category: 'industry-trends'
    },
    {
        id: '4',
        title: '2026 공공 클라우드 보안 조달 트렌드',
        excerpt: '공공기관 클라우드 전환 가속화에 따른 보안 조달 시장의 변화와 주요 컴플라이언스 요건을 분석합니다.',
        tags: ['Procurement', 'Public', 'Cloud'],
        author: 'Strategy Team',
        date: '2026.01.10',
        readTime: '10분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        category: 'industry-trends'
    },
    {
        id: '5',
        title: 'GenAI 시대, 개인정보 탐지 기술의 진화',
        excerpt: '생성형 AI의 도입으로 변화하는 개인정보 위협과 이를 탐지하기 위한 최신 AI 기반 보안 기술을 소개합니다.',
        tags: ['AI Security', 'GenAI', 'Privacy'],
        author: 'AI Lab',
        date: '2026.02.04',
        readTime: '11분 읽기',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        category: 'tech-trends'
    }
];

const categoryMaps: Record<string, string> = {
    'industry-trends': '산업 트렌드',
    'tech-trends': '기술 트렌드',
    'product-research': '제품 리서치',
    'governance': '거버넌스',
};

const CategoryPage = () => {
    const { category } = useParams();
    const [filteredPosts, setFilteredPosts] = useState(ALL_POSTS);

    const title = category && categoryMaps[category] ? categoryMaps[category] : 'Category';

    useEffect(() => {
        window.scrollTo(0, 0);
        if (category) {
            // In a real app, you might fetch data here. 
            // For now, we simulate filtering or showing all if generic.
            const filtered = ALL_POSTS.filter(p => p.category === category);
            // Check if we have enough mock data, if not just show all for demo purposes if empty
            setFilteredPosts(filtered.length > 0 ? filtered : ALL_POSTS);
        }
    }, [category]);

    return (
        <div className="container mx-auto px-4 pt-10 pb-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
                <p className="text-slate-400">
                    T Scientific에서 제공하는 {title} 관련 최신 인사이트와 리포트를 확인하세요.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                    <Card key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
