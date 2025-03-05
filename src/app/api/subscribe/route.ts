// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email é obrigatório." }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
    const DATACENTER = API_KEY.split("-")[1]; // O datacenter vem depois do hífen na API Key

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    await axios.post(
      url,
      { email_address: email, status: "subscribed" },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey ${API_KEY}`,
        },
      }
    );

    return NextResponse.json({ message: "Inscrição realizada com sucesso!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: `Erro: ${error.response?.data?.title || "Erro no servidor"}` },
      { status: error.response?.status || 500 }
    );
  }
}
