import styled from 'styled-components'

export const StyleFooter = styled.footer`
    background-color: black;
    bottom: 0;
    width: 100%;
    height: 40px;
    font-family: 'Lora', serif;
    color: white;
    display: flex ; 
    justify-content:center;
    padding: 12px ;
    
    `
export const StyleDivForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);
    width: 100%;
    left: 0;
    margin-top: 100px;

    div{
        display: flex;
        flex-direction: column;
        margin: 20%;
        padding: 40px;
        background: #0F0E17;
        color: white;
    }

    div h2{
        text-align: left;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 56px;
    }

    div h4{
        text-align: justify;
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        color: #A7A9BE;
    }

    div input{
        margin-top: 10px;
        padding: 12px 10px 12px 16px;
    }

    div button{
        margin-top: 10px;
        background: #FF8906;
        border: none;
        padding: 8px;
        font-size: 16px;
        line-height: 24px;
        color: white;
        font-family: 'Nunito', sans-serif;    
        cursor: pointer;
    }
   `
export const StyleProyects = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   position: absolute;
   width: 100%;
   left: 0;

   div{
       
       display: flex;
       flex-direction: row;
       align-items: center;
       margin-top: 80px;
       margin-left: 50px;
   }
   img{
       
       width: 600px;
       margin: 30px;
       width: 40%;
       border-radius: 10%;
       border: solid 1px #0F0E17;
   }
   `
export const StyleNav = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #0F0E17;
    padding: 20px 0;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    font-family: 'Lora', serif;
    color: white;


    button{
        margin-right: 20px;
        background: #FF8906;
        border: none;
        padding: 8px;
        font-size: 16px;
        line-height: 24px;
        color: white;
        font-family: 'Nunito', sans-serif;    
        cursor: pointer;
    }
    `

export const StyleDivNav = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: center;
    align-items: center;
    margin: 0 50px;


    a{
        margin-left: 20px;
        text-decoration: none;
        color: white;
        &:hover{
            color: #F25F4C;
        }
    }
`

export const StyleDivpre = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
display: flex;
justify-content: space-around;
padding-top: 8%;
height: 65.6vh;
background: #0F0E17;
width: 100%;



div{
    margin-left: 50px;
}

h2{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 80px;
    color: #FFFFFE;
}

h4{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    color: #A7A9BE;
}
h3{
    color: #FF8906;
    font-size:50px;
    cursor:pointer;
}
img{
    width: 65%;
    margin: 8%;
    border: 2px solid black;
    }

`

export const StyleDiv = styled.div`
display: flex;
flex-direction: row;
height: 40vh;
justify-content: space-around;
padding-top: 1%;
width: 100%;
left: 0;

div{
    margin: 50px;
}
h4{
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
}

h2{
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
}
`

export const StyleDivServicios = styled.div`
background: linear-gradient(#FEB692, #EA5455);

justify-content: space-around;
margin-top: 1%;
padding: 2%;

 h1{
font-family: 'Nunito', sans-serif;
font-size:30px ;
color: #0F0E17 ;
margin-left: 4%;
padding-left: 0;}
`

export const BotonServicios = styled.button`
    background-color: #000;
    border: 2px solid #000;
    cursor:pointer;
    overflow: hidden;
    padding: 10px;
    color:#FF8906;
    padding: 8px;
    display: flex;
`;

export const StyleGrid = styled.div`

display: grid;
grid-template-columns: repeat(3, auto);

li{
    padding: 0 0 15px 15px;
    list-style-type: none;
}
`

    ;

export const StyleGridTesti = styled.div`

display: grid;
grid-template-columns: repeat(3, auto);
grid-column-gap: 2em;
`

export const StyleGridRows = styled.div`

display: grid;
grid-template-rows: repeat(2, auto);
margin-left: 20%;
margin-right:10%;

p{
    font-size: 23px;
    color: #fff ;
    font-family: 'Lora';
  
}

img{
    width:20%;
}
`
export const StyleDivpre2 = styled.div`
display: flex;
padding-top: 8%;
height: 70vh;
background: #0F0E17;
width: 100%;

h2{ 
    position: absolute;
    font-size:65px ;
    color: #fff ;
    margin-left: 0;
    padding-left: 5%;
    padding-top: 0;
    margin-top: -5%;
    font-family: 'Nunito', sans-serif;
}

`
export const Area = styled.div`
    display: flex ; 
    justify-content: space-around;
    width:100%;
`;

export const Projectgrid = styled.div`
   display: grid;
grid-template-columns: repeat(2, 50vw);

`;
export const Projectrows = styled.div`
   display: grid;
grid-template-rows: repeat(2, 50vh);
img{

    width: 47vw;
    height: 47vh;
 }

`;

export const Projecttitle = styled.div`
    position: flex;
    background: #3d1f07 ;
  
    border-radius: 10px;
    a{  text-decoration-line:none;}
    span{
     
        background-color: #FF8906;
    color: black;
    padding: 1%;
    display: flex ; 
    justify-content: space-around;
    margin-right: 15px;
    border: 2px solid #000;
    border-radius: 2px;
    cursor:pointer;
    position:relative;
    
    }
    `;

export const StyleProyects2 = styled.div`
 display: flex;
height: 100vh;
background: #0F0E17;
width: 100%;
 `;