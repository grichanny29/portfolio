import styled from "styled-components";
import photo from "../../../../assets/images/photo.jpg"
import { FlexWrapper } from "../../../../components/logo/FlexWrapper";

 


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
				< TextWrapper >
          <span>Hi There</span>
          <Name>I am Svetlana Dyablo</Name>
          <MainTitle>A Web Developer.</MainTitle>
				</TextWrapper>
				
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain =styled.div`
	min-height:100vh;
  background-color:#E0FFFF;
`;

const Photo =styled.img`
	width:350px;
	height:430px;
	object-fit:cover;
`;
const MainTitle = styled.h1`
	
`;
const Name =styled.h2`
	
`;


const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: flex-start;  
  gap: 10px;                
`;
