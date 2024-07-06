import Carousel from "@/app/(models)/Carousel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const carousel = await Carousel.find();
    return NextResponse.json(carousel);
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: error.message,
    });
  }
}
