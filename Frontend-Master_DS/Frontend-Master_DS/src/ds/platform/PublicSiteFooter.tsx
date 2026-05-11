import * as React from "react";

import { Container } from "../primitives/Container";
import { Text } from "../primitives/Text";
import { SiteFooter } from "../components/PublicBlocks";

import type { SiteFooterAttribution, SiteFooterColumn } from "./siteConfig";

export type PublicSiteFooterProps = {
  columns: SiteFooterColumn[];
  attribution?: SiteFooterAttribution;
};

export function PublicSiteFooter({ columns, attribution }: PublicSiteFooterProps) {
  return (
    <Container>
      <SiteFooter columns={columns} />
      {attribution ? (
        <div className="ui-footer__attribution">
          <Text tone="muted" variant="body-small">
            {attribution.prefix ? `${attribution.prefix} ` : null}
            <a
              className="ui-navlink ui-focus-ring"
              href={attribution.url}
              aria-label={attribution.ariaLabel}
              target="_blank"
              rel="noreferrer"
            >
              {attribution.linkText}
            </a>
            {attribution.suffix ? ` ${attribution.suffix}` : null}
          </Text>
        </div>
      ) : null}
    </Container>
  );
}
