import React from 'react';
import { Clock, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
    id: string;
    title: string;
    excerpt: string;
    tags: string[];
    author: string;
    date: string;
    readTime: string;
    thumbnail: string;
}

const Card = ({ id, title, excerpt, tags, author, date, readTime, thumbnail }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-card-bg rounded-2xl overflow-hidden border border-slate-800 hover:shadow-xl hover:shadow-primary-blue/10 transition-all duration-300 group"
        >
            <Link to={`/post/${id}`} className="block">
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        {tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs font-semibold px-2 py-1 rounded bg-navy-900/80 backdrop-blur-sm text-primary-blue border border-primary-blue/30">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-4">
                            <span>{author}</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default Card;
