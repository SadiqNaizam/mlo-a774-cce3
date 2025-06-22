import React from 'react';
import { Button } from '@/components/ui/button';

const SignupLink = () => {
  const handleSignUpClick = () => {
    // In a real application, this would navigate to the sign-up page.
    // For example, using react-router-dom: navigate('/signup');
    console.log('Navigate to SignUp page');
  };

  return (
    <p className="text-center text-sm text-muted-foreground">
      Don&apos;t have an account?{' '}
      <Button
        variant="link"
        className="p-0 h-auto font-semibold text-primary"
        onClick={handleSignUpClick}
      >
        SignUp
      </Button>
    </p>
  );
};

export default SignupLink;
