interface OwnProps {
  color: string;
  onClick: () => void;
}

export const Child: React.FC<OwnProps> = ({ color, onClick }) => {
  return (
    <div>
      Hi there {color}!<button onClick={onClick}>Click me!</button>
    </div>
  );
};
