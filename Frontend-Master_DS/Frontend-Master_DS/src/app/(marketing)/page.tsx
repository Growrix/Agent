import { PublicPresetPage } from "@/ds";
import { ACTIVE_SITE_PRESET } from "@/site";

export default function HomePage() {
  return <PublicPresetPage page={ACTIVE_SITE_PRESET.pages.home} />;
}

