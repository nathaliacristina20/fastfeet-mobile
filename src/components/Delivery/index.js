import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
    Container,
    Content,
    Top,
    Title,
    Footer,
    FooterContent,
    Infos,
    Info,
    InfoTitle,
    InfoText,
    DetailsLink,
    DetailsLinkText,
} from './styles';

import Progress from '~/components/Progress';

export default function Delivery({ navigation, delivery }) {
    const dataUpdatedAtParsed = useMemo(() => {
        return format(parseISO(delivery.updatedAt), "dd'/'MM'/'yyyy", {
            locale: pt,
        });
    }, []);

    return (
        <Container>
            <Content>
                <Top>
                    <Icon name="local-shipping" size={20} color="#7d40e7" />
                    <Title>{delivery.name}</Title>
                </Top>
                <Progress stepActive={delivery.status.id} />
            </Content>
            <Footer>
                <FooterContent>
                    <Infos>
                        <Info>
                            <InfoTitle>Data</InfoTitle>
                            <InfoText>{dataUpdatedAtParsed}</InfoText>
                        </Info>
                        <Info>
                            <InfoTitle>Cidade</InfoTitle>
                            <InfoText>{delivery.recipient.city}</InfoText>
                        </Info>
                    </Infos>
                    <DetailsLink
                        onPress={() =>
                            navigation.navigate('DeliveryDetail', {
                                delivery,
                            })
                        }
                    >
                        <DetailsLinkText>Ver detalhes</DetailsLinkText>
                    </DetailsLink>
                </FooterContent>
            </Footer>
        </Container>
    );
}

Delivery.propTypes = {
    navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
    delivery: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
};

Delivery.defaultProps = {};
