import React from 'react';
import cn from 'classnames';
import '../styles/NewsItem.scss';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  // JSON 객체 필드 내용
  // title: 제목
  // description: 내용
  // url: 링크
  // urlToImage: 뉴스 이미지

  return (
    <div classnames={cn('NewsItem')}>
      <div classnames={cn('NewsItemBlock')}>
        {urlToImage && (
          <div classnames={cn('thumbnail')}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div classnames={cn('contents')}>
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
