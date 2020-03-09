import styled from 'styled-components/native';

// styled.ScrollView.attrs({
//     showsVerticalScrollIndicator: false,
//     contentContainerStyle: { padding: 10 },
// })`

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Container2 = styled.View`
    background: #7d40e7;
    /* background: #7d40e7;
    height: 115px; */
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 10 },
})`
    margin: 50px 20px 0 20px;
`;

export const Cards = styled.View``;

export const Card = styled.View`
    background: #fff;
    border: 1px solid #0000001a;
    padding: 13px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Top = styled.View`
    flex-direction: row;
`;

export const CardTitle = styled.Text`
    color: #7d40e7;
    margin-left: 10px;
    margin-bottom: 8px;
`;

export const DetailRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Detail = styled.View`
    margin-bottom: 10px;
`;

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #999999;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: #666666;
`;

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-color: #0000001a;
    background: #f8f9fd;
`;

export const Button = styled.TouchableOpacity`
    border-right-color: #0000001a;
    border-right-width: 1px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 14px;
`;

export const ButtonIcon = styled.View`
    align-items: center;
    box-shadow: 5px 10px #888888;
`;

export const ButtonText = styled.Text`
    font-size: 12px;
    color: #999999;
    max-width: 60px;
    text-align: center;
`;
