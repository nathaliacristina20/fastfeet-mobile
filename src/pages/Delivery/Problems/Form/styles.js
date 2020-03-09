import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
    margin: 68px 20px 0 20px;
`;

export const InputStyle = styled.TextInput.attrs({
    placeholderTextColor: '#999999',
})`
    height: 300px;
    font-size: 16px;
    color: #999999;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #0000001a;
`;

export const SubmitButton = styled(Button)`
    margin-top: 20px;
    background: #7d40e7;
`;
