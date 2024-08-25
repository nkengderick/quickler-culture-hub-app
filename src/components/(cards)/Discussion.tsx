import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface DiscussionCardProps {
  id: string;
  title: string;
  author: string;
  avatarUrl: string;
  summary: string;
  upvotes: number;
  comments: number;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ id, title, author, avatarUrl, summary, upvotes, comments }) => {
  const t = useTranslations('discussionCard');

  return (
    <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img src={avatarUrl} alt={author} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-muted-foreground">{author}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-muted-foreground mb-4">{summary}</p>
      <div className="flex justify-between text-gray-600 dark:text-muted-foreground">
        <div className="flex items-center">
          <span className="mr-2">{upvotes} {t('upvotes')}</span>
          <span>{comments} {t('comments')}</span>
        </div>
        <Link href={`/community/discussion/${id}`} legacyBehavior>
          <a className="text-blue-500 dark:text-blue-400">{t('viewDetails')}</a>
        </Link>
      </div>
    </div>
  );
};

export default DiscussionCard;
