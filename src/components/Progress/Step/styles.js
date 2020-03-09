import styled from 'styled-components/native';

export const Container = styled.View``;

export const StepT = styled.View`
    justify-content: center;
    flex-direction: row;
`;

export const Name = styled.Text`
    font-size: 8px;
    color: #999999;
    bottom: -40px;
    margin-left: -10px;
    position: absolute;
    max-width: 44px;
    min-height: 30px;
`;

export const Circle = styled.View`
    background: ${props => (props.active ? `#7d40e7` : `#fff`)};
    border: ${props => (!props.active ? `1px solid #7d40e7` : `0`)};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    bottom: -5px;
`;
