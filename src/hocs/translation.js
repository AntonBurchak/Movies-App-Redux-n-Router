import React from 'react';
import getLocale from '../utils/get-locale/get-locale';

const translation = (words) => (WrappedComponent) => {
    const languageCode = localStorage.getItem('lang');
    const locale = getLocale(languageCode);
    const matchedWords = {}; // words || matchedWords || targetWords 

    words.forEach(word => {
        if(locale.hasOwnProperty(word)) {
            Object.assign(matchedWords, { ...matchedWords, [word]: locale[word]})
        }
    })
    
    class NewComponent extends React.Component {
        render() {
            return (
                <WrappedComponent {...this.props} {...matchedWords}/>
            )
        }
    }
    return NewComponent;
}

export default translation;