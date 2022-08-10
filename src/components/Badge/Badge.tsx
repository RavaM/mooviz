import "./Badge.scss";

interface iProps {
  children: React.ReactNode;
  tooltip: string;
  onClick: () => void;
}

export const Badge = ({ children, tooltip, onClick }: iProps) => {
  return (
    <div title={tooltip}>
      <button className="badge" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
