import connectDB from "@/lib/dbConnect";
import { UserModal } from "@/lib/Modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    // Establish a database connection
    await connectDB();

    // Parse request data
    const obj = await request.json();
    console.log("Received data:", obj);

    // Check if the user already exists
    const existingUser = await UserModal.findOne({ email: obj.email });
    if (existingUser) {
      return Response.json(
        { error: true, msg: "User Already Exists" },
        { status: 403 }
      );
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
    obj.password = hashedPassword;

    // Create and save new user
    let newUser = new UserModal({ ...obj });
    newUser = await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_KEY
    );

    // Send response
    return Response.json(
      {
        error: false,
        msg: "User Added Successfully",
        user: newUser,
        token
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST:", error);
    return Response.json(
      {
        error: true,
        msg: "Internal Server Error"
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return Response.json({ msg: "User GET Request" },
    { status: 200 });
}
