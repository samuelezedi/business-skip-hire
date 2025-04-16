import {
  ArrowRight,
  Calendar,
  CreditCard,
  Home,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";

interface IconPickerProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const IconPicker: React.FC<IconPickerProps> = (props: IconPickerProps) => {
  if (props.name === "Truck") {
    return <Truck strokeWidth={props.strokeWidth} size={props.size}  color={props.color} />;
  }

  if (props.name === "MapPin") {
    return <MapPin strokeWidth={props.strokeWidth} color={props.color} />;
  }

  if (props.name === "Trash2") {
    return <Trash2 strokeWidth={props.strokeWidth} size={props.size}  color={props.color} />;
  }

  if (props.name === "Shield") {
    return <Shield strokeWidth={props.strokeWidth}  size={props.size}  color={props.color} />;
  }

  if (props.name === "Calendar") {
    return <Calendar strokeWidth={props.strokeWidth} size={props.size}  color={props.color} />;
  }

  if (props.name === "CreditCard") {
    return <CreditCard strokeWidth={props.strokeWidth} size={props.size}  color={props.color} />;
  }

  if (props.name === "ArrowRight") {
    return <ArrowRight strokeWidth={props.strokeWidth} size={props.size} color={props.color} />;
  }

  return <Home strokeWidth={props.strokeWidth} size={props.size}  color={props.color} />;
};

export default IconPicker;
