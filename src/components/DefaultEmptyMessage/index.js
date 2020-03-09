import React from 'react';
import { Container, Text } from './styles';

export default function DefaultEmptyMessage() {
    return (
        <Container>
            <Text>Não há registros a serem exibidos.</Text>
        </Container>
    );
}
