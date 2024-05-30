import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";
function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-600 py-10 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* cols1 */}
        <div>
          <h3 className="text-md font-semibold mb-4 ">ResourcesLinks</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resourcesLink, index) => (
              <li
                className="text-neutral-400 hover:text-white font-light"
                key={index}
              >
                <a href={resourcesLink.href}>{resourcesLink.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* cols2 */}
        <div>
          <h3 className="text-md font-semibold mb-4 ">PlatformLinks</h3>
          <ul className="space-y-2">
            {platformLinks.map((platformLink, index) => (
              <li
                className="text-neutral-400 hover:text-white font-light"
                key={index}
              >
                <a href={platformLink.href}>{platformLink.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* cols3 */}
        <div>
          <h3 className="text-md font-semibold mb-4 ">CommunityLinks</h3>
          <ul className="space-y-2">
            {communityLinks.map((communityLink, index) => (
              <li
                className="text-neutral-400 hover:text-white font-light"
                key={index}
              >
                <a href={communityLink.href}>{communityLink.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
