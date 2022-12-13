/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        '--padding': '0',
        '--height': '8px',
        '--borderRadius': '4px'
    },
    medium: {
        '--padding': '0',
        '--height': '12px',
        '--borderRadius': '4px'
    },
    large: {
        '--padding': '4px',
        '--height': '24px',
        '--borderRadius': '8px'
    },
}

const ProgressBar = ({ value, size }) => {
    const style = SIZES[size];

    return <Wrapper
        style={style}
        value={value}
        aria-valuenow={value}
        max="100"
    ></Wrapper>;
};

const Wrapper = styled.progress`
    appearance: none;
    height: var(--height);
    border: none;

    &::-webkit-progress-bar{
        padding: var(--padding);
        background-color: ${COLORS.transparentGray15};
        border-radius: var(--borderRadius);
        box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
        overflow: hidden;
    }
    &::-webkit-progress-value{
        background-color: ${COLORS.primary};
        border-radius: ${props => props.value === 100 ? 'var(--borderRadius)' : 'var(--borderRadius) 0 0 var(--borderRadius)'};
    }
`

export default ProgressBar;
