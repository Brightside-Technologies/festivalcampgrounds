import {
  Smile,
  Eye,
  BatteryCharging,
  ShowerHead,
  Utensils,
  Music,
  Waves,
  Heart,
  Bath,
  Bus,
  MapPin,
  Star
} from "lucide-react";

// Map icon names from JSON to Lucide components
const iconMap = {
  smile: Smile,
  eye: Eye,
  "battery-charging": BatteryCharging,
  shower: ShowerHead,
  utensils: Utensils,
  music: Music,
  waves: Waves,
  heart: Heart,
  bath: Bath,
  bus: Bus,
  "map-pin": MapPin,
  star: Star
};

export default function IconRenderer({ name, className = "", size = 24 }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
