









// import styled from 'styled-components';
// import photo from '../../../assets/images/photoI.webp';
// import { FlexWrapper } from '../../../components/FlexWrapper';
// import { Container } from '../../../components/Container';
// import { theme } from '../../../styles/Theme';

// export const Mainn = () => {
//   return (
//     <StyledMain>
//       <Container>
//         <FlexWrapper align={'center'} justify={'space-between'}>
//             <div >
//                <SmallText>Hi There</SmallText>
//                <Name>I am <span>GRICHANNYI ALEKSANDR</span> </Name>
//                <MainTitle>IT-incubator, student</MainTitle>
//             </div>

//             <PhotoWrapper>
//                 <Photo src={photo} alt="" />
//             </PhotoWrapper>
         
//         </FlexWrapper>
//       </Container>

//     </StyledMain>
//   );
// };

// const StyledMain = styled.section`
//   min-height: 100vh;
//   background-color: #e0ffff;
//   display:flex;
// `;

// const PhotoWrapper= styled.div`
//   position:relative;
//   z-index: 0;

//   &::before {
//     content:"";
//     width:360px;
//     height:470px;
//     border:5px solid${theme.colors.accent};

//     position: absolute;
//     top:-24px;
//     left:24px;
//     z-index: 1;
//   }
// `;


// const Photo = styled.img`
//   max-width: 350px;   
//   max-height: 430px;  
//   width: auto;        
//   height: auto;       
//   object-fit: cover;
// `;

// const MainTitle = styled.h1`
// font-weight:400;
// font-size:27px;

// `;
// const Name = styled.h2`
// font-family:'Josefin Sans',sans-serif;
// font-weight:700;
// font-size:50px;
// letter-spacing:0.05em;
// margin:10px 0;

// span {
//   position:relative;
//   z-index:0;

//   &::before{
//     content:"";
//     display:inline-block;
//     width:100%;
//     height:20px;
//     background-color:${theme.colors.accent};

//     position: absolute;
//     bottom:0;
//     z-index:-1;
//   }
// }

// `;



// const SmallText = styled.h2`
//  font-weight:400;
//  font-size:14px;

// `;






import styled from 'styled-components';
import photo from '../../../assets/images/photoI.webp';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Mainn = () => {
  return (
    <StyledMainn>
      <Container>
        <FlexWrapper>

          <TextWrapper>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Grichannyi Aleksandr</span>
            </Name>
            <MainTitle>IT-incubator, student</MainTitle>
          </TextWrapper>

          <PhotoWrapper>
            <Photo src={photo} alt="GRICHANNYI ALEKSANDR" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMainn>
  );
};


const StyledMainn = styled.section`
  min-height: 100vh;
  background-color: #e0ffff;
  display: flex;
  align-items: flex-start;
  padding-top: 200px; 
`;


const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%;
  gap: 20px;
`;


const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
  margin: 0;
`;
const 
TextWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  gap: 10px;
  text-align: left;
`;


const PhotoWrapper = styled.div`
  position: relative;
  z-index:0;

  &::before {
    content:"";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position:absolute;
    top:-24px;
    left:24px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  max-width: 350px;
  max-height: 430px;
  width: auto;
  height: auto;
  object-fit: cover;
`;


const SmallText = styled.span`
  font-weight:400;
  font-size: 14px;
`;

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 0.05em;
  margin:10px 0;
  position: relative;
  display: inline-block;

  span {
    position: relative;
    z-index: 0;
    display: inline-block;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom:4px;
      left: 0;
      width: 100%;
      height: 18px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom:0;
      z-index:-3;
    }
  }
`;
