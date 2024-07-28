import { NextResponse } from "next/server";
import { connectToDB } from "../../../../utils/database";
import Testimonial from "../../../../models/testimonials";

import Service from "../../../../models/services";

export async function GET(request) {
    await connectToDB();
   //afficher la moyenne des ratings des temoiganes actifs
    const ratings = await Service.find().populate('testimonial');
    const activeRatings = ratings.filter(rating => rating.testimonial && rating.testimonial.active);
    let sum = 0;
    let count = 0;
    activeRatings.forEach(rating => {
        sum += rating.testimonial.rating;
        count++;
    });
    let rating = sum / count;
    //prendre deux chiffres après la virgule
    rating = rating.toFixed(2);

    return NextResponse.json({ message: "Hello World", rating });
   //recuperer tous les ratings pour en faire une moyenne et les afficher
   
}