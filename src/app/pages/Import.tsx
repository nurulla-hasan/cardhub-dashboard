import ImportUploader from "@/components/pages/import/ImportUploader";

const ImportPage = () => {
  return (
    <div className="space-y-6">
      <div className="gradient-color rounded-lg p-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Import Cards</h1>
          <p className="text-muted-foreground">
            Import your card collection from files, APIs, or databases.
          </p>
        </div>
      </div>
      <ImportUploader />
    </div>
  );
};

export default ImportPage;
