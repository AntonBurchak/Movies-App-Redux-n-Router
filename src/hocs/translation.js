import React from 'react';
import getLocale from '../utils/get-locale/get-locale';

const translation = (words) => (WrappedComponent) => {
    const languageCode = localStorage.getItem('lang');
    const locale = getLocale(languageCode);
    const matchedWords = {}; // words || matchedWords || targetWords - translations !!

    words.forEach(word => {
        if(locale.hasOwnProperty(word)) {
            Object.assign(matchedWords, { ...matchedWords, [word]: locale[word]})
        }
    })
    
//     const matchedWords = words.reduce((result, word) => ( // fixed
//         locale.hasOwnProperty(word) ? { ...result, [word]: locale[word] } : result
//     ), {})
    // newComponent should be func component !
    class NewComponent extends React.Component {
        render() { // завернуть в объект translations = translations
            return (
                <WrappedComponent {...this.props} {...matchedWords}/> 
            )
        }
    }
    return NewComponent;
}

export default translation;
