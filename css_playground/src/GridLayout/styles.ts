import styled from 'styled-components'


export const Container = styled.div`
margin: 20px;
padding: 20px;
display: grid;
border: 5px solid #CE454F;
border-radius: 10px;
inline-size: 500px;
grid-template-columns: 1fr 1fr 2fr;
grid-template-rows: 100px 100px;
grid-gap: 20px;
writing-mode: unset;
> * {
    
padding: 20px;
border: 5px solid #526683;
border-radius: 10px;
background: #89A4BE;

}

`

export const One = styled.div`

grid-column: 1;
grid-row: 1/3;
`

export const Two = styled.div`

grid-column: 2;
grid-row: 1;
`

export const Three = styled.div`

grid-column: 2;
grid-row: 2;

`

export const Four = styled.div`

 grid-column: 3;
 grid-row: 1/3;

`
