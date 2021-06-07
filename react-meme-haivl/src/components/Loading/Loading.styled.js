import styled from 'styled-components';

export const StyledLoadingComponent = styled.div`
position: fixed;
top:0;
left: 0;
bottom: 0;
right: 0;
z-index: 10;
display: flex;
background-color: #ffffffcf;
${(props) => {
        if (props.isShowLoading) {
            return `
            opacity:1;
            visibility: visible;
            `
        }else{
            return `
            opacity:0;
            visibility: hidden;
            `
        }
    }}
transform: all 0.3s ease;
`

export const StyledSVG = styled.svg`
display: block;
margin: auto;
width: 150px;
height: 150px;
`
