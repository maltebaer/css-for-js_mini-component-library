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
                <Icon id="chevron-down" size="16" strokeWidth={2} />
            </IconWrapper>
            <StyledSelect value={value} onChange={onChange}>
                {children}
            </StyledSelect>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    padding: 12px 16px;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    border-radius: 8px;

    &:hover {
        color: ${COLORS.black};
    }
`
const IconWrapper = styled.div`
    margin-left: 24px;
`
const StyledSelect = styled.select`
    opacity: 0;
    position: absolute;
`

export default Select;
