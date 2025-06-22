import React from 'react';

import AuthLayout from '@/components/layout/AuthLayout';
import LoginForm from '@/components/Login/LoginForm';
import SignupLink from '@/components/Login/SignupLink';

/**
 * The main login page for the application.
 * It utilizes the AuthLayout to center a card on the screen, which contains the login form
 * and a link to the sign-up page, providing a clean and focused user experience.
 */
const IndexPage: React.FC = () => {
  return (
    <AuthLayout title="Welcome">
      <div className="flex flex-col gap-8 pt-2">
        <LoginForm />
        <SignupLink />
      </div>
    </AuthLayout>
  );
};

export default IndexPage;
