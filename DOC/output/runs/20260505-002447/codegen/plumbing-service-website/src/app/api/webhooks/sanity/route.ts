import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { CmsWebhookError, getAffectedRoutes } from "@/server/services/cms-webhook";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("x-sanity-signature");

  try {
    const affectedRoutes = getAffectedRoutes(body, signature);

    affectedRoutes.forEach((path) => {
      revalidatePath(path);
    });

    return NextResponse.json({ ok: true, data: { revalidated: affectedRoutes } });
  } catch (error) {
    if (error instanceof CmsWebhookError) {
      return NextResponse.json({ ok: false, error: error.code }, { status: 400 });
    }

    return NextResponse.json({ ok: false, error: "malformed_payload" }, { status: 400 });
  }
}