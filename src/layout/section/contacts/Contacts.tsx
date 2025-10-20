  import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";




  export const Contacts = () => {
    return (
      <StalydContacts>
        <SectionTitle>  Contact </SectionTitle> 
        <StalydForm>
          <Field placeholder={"name"}/>
          <Field placeholder={"subject"}/>
           <Field placeholder={"message"} as= {'textarea'}/>
           <Button type={"submit"}>Send message</Button>
        </StalydForm>
      </StalydContacts>
    )
 };


 

 
 const StalydContacts = styled.section`
  min-height:50vh;
  background-color:#AFEEEE;

 `;
const StalydForm= styled.form`
  max-width:500px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:10px;
  margin: 0 auto;
 `;
 
 const Field = styled.input`
  

 `;