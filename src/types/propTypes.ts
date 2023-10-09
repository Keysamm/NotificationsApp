export interface INotification {
  title: string;
  body: string;
}

export interface IButtonProps {
  title: string;
  onPress: () => void;
}
