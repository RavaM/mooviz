import "./Banner.scss";

interface iProps {
  bannerText: string;
}

export const Banner = ({ bannerText }: iProps) => {
  return (
    <div className="banner">
      <h2 className="banner__title">{bannerText}</h2>
    </div>
  );
};
