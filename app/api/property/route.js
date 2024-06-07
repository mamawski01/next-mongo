import connectDB from "@/config/db";
import Property from "@/models/Property";

//GET /api/properties
export async function GET() {
  try {
    await connectDB();

    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }
}
