import React from 'react';
import '../../App.css';

const deepLink = () => {

    var  sUsrAg = navigator.userAgent;


    if (sUsrAg.indexOf("Safari") > -1) {
       alert('sfari')


       setTimeout(function () { window.location = "https://itunes.apple.com/app/284882215"; }, 25);
        window.location = "myprotocol://";
       
      }
    else
    {
        setTimeout(function () { window.location = "https://itunes.apple.com/app/284882215"; }, 25);
        window.location = "fb://";
    }

   
    
    // setTimeout(function() {
       
    //     // window.location = "itms-apps://itunes.com/apps/id284882215";
    //   }, 25);
      
      // If "custom-uri://" is registered the app will launch immediately and your
      // timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
      // dialogue prior to the App Store application launching
    //   window.location = "https://apps.apple.com/app/twitter";
}


export default function Linking() {
    return(
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '90vh',
        }}
      >
        <button onClick={() => deepLink()}>Open Facebook</button>
      </div>
    );
}
