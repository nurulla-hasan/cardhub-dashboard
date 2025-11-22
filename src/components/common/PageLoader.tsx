import { Spinner } from "../ui/spinner";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center p-8 w-full h-screen">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Spinner className="size-6 text-purple-500" />
        <span className="text-sm font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoader;
