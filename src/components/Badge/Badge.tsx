import "./Badge.scss";

interface iProps {
  children: React.ReactNode;
  tooltip: string;
  iconAlt: string;
  iconSrc: string;
  onClick: () => void;
}

export const Badge = ({
  children,
  tooltip,
  iconAlt,
  iconSrc,
  onClick,
}: iProps) => {
  return (
    <div title={tooltip}>
      <button className="badge" onClick={onClick}>
        <img
          src={iconSrc}
          alt={iconAlt}
          width={10}
          height={10}
          className="badge__icon"
        />
        {children}
      </button>
    </div>
  );
};
