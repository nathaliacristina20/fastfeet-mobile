import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
    Container,
    Content,
    Header,
    ContentHeader,
    Welcome,
    Title,
    DeliverymanName,
    Logout,
    Body,
    BodyHeader,
    Options,
    StatusLink,
    StatusText,
    DeliveriesList,
    Loading,
} from './styles';

import { STATUS } from '~/shared/constants';

import Avatar from '~/components/Avatar';
import DefaultEmptyMessage from '~/components/DefaultEmptyMessage';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
import Delivery from '~/components/Delivery';

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();
    const [deliveryman] = useState(
        useSelector(state => state.auth.deliveryman)
    );

    const [deliveries, setDeliveries] = useState([]);

    const [page, setPage] = useState(1);
    const [status, setStatus] = useState(STATUS.pending.value);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function loadDeliveries() {
            try {
                const { data } = await api.get(
                    `deliveryman/${deliveryman.id}/deliveries`,
                    {
                        params: {
                            page,
                            perPage: 5,
                            status,
                        },
                    }
                );

                setDeliveries(data);
            } catch (err) {
                if (err.response.status === 400) {
                    Alert.alert('Falha', err.response.data.error);
                } else {
                    Alert.alert('Falha', 'Ocorreu um erro inesperado.');
                }
            }
            setLoading(false);
        }
        loadDeliveries();
    }, [status]);

    async function loadMore() {
        console.tron.log(`load more! `);
        // const { data } = await api.get(
        //     `deliveryman/${deliveryman.id}/deliveries`,
        //     {
        //         params: {
        //             page,
        //             perPage: 3,
        //         },
        //     }
        // );

        // const dataParsed = data.map(delivery => ({
        //     ...delivery,
        //     updatedAtParsed: format(
        //         parseISO(delivery.updatedAt),
        //         "dd'/'MM'/'yyyy",
        //         {
        //             locale: pt,
        //         }
        //     ),
        // }));
        // console.tron.log(`data `, dataParsed);
        // setDeliveries(dataParsed);
    }

    async function refreshList() {
        console.tron.log(`refresh list! `);
        // const { navigation } = this.props;
        // const user = navigation.getParam('user');

        // const response = await api.get(`/users/${user.login}/starred`, {
        //     params: {
        //         per_page: 30,
        //         page: 1,
        //     },
        // });

        // this.setState({
        //     stars: response.data,
        // });
    }

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <Header>
                    <ContentHeader>
                        <Avatar
                            uri={deliveryman.avatar && deliveryman.avatar.url}
                            nameInitials={deliveryman.name_initials}
                            size={60}
                        />
                        <Welcome>
                            <Title>Bem vindo de volta,</Title>
                            <DeliverymanName>
                                {deliveryman.name}
                            </DeliverymanName>
                        </Welcome>
                    </ContentHeader>
                    <Logout>
                        <TouchableOpacity onPress={handleLogout}>
                            <Icon
                                name="exit-to-app"
                                size={18}
                                color="#E74040"
                            />
                        </TouchableOpacity>
                    </Logout>
                </Header>
                <Body>
                    <DefaultEmptyMessage loading={loading} data={deliveries} />
                    {loading ? (
                        <Loading>
                            <ActivityIndicator color="#ddd" size={50} />
                        </Loading>
                    ) : (
                            <>
                                <BodyHeader>
                                    <DeliverymanName>Entregas</DeliverymanName>

                                    <Options>
                                        <StatusLink
                                            onPress={() => setStatus(STATUS.pending.value)}
                                        >
                                            <StatusText
                                                enabled={status === STATUS.pending.value && true
                                                }
                                            >
                                                STATUS.pending.labelLink
                                        </StatusText>
                                        </StatusLink>
                                        <StatusLink
                                            onPress={() => setStatus(STATUS.pending.delivered)}
                                        >
                                            <StatusText
                                                enabled={
                                                    status === STATUS.delivered && true
                                                }
                                            >
                                                STATUS.delivered.labelLink
                                        </StatusText>
                                        </StatusLink>
                                    </Options>
                                </BodyHeader>
                                <DeliveriesList
                                    data={deliveries}
                                    keyExtractor={delivery => String(delivery.id)}
                                    onRefresh={() => refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
                                    refreshing={loading} // Variável que armazena um estado true/false que representa se a lista está atualizando
                                    onEndReachedThreshold={0.1} // Carrega mais itens quando chegar em 20% do fim
                                    onEndReached={loadMore} // Função que carrega mais itens
                                    renderItem={({ item: delivery }) => (
                                        <Delivery
                                            navigation={navigation}
                                            delivery={delivery}
                                        />
                                    )}
                                />
                            </>
                        )}
                </Body>
            </Content>
        </Container>
    );
}

Dashboard.navigationOptions = {
    title: null,
};

Dashboard.propTypes = {
    navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
};

Dashboard.defaultProps = {};
