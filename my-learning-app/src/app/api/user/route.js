import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/Modals/UserModal";
import bcrypt from "bcrypt";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  console.log("obj=>", obj);

  //check this user exist
  const user = await UserModal.findOne({ email: obj.email });
  if (user)
    return Response.json(
      { error: true, msg: "User Already Exist" },
      { status: 403 }
    );

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword;

  console.log(obj.password)
  console.log(hashedPassword)
  
  return Response.json("User Post Request");
}


export async function GET(request) {
return Response.json("User GET Request");
}