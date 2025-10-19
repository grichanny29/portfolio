import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";


export const Testymony = () => {
  return(
    <StyledTestymony>
       <SectionTitle> Testymony</SectionTitle>
       <FlexWrapper direction={"column"} align={"center"}>
         <Icon iconId={'quote'}/>
          <Slider/>
       </FlexWrapper>
    </StyledTestymony>
  )
};


const StyledTestymony=styled.section`
  background-color:#FA8072;
  min-height:50vh;
`;