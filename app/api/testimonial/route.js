import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Testimonial from "@models/testimonials";
import Service from "@models/services";

export async function GET(request) {
  await connectToDB();

  // return NextResponse.json({ message: "Hello World" });

  const testimonials = await Testimonial.find({
    active: true,
  });
  if (testimonials.length == 0)
    return NextResponse.json({
      message: "Pas encore de témoignages",
      testimonials,
    });
  return NextResponse.json({ message: "Hello World", testimonials });
}

export async function POST(request) {
  // return NextResponse.json({ message: "Hello World" });

  const formData = await request.json();
  const {
    rating,
    content,
    username,
    ponctualite,
    confort,
    proprete,
    professionnalisme,
  } = formData;

  //check if all fields are present
  if (!rating || !content || !username)
    return NextResponse.json({ result: false, message: "Missing field" });

  await connectToDB();
  const newTestimonial = await Testimonial.create({
    rating,
    content,
    username,
  });
  const newService = await Service.create({
    ponctualite,
    professionnalisme,
    proprete,
    confort,
    testimonial: newTestimonial._id,
  });

  return NextResponse.json({
    result: true,
    message: "Testimonial created",
    newService,
    newTestimonial,
  });
}
