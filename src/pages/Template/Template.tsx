import React from 'react'
import PropTypes from 'prop-types'
import { TemplateStyled } from './Template.styles'

const Template = ({ children }) => {
    return <TemplateStyled>{children}</TemplateStyled>
}

Dddd.defaultProps = {
    children: 'Template',
}

Dddd.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default Dddd
