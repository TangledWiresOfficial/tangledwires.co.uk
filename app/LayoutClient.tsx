"use client";

import {useTheme} from "@/hooks/useTheme";
import {Brand, Masthead, MastheadBrand, MastheadContent, MastheadLogo, Page, PageFooter, PageSection, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem} from "@patternfly/react-core";
import Link from "next/link";

import "@patternfly/react-core/dist/styles/base.css";

export function LayoutClient({ children }: Readonly<{ children: React.ReactNode }>) {
  useTheme();

  const masthead = (
    <Masthead>
      <MastheadBrand>
        <MastheadLogo>
          <Link href="/">
            <Brand className="show-dark" src="/images/logo_dark2.png" alt="TangledWires" />
            <Brand className="show-light" src="/images/logo_light2.png" alt="TangledWires" />
          </Link>
        </MastheadLogo>
      </MastheadBrand>
      <MastheadContent>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup className="pf-m-align-end pf-m-spacer-none pf-m-spacer-md-on-md pf-m-action-group-plain">
              <ToolbarGroup className="pf-m-hidden pf-m-visible-on-lg pf-m-action-group-plain">
                <ToolbarItem>
                  <Link href="https://auth.tangledwires.co.uk/realms/master/account">Account</Link>
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  const footer = (
    <PageFooter>
      <PageSection>
        <Link href="/legal">Legal</Link>
        {" "}&middot;{" "}
        <Link href="https://status.tangledwires.co.uk/">Service Status</Link>
        <p>
          &copy; 2026 TangledWires Ltd
          <br />
          Registered in England and Wales &middot; Registered Number: 16997164
          <br />
          Registered Office: 20 Wenlock Road, London, England, N1 7GU
        </p>
      </PageSection>
    </PageFooter>
  );

  return (
    <html lang="en">
      <head>
        <script defer data-domain="tangledwires.co.uk" src="https://analytics.tangledwires.co.uk/js/script.js"></script>
      </head>
      <body>
        <Page masthead={masthead}>
          {children}
          <hr />
          {footer}
        </Page>
      </body>
    </html>
  );
}
