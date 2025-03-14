import { LoaderCircle } from "lucide-react";
import React, { lazy, Suspense } from "react";

/**
 * Creates a lazy-loaded component with a fallback UI.
 * @param {React.Component} WrappedComponent - The component to wrap with Suspense.
 * @param {React.ReactNode} FallbackComponent - The fallback UI to display while loading.
 */
const MakeLazy = (
  WrappedComponent,
  FallbackComponent = (
    <div className="flex items-center justify-center min-h-screen py-10 px-4 overflow-hidden no-scrollbar">
      <LoaderCircle className="h-8 w-8 animate-spin" />
    </div>
  )
) => {
  const LazyComponent = lazy(WrappedComponent);

  return (props) => (
    <Suspense fallback={FallbackComponent}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default MakeLazy;
