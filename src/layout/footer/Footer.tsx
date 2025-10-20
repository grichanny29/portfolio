import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";


export const Footer = () => {
  return (
    <StyledFooter>

      <FlexWrapper direction={"column"} align={"center"}>
         <Name>Aleksandr</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon height={"21px"} width={"21px"} viewBox={'0 0 21px 21px'} iconId={'instagram'} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  height={"21px"} width={"21px"} viewBox={'0 0 21px 21px'}  iconId={'telegram'} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  height={"21px"} width={"21px"} viewBox={'0 0 21px 21px'}  iconId={'vk'} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  height={"21px"} width={"21px"} viewBox={'0 0 21px 21px'}  iconId={'in'} />
          </SocialLink>
        </SocialItem>
      </SocialList>

      <Copyright>@2025Aleksandr Grichannyi,All Rights Reserved</Copyright>
      </FlexWrapper>
      
    </StyledFooter>
  );
};


const StyledFooter = styled.footer`
  background-color:#FFFF00;
  min-height:20vh;

`;


const Name = styled.span`
  

`;

const SocialItem  = styled.li`
  

`;

const SocialList = styled.ul`
  display:flex;
 gap:30px;
`;


const SocialLink = styled.a`
  

`;

const Copyright = styled.small`
  

`;