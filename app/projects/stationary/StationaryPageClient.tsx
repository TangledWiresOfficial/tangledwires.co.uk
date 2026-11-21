"use client";

import {ProjectHeader} from "@/components/ProjectHeader";
import Link from "next/link";
import mobileScreenshot from "./mobile_screenshot.png";
import {useEffect, useState} from "react";
import axios from "axios";
import { Content, PageSection, Skeleton, Title } from "@patternfly/react-core";

export function StationaryPageClient() {
  const [stats, setStats] = useState<{ users: number, journeys: number, station_visits: number, stations_visited: number }>();

  useEffect(() => {
    axios.get("https://stationary-sync.tangledwires.co.uk/api/v1/stats").then((r) => setStats(r.data));
  }, []);

  return (
    <PageSection>
      <ProjectHeader
        title="Stationary"
        description="Data is fun, so are trains."
        image={mobileScreenshot}
        imageAlt="A phone displaying statistics on train station visits"
      />
      <Content>
        <p>Stationary is an app for tracking which train and metro stations you&apos;ve visited in Great Britain. </p>
        <Title headingLevel="h2">Get Stationary</Title>
        <Title headingLevel="h3">iOS</Title>
        <p>App Store: TBD</p>
        <Title headingLevel="h3">Android</Title>
        <p>Play Store: TBD</p>
        <p>APK Download (Unstable): <Link href="https://github.com/TangledWiresOfficial/Stationary/releases/latest">https://github.com/TangledWiresOfficial/Stationary/releases/latest</Link></p>
        <Title headingLevel="h3">Online</Title>
        <p>You can also use Stationary online at <Link href="https://stationary.tangledwires.co.uk/">https://stationary.tangledwires.co.uk/</Link></p>
        <Title headingLevel="h2">Stationary Sync</Title>
        <p>Optionally, you can backup and sync your journeys across devices using a TangledWires account with Stationary Sync. (Currently only available to beta testers.)</p>
        {stats ? (
          <p>There are currently <strong>{stats.users}</strong> users storing <strong>{stats.journeys}</strong> journeys totalling <strong>{stats.station_visits}</strong> station visits across <strong>{stats.stations_visited}</strong> stations on Stationary Sync!</p>
        ) : (
          <Skeleton screenreaderText="Loading statistics" width="50%" />
        )}
        <Title headingLevel="h2">Open Source</Title>
        <p>Stationary and Stationary Sync are open source. You can find the code at <Link href="https://github.com/TangledWiresOfficial/Stationary">https://github.com/TangledWiresOfficial/Stationary</Link> and <Link href="https://github.com/TangledWiresOfficial/stationary-sync">https://github.com/TangledWiresOfficial/stationary-sync</Link></p>
      </Content>
    </PageSection>
  );
}
