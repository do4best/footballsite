import { useEffect } from "react";

function FootballTranslation() {
    useEffect(()=>{
         // code for google translate
const script = document.createElement("script")
script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(script)
window.googleTranslateElementInit = () =>{
  new google.translate.TranslateElement({pageLanguage: 'en',
    includedLanguages: "en,es,fr,zh,fi,ur",
    layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
};
return ()=>{
  document.body.removeChild(script)
}
    },[])
    return ( <>

     <div id="google_translate_element"></div>
    </> );
}

export default FootballTranslation;