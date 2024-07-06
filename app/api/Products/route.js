import Product from "@/app/(models)/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const product = await Product.find();
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: error.message,
    });
  }
}
