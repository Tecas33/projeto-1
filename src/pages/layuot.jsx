import styled from "styled-components";


export const Navbar = styled.nav ` 
   display: flex;
   background: #fcfeff;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   box-shadow: 0 0 8px #c9d1d3;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 100;

   h1{
    font-size: 25px;
    margin-left: 20px;
    font-weight: bold;
   }

   
   span{
    color: #06d95a;
   }

   ul{
     display: flex;
   }

   li{
    padding-left:1rem ;
    list-style: none;
   }

   a{
    text-decoration: none;
    color: #000;
    transition: all.5s;
    cursor: pointer;
   }

   a:hover{
    color: #06d95a;
   }
   
   @media (max-width:930px){
    justify-content: space-evenly;
    width: 100%;
   }
`

export const Call = styled.a`
   padding: 10px 1.5rem;
  background-color: #06d95a;
  border-radius: 7px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

 

    @media(max-width:930px){
      display: none;
   }
`

// Copiar
// #06d9b6
// Copiar
// #a4f479
// Copiar
// #d4d323
// Copiar
// #d13775
// Copiar
// #9c3c86
// Copiar
// #c9d1d3


// Hero-section

export const HeroS = styled.section`
  background-image: url('/img/fundo2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  min-height: 90vh;
  width: 100%;

  display: flex;
  align-items: center;
`;


export const Maintexto = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* Desktop spacing */
  gap: 2rem;

  /* 📱 Mobile */
  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;


export const Texto = styled.div`
  max-width: 600px;

  h2 {
    font-size: 40px;
    line-height: 1.2;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 930px) {
    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ButtonFull = styled.button`
  margin-top: 1rem;
  padding: 10px 3rem;
  border: 2px solid #06d95a;
  background: transparent;
  cursor: pointer;
  transition: all 0.4s ease;

  a {
    text-decoration: none;
    color: #06d95a;
    font-weight: bold;
  }

  &:hover {
    background-color: #06d95a;
    border-radius: 7px;
  }

  &:hover a {
    color: #fff;
  }

  @media (max-width: 930px) {
    width: 100%;
    max-width: 280px;
  }
`;



export const CardMain = styled.div ` 
   width: 100%;
   margin-top: 4rem;
`

export const CardSection = styled.div ` 
   display: flex;
   justify-content: space-evenly;
   padding: 10px;

   @media(max-width:930px){
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
   }
`

export const CardText = styled.div `
   text-align: center;
   justify-items: center;
   background: #fff; 
   padding: 35px 25px;
   border-radius: 16px;
   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
   transition: .5s ease;
   cursor: pointer;

   h1{
      font-size: 20px;
      padding: 10px;
   }

   &:hover{
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.12);
   }

    @media(max-width:930px){
     margin-top: 15px;
   }
`

export const About = styled.div` 
   width: 100%;
   margin-top: 8rem;
   /* background: #F4F8F5; */
   color: #1B1B1B;
   /* background: url('/img/imagem3.jpg');
   background-repeat: no-repeat;
   background-size: cover; */
   height: 20rem;
   /* overflow: hidden; */

    @media(max-width:930px){
     
      padding: 10px;

   }
`

export const AboutTitle = styled.div `
   text-align: center;
   padding: 1rem;

   h1{
      font-size: 25px;
   }

   span{
      color: #06d95a;
   }
`

export const AboutMain = styled.div `
   display:flex;
   justify-content: space-evenly;
   align-items:center;   

   @media(max-width:930px){
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      padding: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      border-radius: 10px;

      img{
         display: none;
      }
   }
`

export const AboutSection = styled.div `

   h2{
      font-size: 30px;
   }

   p{
      padding-top: 10px;
      line-height: 1.3;
   }

   h3{
      padding-top: 10px;
   }

   button{
      margin-top: 1rem;
      padding: 10px 2rem 10px 2rem ;
      background-color:transparent;
      border: 2px solid #06d95a;

      a{
         color: #06d95a;
         text-decoration: none;
         font-weight: bold;
      }
   }

   /* @media(max-width:930px){
      text-align: center;
   } */
`


// Produtos


export const ProductsSection = styled.section`
  width: 100%;
  margin-top: 15rem;
  padding: 100px 8%;
  background: #f4f8f5;
`

export const ProductsTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #2e7d32;
  margin-bottom: 50px;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;


   @media (max-width: 480px) {
     gap: 20px;
     padding: 10px;
  }
`

export const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const ProductBody = styled.div`
  padding: 20px;
`

export const ProductTitle = styled.h3`
  font-size: 20px;
  color: #2e7d32;
`

export const ProductDesc = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`

export const Stars = styled.div`
  color: #ffc107;
  margin-bottom: 10px;
`

export const BuyButton = styled.button`
  width: 100%;
  background: #06d95a;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #05c350;
  }
`



// Contato


export const ContactSection = styled.section`
  padding: 100px 8%;
  background: #f4f8f5;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;

  h2 {
    color: #2e7d32;
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

export const ContactDetails = styled.div`
  margin-top: 30px;

  div {
    margin-bottom: 15px;
    font-weight: bold;
    color: #333;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);

  h3 {
    color: #2e7d32;
    margin-bottom: 20px;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
  }

  textarea {
    resize: none;
    height: 120px;
  }

  button {
    width: 100%;
    background: #06d95a;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #05c350;
  }
`;


// Footer

export const FooterContainer = styled.footer`
  background: #1b1b1b;
  color: #fff;
  padding: 60px 8% 30px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
`;

export const FooterColumn = styled.div`
  h3 {
    color: #06d95a;
    margin-bottom: 15px;
  }

  p, a {
    color: #ccc;
    font-size: 14px;
    line-height: 1.6;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
  }

  a:hover {
    color: #06d95a;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
`;
