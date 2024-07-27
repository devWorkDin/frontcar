import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Testimonial from "@models/testimonials";

export async function GET(request) {
  await connectToDB();

  // return NextResponse.json({ message: "Hello World" });

  const testimonials = await Testimonial.find();
  if (testimonials.length == 0)
    return NextResponse.json({
      message: "Pas encore de témoignages",
      testimonials,
    });
  return NextResponse.json({ message: "Hello World", testimonials });
}

export async function PUT(request) {
  // return NextResponse.json({ message: "Hello World" });
  await connectToDB();
  //je veux activer ou désactiver un témoignage
  const idTestimonial = await request.json();
  const { id } = idTestimonial;

  const testimonial = await Testimonial.findById(id);
  if (!testimonial)
    return NextResponse.json({
      result: false,
      message: "Témoignage introuvable",
    });
  testimonial.active = !testimonial.active;
  await testimonial.save();
  return NextResponse.json({
    result: true,
    message: "Témoignage modifié",
    testimonial,
  });
}

export async function DELETE(request) {
  // return NextResponse.json({ message: "Hello World" });
  await connectToDB();
  //je veux supprimer un témoignage
  const idTestimonial = await request.json();
  const { id } = idTestimonial;

  const testimonial = await Testimonial.findById(id);
  if (!testimonial)
    return NextResponse.json({
      result: false,
      message: "Témoignage introuvable",
    });
  await Testimonial.findByIdAndDelete(id);
  return NextResponse.json({ result: true, message: "Témoignage supprimé" });
}
