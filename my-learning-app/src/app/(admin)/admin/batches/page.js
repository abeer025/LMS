import { BatchTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";


export default function Batches() {
    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between">
                <h1 className="text-4xl font-bold text-center">Batches</h1>
                <BatchModal/>
            </div>
          <BatchTable />      
      </div>
    );
}