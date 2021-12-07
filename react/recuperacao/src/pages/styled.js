import styled from "styled-components"; 

const Div = styled.div`
    .container {
        padding: 25px 25px;
    }

    .titulo {
        font-size: 30px;
        font-weight: bolder;
    }

    .row {
        display: flex;
        flex-direcition: row;

        margin: 25px 0px;

        align-items: center;
    }

    .texto {
        font-size: 20px;
        margin-right: 8px;
    }

    .input input {
        padding: 5px;

        outline: none;
        border-radius: 5px;
        border-width: 1px;

        width: 407px;
    }

    .botao button {
        padding: 5px;
        margin: 0px 15px;

        border-width: 1px;
        border-radius: 5px;

        background-color: white;

        cursor: pointer;
    }

    .botao button:hover {
        background-color: #d9d9d9;
    }
`;

export { Div }