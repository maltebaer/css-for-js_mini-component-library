import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            {displayedValue}
            <IconWrapper>
                <Icon id="chevron-down" size="24" />
            </IconWrapper>
            <StyledSelect value={value} onChange={onChange}>
                {children}
            </StyledSelect>
        </Wrapper>
    );
};

const StyledSelect = styled.select`
    appereance: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`
const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    padding: 12px 16px;
    padding-right: 54px;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    border-radius: 8px;

    &:hover {
        color: ${COLORS.black};
    }

    /* focus styles missing, dom order must change for it to work */
`
const IconWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 24px;
`

export default Select;
