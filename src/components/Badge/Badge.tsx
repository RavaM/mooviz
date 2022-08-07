import "./Badge.scss";

interface iProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Badge = ({ children, onClick }: iProps) => {
  return (
    <button className="badge" onClick={onClick}>
      {children}
    </button>
  );
};
