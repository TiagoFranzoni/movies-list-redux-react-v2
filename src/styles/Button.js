import styled from "styled-components";

function decideButtonBackground(state) {
    switch (state) {
        case "remove":
            return "brown";
        default:
            return "#f5f5f5"
    }
}

function decideButtoncolor(state) {
    switch (state) {
        case "remove":
            return "lightcyan";
        default:
            return "#dark"
    }
}

export const Button = styled.button`
    background: ${props => decideButtonBackground(props.state)};
    color: ${props => decideButtoncolor(props.state)};
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
`


