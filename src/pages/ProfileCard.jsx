import React from "react";

/**
 * ProfileCard
 * A self-contained profile card — no external CSS, icon libraries, or
 * font imports required. Drop this file into your src folder and use:
 *
 *   <ProfileCard
 *     name="Ada Okafor"
 *     role="Product Engineer"
 *     bio="Builds tools for people who build tools."
 *     location="Lagos, NG"
 *     avatarUrl="/avatar.jpg"
 *     stats={[{ label: "Projects", value: 42 }, { label: "Followers", value: "1.2k" }]}
 *     links={[
 *       { label: "Site", href: "https://example.com" },
 *       { label: "GitHub", href: "https://github.com/example" },
 *     ]}
 *   />
 */

const DEFAULT_STATS = [
  { label: "Projects", value: 42 },
  { label: "Followers", value: "1.2k" },
  { label: "Since", value: "2019" },
];

const DEFAULT_LINKS = [
  { label: "Site", href: "#" },
  { label: "GitHub", href: "#" },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function ProfileCard({
  name = "Ada Okafor",
  role = "Product Engineer",
  bio = "Builds tools for people who build tools.",
  location = "Lagos, NG",
  avatarUrl,
  stats = DEFAULT_STATS,
  links = DEFAULT_LINKS,
}) {
  return (
    <div className="pc-root">
      <style>{`
        .pc-root {
          --ink: #14181c;
          --paper: #f6f4ef;
          --paper-dim: #b9c0c6;
          --accent: #c98a3a;
          --line: rgba(246, 244, 239, 0.12);
          --line-strong: rgba(246, 244, 239, 0.22);
          display: inline-flex;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .pc-card {
          position: relative;
          width: 320px;
          background: var(--ink);
          color: var(--paper);
          border-radius: 4px;
          padding: 28px 26px 22px;
          border-left: 3px solid var(--accent);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
        }

        .pc-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .pc-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          flex-shrink: 0;
          object-fit: cover;
          background: var(--accent);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .pc-heading {
          min-width: 0;
        }

        .pc-name {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.25;
          font-weight: 400;
          color: var(--paper);
        }

        .pc-role {
          margin: 3px 0 0;
          font-size: 13px;
          color: var(--accent);
        }

        .pc-location {
          margin: 2px 0 0;
          font-size: 12px;
          color: var(--paper-dim);
        }

        .pc-bio {
          margin: 18px 0 0;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--paper-dim);
          max-width: 46ch;
        }

        .pc-stats {
          display: flex;
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }

        .pc-stat {
          flex: 1;
          padding-right: 12px;
        }

        .pc-stat + .pc-stat {
          padding-left: 12px;
          border-left: 1px solid var(--line);
        }

        .pc-stat-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--paper);
        }

        .pc-stat-label {
          margin-top: 2px;
          font-size: 11px;
          color: var(--paper-dim);
        }

        .pc-links {
          display: flex;
          gap: 18px;
          margin-top: 16px;
        }

        .pc-link {
          font-size: 12.5px;
          color: var(--paper-dim);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .pc-link:hover,
        .pc-link:focus-visible {
          color: var(--accent);
          border-color: var(--accent);
        }

        .pc-link:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
          border-radius: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .pc-link {
            transition: none;
          }
        }
      `}</style>

      <div className="pc-card">
        <div className="pc-top">
          {avatarUrl ? (
            <img className="pc-avatar" src={avatarUrl} alt={name} />
          ) : (
            <div className="pc-avatar" aria-hidden="true">
              {initials(name)}
            </div>
          )}
          <div className="pc-heading">
            <p className="pc-name">{name}</p>
            <p className="pc-role">{role}</p>
            {location && <p className="pc-location">{location}</p>}
          </div>
        </div>

        {bio && <p className="pc-bio">{bio}</p>}

        {stats?.length > 0 && (
          <div className="pc-stats">
            {stats.map((s) => (
              <div className="pc-stat" key={s.label}>
                <div className="pc-stat-value">{s.value}</div>
                <div className="pc-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {links?.length > 0 && (
          <div className="pc-links">
            {links.map((l) => (
              <a
                className="pc-link"
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
