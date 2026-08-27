import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside className="announcement-banner" aria-label="Announcement">
      <p>
        <span>DSA prep</span>
        Looking for the complete roadmap?
        <a
          href="https://github.com/ravindrasinghshah/technical-interview-preparation-kit"
          target="_blank"
          rel="noreferrer"
        >
          Explore the Technical Interview Preparation Kit
        </a>
      </p>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </aside>
  );
}
