
import styled from "styled-components";
import { Icon } from "../../../../../../components/icon/Icon";

export const Skill =()=> {
	return (
		<div>
						 <StyledSkill>
							<Icon iconId={"codeSvg"}/>
							 <SkillTitle>html5</SkillTitle>
							 <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>
						 </StyledSkill>
		</div>
	)
};



const StyledSkill = styled.div`
	

`

const SkillTitle = styled.h3`
	

`

const SkillText = styled.p`
	

`