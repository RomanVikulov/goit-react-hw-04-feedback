import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Btn = styled.button`
    width: 100px;
    height: 45px;
    color: #2a2a2a;
    font-weight: 700;
    text-transform: uppercase;
    background-color: rgba(150, 140, 200, 0.5);
    border-radius: 5px;
    border: 1px solid rgba(150, 150, 150, 0.263);
    box-shadow: 5px 5px 10px -2px rgba(100, 100, 100);
    cursor: pointer;
    &.good {
        background-color: rgba(0, 128, 0, 0.5);
    }
    &.neutral {
        background-color: rgba(200, 200, 150, 0.5);
    }
    &.bad {
        background-color: rgba(128, 0, 0, 0.5);
    }
    &:hover,
    &:focus,
    &:active {
        box-shadow: 5px 5px 10px -2px rgba(132, 132, 132) inset;
    }
`;

export { Wrapper, Btn };
