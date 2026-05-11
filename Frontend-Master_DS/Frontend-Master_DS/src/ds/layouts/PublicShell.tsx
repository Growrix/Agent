import * as React from "react";

import { Container } from "../primitives/Container";

export type PublicShellProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bottomNav?: React.ReactNode;
  floating?: React.ReactNode;
  children: React.ReactNode;
};

export function PublicShell({ header, footer, bottomNav, floating, children }: PublicShellProps) {
  return (
    <div className="ui-page">
      {header ? <div className="ui-band ui-band--surface ui-sticky-top">{header}</div> : null}
      <main
        className={bottomNav ? "ui-page-main ui-shell-content--pad-bottom-nav" : "ui-page-main"}
        id="main"
      >
        {children}
      </main>
      {footer ? <div className="ui-band">{footer}</div> : null}

      {bottomNav ? <div className="ui-only-mobile">{bottomNav}</div> : null}
      {floating ? floating : null}
    </div>
  );
}

export function PublicHeaderBar({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="ui-header-pad">{children}</div>
    </Container>
  );
}
