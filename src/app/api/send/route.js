import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const emailData = await request.json();
  const {
    rating,
    content,
    username,
    ponctualite,
    confort,
    proprete,
    professionnalisme,
  } = emailData;

  try {
    // Générer le HTML en utilisant la fonction EmailTemplate
    const emailHtml = EmailTemplate({ username: username , rating: rating, content: content, ponctualite: ponctualite, confort: confort, proprete: proprete, professionnalisme: professionnalisme });

    const { data, error } = await resend.emails.send({
      from: 'FASTCAR <onboarding@resend.dev>',
      to: ['agence_fastcar@yahoo.com'],
      subject: 'Nouveau témoignage',
      react: emailHtml, // Utiliser "html" au lieu de "react"
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
