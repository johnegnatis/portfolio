import { useEffect } from 'react';
import WebFont from 'webfontloader';

useEffect(() => {
    WebFont.load({
      google: {
        families: ['Heebo']
      }
    });
   }, []);
