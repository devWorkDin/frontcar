import { NextResponse } from "next/server";
import { connectToDB } from "../../../utils/database";
import Service from "../../../models/services";

export async function GET(request) {
  await connectToDB();
  
  // Récupérer les services avec les témoignages inclus
  const services = await Service.find().populate('testimonial');

  // Filtrer les services pour ne garder que ceux dont les témoignages sont actifs
  const activeServices = services.filter(service => service.testimonial && service.testimonial.active);

  return NextResponse.json({ message: "Hello World", services: activeServices });
}
