import styled from 'styled-components';

function placeTags(itemCount) {
  let css = '';
  for (let i = 0; i < itemCount; i++) {
    const top = Math.random() * 25 + 20;
    const right = Math.random() * 25 + 20;
    const left = Math.random() * 25 + 20;
    const bottom = 100 - top - right - left + 60;
    css += `&:nth-child(${i}) {
      border-top: ${top}px solid #282c34;
      border-right: ${right}px solid #282c34;
      border-left: ${left}px solid #282c34;
      border-bottom: ${bottom}px solid #282c34;
      > div {
        background: green;
        padding: ${Math.random() * 25 + 20}px;
      }
    }`;
  }
  return css;
}

export const TagListWrapper = styled.div`
  div {
    ${({ itemCount }) => placeTags(itemCount)}
  }
`;
