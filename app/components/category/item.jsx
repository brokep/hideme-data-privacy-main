import Image from "next/image";

export default function CategoryItem(props) {
  const { title, desc, img, color } = props;

  return (
    <div
      id="w-node-b62250ab-8c66-204e-a50e-8b8da5868622-9e8dc324"
      className="category-card"
    >
      <div className={`category-icon-wrapper ${color}`}>
        <Image src={img} alt="" className="icon-extra-large" />
      </div>
      <div className="margin-bottom-08">
        <h5>{title}</h5>
      </div>
      <p>{desc}</p>
    </div>
  );
}
