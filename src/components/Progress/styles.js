import styled from 'styled-components';

export const Container = styled.View`
    padding: 26px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: #7d40e7;
    border-bottom-width: 1px;
    margin-bottom: 20px;
`;
