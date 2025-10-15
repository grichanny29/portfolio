
import { FlexWrapper } from "../../../../../components/logo/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import {Skill } from "./skill/Skill";

export const Skills = () => {
	return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper>
        <Skill />
        <Skill />
        <Skill />
      </FlexWrapper>
    </StyledSkills>
  );
};




const StyledSkills = styled.section`
	background-color:#E52B50;
  min-height: 100vh;
`;