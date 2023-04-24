import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSingInButtons = () => {
  const onFacebookPress = () => {
    console.warn('facebook');
  };
  const onGooglePress = () => {
    console.warn('google');
  };
  const onApplePress = () => {
    console.warn('apple');
  };

  return (
    <>
      <CustomButton
        onPress={onFacebookPress}
        text="Sign in with Facebook"
        bgColor={'#E7EAF4'}
        fgColor={'#4765A9'}
      />
      <CustomButton
        onPress={onGooglePress}
        text="Sign in with Google"
        bgColor={'#FAE9EA'}
        fgColor={'#dd4d44'}
      />
      <CustomButton
        onPress={onApplePress}
        text="Sign in with Apple"
        bgColor={'#E3E3E3'}
        fgColor={'#363636'}
      />
    </>
  );
};

export default SocialSingInButtons;
