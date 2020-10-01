import React from 'react';
import eng from '../intl/eng';
import ua from '../intl/ua';

const withTranslation = (words) => (WrappedComponent) => {
    const currentLang = localStorage.getItem('lang');
    let langObj, neededWords; 
    
    switch(currentLang) {
        case 'ua-UA':
            langObj = ua;
            break;
        case 'en-EN':
            langObj = eng;
            break;
        default:
            break;    
    }

    words.forEach(word => {
        if(langObj.hasOwnProperty(word)) {
            neededWords = { ...neededWords, [word]: langObj[word]}
        }
    })
    
    class NewComponent extends React.Component {
        render() {
            return (
                <WrappedComponent {...this.props} {...neededWords}/>
            )
        }
    }
    return NewComponent;
}

export default withTranslation;