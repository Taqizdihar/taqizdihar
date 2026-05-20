import React from "react";
import { 
  SiShopee,
  SiTiktok
} from "react-icons/si";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaSteam
} from "react-icons/fa6";
import { Link } from "lucide-react";

interface IconResolverProps {
  name: string;
  className?: string;
}

export default function IconResolver({ name, className = "" }: IconResolverProps) {
  const iconMap: Record<string, React.ReactNode> = {
    LinkedIn: <FaLinkedin className={className} />,
    GitHub: <FaGithub className={className} />,
    Instagram: <FaInstagram className={className} />,
    Twitter: <FaXTwitter className={className} />,
    Facebook: <FaFacebook className={className} />,
    YouTube: <FaYoutube className={className} />,
    Shopee: <SiShopee className={className} />,
    Steam: <FaSteam className={className} />,
    TikTok: <SiTiktok className={className} />
  };

  return iconMap[name] || <Link className={className} />;
}
