import { TrainerTable } from "@/components/DataTables/TrainerTable";
import { TrainerDialog } from "@/components/Dialogs/TrainerModal";

export default function Trainers() {
  return (
    <>
      <div className="min-h-screen p-10">
        <div className="flex justify-between">
                  <h1 className="text-4xl font-bold text-center">Trainers</h1>
                  <TrainerDialog/>
        </div>
        <TrainerTable />
      </div>
    </>
  );
}
