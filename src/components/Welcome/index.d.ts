export interface IInputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
}