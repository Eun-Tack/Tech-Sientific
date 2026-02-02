import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

const PostDetail = () => {
    const { id } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Dummy Detail Data (Normally fetched by ID)
    const post = {
        title: 'i-PMS로 홈페이지 PII 실시간 차단하기',
        subtitle: '개인정보 보호 솔루션 i-PMS를 활용한 실시간 탐지 전략',
        author: 'Tech Lab',
        date: '2026.02.01',
        readTime: '12분 읽기',
        tags: ['PII', 'Product', 'How-to'],
        content: `
      <p>오늘날 웹사이트를 운영하는 기업들에게 개인정보(PII) 유출 방지는 가장 중요한 과제 중 하나입니다. T Scientific의 i-PMS 솔루션은 이러한 요구에 맞춰 개발된 강력한 개인정보 보호 시스템입니다.</p>
      
      <h3>1. i-PMS란 무엇인가?</h3>
      <p>i-PMS(Privacy Management System)는 웹 서버 앞단 혹은 네트워크 레벨에서 오가는 트래픽을 분석하여, 주민등록번호, 여권번호, 운전면허번호 등 민감한 개인정보 패턴이 포함되어 있는지 실시간으로 검사합니다.</p>
      
      <h3>2. 주요 기능</h3>
      <ul>
        <li>실시간 패킷 분석 및 차단</li>
        <li>사용자 정의 정규식 탐지 룰 설정</li>
        <li>대시보드를 통한 직관적인 모니터링</li>
      </ul>

      <h3>3. 설정 가이드</h3>
      <p>관리자 콘솔에 접속하여 [정책 설정] > [개인정보 탐지] 메뉴로 이동합니다. 여기서 차단할 PII 유형을 선택하고 '활성화' 버튼을 클릭하면 즉시 적용됩니다.</p>
      
      <blockquote>
        "보안은 속도가 생명입니다. i-PMS는 비즈니스 로직에 영향을 주지 않으면서 고성능으로 PII를 필터링합니다."
      </blockquote>
      
      <p>더 자세한 기술적 사양은 문서 가이드 페이지를 참조하세요.</p>
    `
    };

    return (
        <article className="container mx-auto px-4 max-w-4xl pt-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-blue mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="bg-card-bg border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Cover Image */}
                <div className="h-64 md:h-96 w-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                        <div className="flex gap-2 mb-3">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-primary-blue text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-slate-300 text-lg">{post.subtitle}</p>
                    </div>
                </div>

                <div className="p-6 md:p-12">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-slate-700 mb-8">
                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" /> {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                        </div>
                        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" /> Share
                        </button>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </div>

            {/* Related Posts Placeholder */}
            <div className="mt-20 mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Related Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-32 bg-card-bg border border-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                        Related Post 1
                    </div>
                    <div className="h-32 bg-card-bg border border-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                        Related Post 2
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostDetail;
