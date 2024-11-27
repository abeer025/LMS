import { BatchTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";


export default async function Batches() {
    const { batches } = await getBatch();
  console.log("batches=>", batches);

    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-center">Batches</h1>
          <BatchModal />
        </div>
        <BatchTable batches={batches} />
      </div>
    );
}