import React from 'react';
import { Container, Text } from './styles';
import PropTypes from 'prop-types';
export default function DefaultEmptyMessage({ loading, data }) {
    return (
        <>
            {!loading && data.length < 1 && (
                <Container>
                    <Text>Não há registros a serem exibidos.</Text>
                </Container>
            )}
        </>
    );
}

DefaultEmptyMessage.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
};

DefaultEmptyMessage.defaultProps = {};
