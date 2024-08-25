import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface QuestionCardProps {
  id: string;
  question: string;
  author: string;
  avatarUrl: string;
  answers: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ id, question, author, avatarUrl, answers }) => {
  const t = useTranslations('questionCard');

  return (
    <div className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img src={avatarUrl} alt={author} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{question}</h3>
          <p className="text-sm text-gray-500 dark:text-muted-foreground">{author}</p>
        </div>
      </div>
      <div className="flex justify-between text-gray-600 dark:text-muted-foreground">
        <span>{answers} {t('answers')}</span>
        <Link href={`/community/question/${id}`} legacyBehavior>
          <a className="text-blue-500 dark:text-blue-400">{t('viewDetails')}</a>
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
