import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Container, List } from './styles';
import Step from '~/components/Progress/Step';

import { STATUS } from '../../shared/constants';

export default function Progress({ stepActive }) {
    const [progress] = useState(STATUS);

    // const [progress] = useState([
    //     { key: 'pendente', label: 'Aguardando Retirada', active: true },
    //     { key: 'retirada', label: 'Retirada', active: false },
    //     { key: 'entregue', label: 'Entregue', active: false },
    // ]);

    const [loading, setLoading] = useState(true);
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        function loadSteps() {
            const checkedSteps = [];
            let finded = false;
            for (var step in progress) {
                console.log(progress[step].label);
                if (step.value !== stepActive && !finded) {
                    checkedSteps.push({ ...step, active: true });
                }
                if (step.value !== stepActive && finded) {
                    checkedSteps.push({ ...step, active: false });
                }
                if (step.value === stepActive) {
                    finded = true;
                    checkedSteps.push({ ...step, active: true });
                }
            }
            setSteps(checkedSteps);
            setLoading(false);
        }
        loadSteps();
    }, []);

    return (
        <Container>
            <List
                data={steps}
                keyExtractor={step => step.key}
                refreshing={loading}
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
