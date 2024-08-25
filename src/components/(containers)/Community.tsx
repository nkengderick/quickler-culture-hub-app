import React from 'react';
import { useTranslations } from 'next-intl';
import DiscussionCard from '../(cards)/Discussion';
import QuestionCard from '../(cards)/Question';

const Community: React.FC = () => {
  const t = useTranslations('community');

  // Sample data for discussions and questions
  const discussions = [
    {
      id: '1',
      title: 'Exploring Traditional African Art Forms',
      author: 'John Doe',
      avatarUrl: '/images/avatar1.jpg',
      summary: 'A discussion on the significance of traditional African art and its impact on modern creativity.',
      upvotes: 45,
      comments: 12,
    },
    {
      id: '2',
      title: 'The Future of Cultural Exports in a Digital Age',
      author: 'Jane Smith',
      avatarUrl: '/images/avatar2.jpg',
      summary: 'How digital technology is transforming the cultural export industry.',
      upvotes: 30,
      comments: 8,
    },
    // Add more discussions here
  ];

  const questions = [
    {
      id: '1',
      question: 'What are the best platforms to showcase cultural products online?',
      author: 'Alice Johnson',
      avatarUrl: '/images/avatar3.jpg',
      answers: 4,
    },
    {
      id: '2',
      question: 'How to preserve the authenticity of cultural expressions in a global market?',
      author: 'Bob Lee',
      avatarUrl: '/images/avatar4.jpg',
      answers: 7,
    },
    // Add more questions here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('discussionsTitle')}</h2>
        {discussions.map((discussion) => (
          <DiscussionCard
            key={discussion.id}
            id={discussion.id}
            title={discussion.title}
            author={discussion.author}
            avatarUrl={discussion.avatarUrl}
            summary={discussion.summary}
            upvotes={discussion.upvotes}
            comments={discussion.comments}
          />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('questionsTitle')}</h2>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            question={question.question}
            author={question.author}
            avatarUrl={question.avatarUrl}
            answers={question.answers}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
