import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  suburb?: string;
  postcode?: string;
  serviceType?: string;
  urgency?: string;
  message?: string;
};

function isValidLead(payload: LeadPayload) {
  return Boolean(
    payload.name &&
      payload.phone &&
      payload.suburb &&
      payload.postcode &&
      payload.serviceType &&
      payload.urgency,
  );
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!isValidLead(payload)) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "Missing required fields" } },
      { status: 400 },
    );
  }

  return NextResponse.json({ data: { id: randomUUID(), received: true } }, { status: 201 });
}
