import styled from "styled-components";

export const Collapsible = styled.div`
  .toggle {
    background: blue;
    padding: 2rem 5rem;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  .content-parent {
    background: pink;
    width: 12.5rem;
    height: 0;
    transition: height ease 0.3s;
  }
`;
