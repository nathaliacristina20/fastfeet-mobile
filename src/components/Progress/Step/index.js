import React from 'react';
import { Container, StepT, Circle, Name } from './styles';

export default function Step({ active, name }) {
    return (
        <Container>
            <StepT>
                <Circle active={active} />
                <Name>{name}</Name>
            </StepT>
        </Container>
    );
}
