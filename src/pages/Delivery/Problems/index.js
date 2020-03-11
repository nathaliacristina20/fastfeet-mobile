import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
    Container,
    Content,
    Title,
    Problems,
    Problem,
    ProblemDescription,
    ProblemDate,
    Loading,
} from './styles';

import DefaultEmptyMessage from '~/components/DefaultEmptyMessage';

export default function DeliveryProblems({ navigation }) {
    const [delivery] = useState(navigation.getParam('delivery'));
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProblems() {
            try {
                const { data } = await api.get(
                    `delivery/${delivery.id}/problems`
                );

                const dataFormatted = data.map(problem => ({
                    ...problem,
                    createdAt: format(
                        parseISO(delivery.updatedAt),
                        "dd'/'MM'/'yyyy",
                        {
                            locale: pt,
                        }
                    ),
                }));
                setProblems(dataFormatted);
            } catch (err) {
                if (err.response.status === 400) {
                    Alert.alert('Falha', err.response.data.error);
                } else {
                    Alert.alert('Falha', 'Ocorreu um erro inesperado.');
                }
            }
            setLoading(false);
        }
        loadProblems();
    }, []);

    return (
        <Container>
            <Content>
                <Title>{delivery.product}</Title>

                <DefaultEmptyMessage loading={loading} data={problems} />

                {loading ? (
                    <Loading>
                        <ActivityIndicator color="#ddd" size={50} />
                    </Loading>
                ) : (
                        <>
                            <Problems
                                data={problems}
                                refreshing={loading}
                                keyExtractor={problem => String(problem.id)}
                                renderItem={({ item: problem }) => (
                                    <Problem>
                                        <ProblemDescription>
                                            {problem.description}
                                        </ProblemDescription>
                                        <ProblemDate>
                                            {problem.createdAt}
                                        </ProblemDate>
                                    </Problem>
                                )}
                            />
                        </>
                    )}
            </Content>
        </Container>
    );
}

DeliveryProblems.navigationOptions = ({ navigation }) => ({
    title: 'Visualizar problemas',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});

DeliveryProblems.propTypes = {
    navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
};

DeliveryProblems.defaultProps = {};
