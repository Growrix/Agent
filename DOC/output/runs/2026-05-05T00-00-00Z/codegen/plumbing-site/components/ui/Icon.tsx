import {
  Droplets,
  AlertTriangle,
  Flame,
  Wrench,
  Settings,
  ArrowDown,
  Phone,
  Star,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  FileText,
  Home,
  ArrowRight,
  Headphones,
  Award,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Droplets,
  AlertTriangle,
  Flame,
  Wrench,
  Settings,
  ArrowDown,
  Phone,
  Star,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  FileText,
  Home,
  ArrowRight,
  Headphones,
  Award,
} as const;

type IconName = keyof typeof ICON_MAP;

interface IconProps extends LucideProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className, ...props }: IconProps) {
  const LucideIcon = ICON_MAP[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={cn("shrink-0", className)} {...props} />;
}

export type { IconName };
