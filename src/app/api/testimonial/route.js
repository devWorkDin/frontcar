import { NextResponse } from "next/server";
import { connectToDB } from "../../../../utils/database";
import Testimonial from "../../../../models/testimonials";
import Service from "../../../../models/services";

export async function GET(request) {
  // Connexion à la base de données
  await connectToDB();

  // Récupérer les témoignages actifs depuis la base de données
  const testimonials = await Testimonial.find({ active: true });

  // Préparer la réponse avec les en-têtes CORS
  const response = NextResponse.json({
    message: testimonials.length === 0 ? "Pas encore de témoignages" : "Témoignages trouvés",
    testimonials,
  });

  // Ajouter l'en-tête CORS à la réponse
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
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
