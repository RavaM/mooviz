import "./Hero.scss";

interface iProps {
  bgImage: string;
  title: string;
}

export const Hero = ({ bgImage, title }: iProps) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="hero__title">{title}</h1>
    </div>
  );
};
