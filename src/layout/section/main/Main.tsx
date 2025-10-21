import styled from 'styled-components';
import photo from '../../../assets/images/photoI.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <TextWrapper>
          <span>Hi There</span>
          <Name>I am GRICHANNYI ALEKSANDR </Name>
          <MainTitle>IT-incubator, student</MainTitle>
        </TextWrapper>

        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #e0ffff;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
const MainTitle = styled.h1``;
const Name = styled.h2``;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;