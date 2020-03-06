import React, { useState } from 'react';
import { Image } from 'react-native';

import { Container, Form, FormInput, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const loading = false;

    function handleSubmit() {
        // dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <Image source={logo} />
            <Form>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Informe seu ID de cadastro"
                    value={email}
                    onChangeText={setEmail}
                />
                <SubmitButton loading={loading} onPress={handleSubmit}>
                    Entrar no sistema
                </SubmitButton>
            </Form>
        </Container>
    );
}
