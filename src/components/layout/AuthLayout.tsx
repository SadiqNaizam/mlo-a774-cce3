import React from 'react';

import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthLayoutProps {
  /**
   * The content to be rendered inside the layout's card.
   */
  children: React.ReactNode;
  /**
   * The title to be displayed in the card header.
   */
  title: string;
  /**
   * Optional additional class names for the card container.
   */
  className?: string;
}

/**
 * AuthLayout provides a consistent wrapper for authentication pages like Login or Sign Up.
 * It centers a card element on the screen, which contains a title and the child components,
 * adhering to the project's minimalist design.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, className }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 font-sans">
      <Card className={cn('w-[350px]', className)}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
