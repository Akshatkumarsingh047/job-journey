import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: var(--primary-500);
    padding: 0.5rem 1rem;
    border-radius: var(--borderRadius);
    border-color: transparent;
    text-transform: capitalize;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
