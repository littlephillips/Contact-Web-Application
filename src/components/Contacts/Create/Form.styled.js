import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 30%;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  background: #ddd;
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  resize: vertical;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: blue;
`;

export const StyledWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const StyledLabel = styled.label`
font-size: 20px;

`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
