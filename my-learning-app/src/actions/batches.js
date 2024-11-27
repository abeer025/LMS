"use server";

import { revalidatePath } from "next/cache";

// export async function getBatch() {
//   let batches = await fetch(`${process.env.BASE_URL}api/batch`);
//   batches = await batches.json();
//   return batches;
// }

export async function addBatch(formData) {
  const obj = {
    title: formData.get("title"),
    description: formData.get("description"),
    batch: formData.get("course"),
  };

  const course = await fetch(`${process.env.BASE_URL}api/batch`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (course.ok) {
    revalidatePath("/admin/batches");
  }
}
