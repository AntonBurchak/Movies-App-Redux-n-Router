import React from 'react';
import translation from '../../hocs/translation';
import { compose } from 'redux';

const Header = (props) => (
    <h2>{props['app-homepage-title']}</h2>
)

const withTranslation = translation([
    'app-homepage-title'
]);

export default compose(
    withTranslation
)(Header)
