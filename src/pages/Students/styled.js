import styled from 'styled-components';

export const StudentContainer = styled.div`
  margin-top: 20px;


`;

export const StudentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;

  & + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
