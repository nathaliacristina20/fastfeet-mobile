import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Container, List } from './styles';
import Step from '~/components/Progress/Step';

export default function Progress({ stepActive }) {
    const [progress] = useState([
        { key: 'pendente', label: 'Aguardando Retirada', active: true },
        { key: 'retirada', label: 'Retirada', active: false },
        { key: 'entregue', label: 'Entregue', active: false },
    ]);

    const [steps, setSteps] = useState([]);

    useEffect(() => {
        function loadSteps() {
            const checkedSteps = [];
            let finded = false;
            progress.forEach(step => {
                if (step.key !== stepActive && !finded) {
                    checkedSteps.push({ ...step, active: true });
                }
                if (step.key !== stepActive && finded) {
                    checkedSteps.push({ ...step, active: false });
                }
                if (step.key === stepActive) {
                    finded = true;
                    checkedSteps.push({ ...step, active: true });
                }
            });
            setSteps(checkedSteps);
        }
        loadSteps();
    }, []);

    return (
        <Container>
            <List
                data={steps}
                keyExtractor={step => step.key}
                renderItem={({ item: step }) => (
                    <Step name={step.label} active={step.active} />
                )}
            />
        </Container>
    );
}

Progress.propTypes = {
    // progress: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    // .isRequired,
    stepActive: PropTypes.string.isRequired,
};

Progress.defaultProps = {};
