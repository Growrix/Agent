type EnvShape = {
  NEXT_PUBLIC_SITE_URL: string;
};

export function getEnv(): EnvShape {
  const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  if (!NEXT_PUBLIC_SITE_URL) {
    throw new Error("Missing env: NEXT_PUBLIC_SITE_URL");
  }

  return { NEXT_PUBLIC_SITE_URL };
}
