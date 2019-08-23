import React from 'react';
import { cityNames } from './TagList.data';
import Tag from '../Tag/Tag';
import { TagListWrapper } from './TagList.styles';

export default () => {
  return (
    <TagListWrapper itemCount={cityNames.length}>
      {cityNames.map(title => (
        <Tag key={title} title={title} itemCount={cityNames.length} />
      ))}
    </TagListWrapper>
  );
};
