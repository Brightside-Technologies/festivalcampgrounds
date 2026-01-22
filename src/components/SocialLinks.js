import { Instagram, Facebook, Youtube } from "lucide-react";
import clsx from "clsx";

const TikTokIcon = ({ className }) => (
  <img src="/tiktok-icon.svg" alt="" className={className} />
);

const allSocialLinks = [
  {
    id: "instagram",
    label: "Instagram link",
    href: "https://www.instagram.com/festivalcampgrounds/",
    Icon: Instagram
  },
  {
    id: "facebook",
    label: "Facebook link",
    href: "https://www.facebook.com/festivalcampgrounds",
    Icon: Facebook
  },
  {
    id: "tiktok",
    label: "TikTok link",
    href: "https://www.tiktok.com/@festivalcampgrounds",
    Icon: TikTokIcon
  },
  {
    id: "youtube",
    label: "YouTube link",
    href: "https://www.youtube.com/@festivalcampgrounds",
    Icon: Youtube
  }
];

export default function SocialLinks({
  include = ["instagram", "facebook", "tiktok", "youtube"],
  className = "",
  linkClassName = "",
  iconClassName = "h-4 w-4"
}) {
  const links = allSocialLinks.filter((link) => include.includes(link.id));

  return (
    <div className={className}>
      {links.map(({ id, label, href, Icon }) => (
        <a
          key={id}
          aria-label={label}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
