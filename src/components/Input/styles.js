import styled from 'styled-components/native';

export const Container = styled.View`
    height: 46px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: '#999999',
})`
    flex: 1;
    font-size: 15px;
    color: #999999;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #dddddd;
`;
