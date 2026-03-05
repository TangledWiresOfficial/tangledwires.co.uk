import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBluesky, faFacebook, faGithub, faInstagram, faThreads} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center p-10" style={{ paddingTop: "50px" }}>
        <picture className="flex justify-center items-center" style={{ paddingBottom: "35px" }}>
          <source srcSet="/images/logo_light2.png" media="(prefers-color-scheme: light)" />
          <source srcSet="/images/logo_dark2.png" media="(prefers-color-scheme: dark)" />

          <img src="/images/logo_light2.png" alt="The word 'TangledWires' next to a computer terminal" width="350" />
        </picture>
        <div className="flex flex-col justify-center items-center p-10">
          <p className="text-3xl font-medium">Welcome</p>
          <p>TangledWires is a software team creating... anything we find interesting really.</p>
        </div>
        <div className="flex flex-col justify-center items-center p-10">
          <p className="text-3xl font-medium">What are we making at the moment?</p>
          <p>Currently, we're working on Stationary, a mobile app for tracking which UK train stations you've been to.</p>
        </div>
        <div className="flex flex-row justify-center items-center text-3xl">
          <a href="https://www.facebook.com/tangledwiresofficial/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/tangledwiresofficial/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.threads.com/@tangledwiresofficial" aria-label="Threads"><FontAwesomeIcon icon={faThreads} /></a>
          <a href="https://bsky.app/profile/tangledwires.co.uk" aria-label="Bluesky"><FontAwesomeIcon icon={faBluesky} /></a>
          <a href="https://github.com/TangledWiresOfficial/" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="p-10">
          <p>&copy; 2026 TangledWires Ltd</p>
        </div>
      </div>
  );
}
