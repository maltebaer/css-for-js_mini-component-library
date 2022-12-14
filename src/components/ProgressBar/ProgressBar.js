/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        '--padding': '0px',
        '--height': '8px',
        '--borderRadius': '4px'
    },
    medium: {
        '--padding': '0px',
        '--height': '12px',
        '--borderRadius': '4px'
    },
    large: {
        '--padding': '4px',
        '--height': '16px',
        '--borderRadius': '8px'
    },
}

const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size]

    return <Wrapper style={styles}>
        <Trimmer>
            <Bar
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
                style={styles}
                value={value}
            >
                <VisuallyHidden>{value}%</VisuallyHidden>
            </Bar>
        </Trimmer>
    </Wrapper>
};

const Wrapper = styled.div`
    padding: var(--padding);
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--borderRadius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    `

const Trimmer = styled.div`
    // used so that bar is clipped by border radius
    overflow: hidden;
    border-radius: 4px;
`

const Bar = styled.div`
    height: var(--height);
    width: ${props => props.value}%;
    background-color: ${COLORS.primary};
`

export default ProgressBar;
