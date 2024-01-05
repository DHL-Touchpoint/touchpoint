import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Insert key here 'dhl_xxxxxxxx.xxxxxxxxxxxxxxxxxx
  const demoApiKey = "";

  // https://api.production.dhltouchpoint.se
  const url = `https://api.sandbox.dhltouchpoint.se/v2/shipment?label=true`;

  try {
    const dhlResponse = await axios.post(url, body, {
      headers: {
        "DHL-API-KEY": demoApiKey,
      },
    });

    return NextResponse.json(dhlResponse.data, { status: dhlResponse.status });
  } catch (error: any) {
    if (error.response) {
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    } else {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
