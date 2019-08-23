import React from 'react';
import PropTypes from 'prop-types';
import { TagWrapper } from './Tag.styles';
const Tag = ({ title, itemCount }) => {
  return (
    <TagWrapper itemCount={itemCount}>
      <div>{title}</div>
    </TagWrapper>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired
};
export default Tag;
