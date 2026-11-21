"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBluesky, faFacebook, faGithub, faInstagram, faMastodon, faThreads} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {Content, Icon, PageSection} from "@patternfly/react-core";

export default function Home() {
  return (
    <>
      <PageSection>
        <Content>
          <h1>Welcome</h1>
          <p>TangledWires is a software company dedicated to making cool stuff.</p>
        </Content>
      </PageSection>
      <PageSection>
        <Content>
          <h1>What are we making at the moment?</h1>
          <p>Currently, we&apos;re working on <Link href="/projects/stationary">Stationary</Link>, a mobile app for tracking which GB train stations you&apos;ve been to.</p>
        </Content>
      </PageSection>
      <PageSection>
        <Content>
          <a href="https://www.facebook.com/tangledwiresofficial/" aria-label="Facebook"><Icon size="xl"><FontAwesomeIcon icon={faFacebook} /></Icon></a>
          <a href="https://www.instagram.com/tangledwiresofficial/" aria-label="Instagram"><Icon size="xl"><FontAwesomeIcon icon={faInstagram} /></Icon></a>
          <a href="https://www.threads.com/@tangledwiresofficial" aria-label="Threads"><Icon size="xl"><FontAwesomeIcon icon={faThreads} /></Icon></a>
          <a href="https://bsky.app/profile/tangledwires.co.uk" aria-label="Bluesky"><Icon size="xl"><FontAwesomeIcon icon={faBluesky} /></Icon></a>
          <a rel="me" href="https://fosstodon.org/@tangledwires" aria-label="Mastodon"><Icon size="xl"><FontAwesomeIcon icon={faMastodon} /></Icon></a>
          <a href="https://github.com/TangledWiresOfficial/" aria-label="GitHub"><Icon size="xl"><FontAwesomeIcon icon={faGithub} /></Icon></a>
        </Content>
      </PageSection>
    </>
  );
}
