type DropDownData = { label: string; value: string };

export interface DropDownProps {
  label: string;
  placeholder: string;
  data: DropDownData[];
  onChange: (...event: any[]) => void;
  value: string | string[];
}

export interface MultiSelectProps extends DropDownProps {
  value: string[];
  maxSelect?: number;
}