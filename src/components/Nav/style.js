import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: -1;
  position: absolute;
  top: 70px;
  right: -70px;
  ul {
    a {
      display: inline-block;
      width: 85px;
      margin-bottom: 2px;
      padding: 10px 10px 10px 15px;
      border: 1px solid #a5a5a5;
      border-radius: 10px;
      font-size: 0.9rem;
      text-align: center;
      text-decoration: none;
      background: var(--navColor);
      color: #fff;
      &.selected {
        background: #fff;
        color: #333;
      }
    }
  }
`;
