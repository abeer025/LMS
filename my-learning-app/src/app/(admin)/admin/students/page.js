import { StudentTable } from "@/components/DataTables/StudentTable";
import { StudentModal } from "@/components/Dialogs/StudentModal";

export default function Students() {
  return (
    <>
      <div className="min-h-screen p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-center">Students</h1>
          <StudentModal />
        </div>
        <StudentTable />
      </div>
    </>
  );
}
