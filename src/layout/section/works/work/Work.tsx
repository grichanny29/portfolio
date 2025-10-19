import styled from "styled-components";
 
type WorksPropsType ={
title: string
text:string
src:string
}

export const Work = (props:WorksPropsType) => {
	return (
		<StyledWork>
        <Image src={props.src} alt=''/>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href={"#"}>DEMO</Link>
				<Link href={"#"}>CODE</Link>
		</StyledWork>
	)
};

const StyledWork = styled.div`
	background-color:#00FFFF;
  max-width:540px;
		width:100%;


`;

const Image = styled.img`
	width:100%;
  height:260px;
	object-fit:cover;
`;

const Link = styled.a`
	

`;


const Text = styled.p`
	

`;


const Title = styled.h3`
	

`;


