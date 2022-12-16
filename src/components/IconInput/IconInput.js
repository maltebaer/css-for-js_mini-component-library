import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        borderWidth: 1,
        size: 14,
        strokeWidth: 1,

    },
    large: {
        borderWidth: 2,
        size: 18,
        strokeWidth: 2,
    },
}

const IconInput = ({
    label,
    icon,
    width = 250,
    size,
    placeholder,
}) => {
    const styles = STYLES[size]

    return <Wrapper style={{ '--borderWidth': styles.borderWidth + 'px' }}>
        <NativeInput id='icon-input' placeholder={placeholder} width={width} style={{ '--fontSize': styles.size / 16 + 'rem' }} />

        <IconWrapper htmlFor='icon-input' style={{ '--iconSize': styles.size + 'px' }}>
            <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
            <VisuallyHidden>{label}</VisuallyHidden>
        </IconWrapper>
    </Wrapper>;
};

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    border-bottom: var(--borderWidth) solid ${COLORS.black};
`
const NativeInput = styled.input`
    appereance: none;
    border: none;
    padding-left: 24px;
    color:  ${COLORS.gray700};
    font-weight: 700;
    width: ${props => props.width}px;
    font-size: var(--fontSize);

    &::placeholder {
        font-size: var(--fontSize);
        font-weight: 400;
        color:  ${COLORS.gray500}

    }

    &:hover {
        color: ${COLORS.black};
    }
    &:focus {
        outline-offset: 4px;
    }
`
const IconWrapper = styled.label`
    position: absolute;
    height: var(--iconSize);
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: ${COLORS.gray700};

    ${NativeInput}:hover + & {
        color: ${COLORS.black};
    }
`

export default IconInput;
