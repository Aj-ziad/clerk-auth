import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading state while checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  // Redirect to landing page if not authenticated (user can sign in from there)
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  // Render protected content if authenticated
  return children;
}
