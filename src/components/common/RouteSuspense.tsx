import { Suspense, type PropsWithChildren } from "react";
import PageLoader from "./PageLoader";

const RouteSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default RouteSuspense;
