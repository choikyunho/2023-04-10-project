function PortfolioCard({ title, desc, image, href }) {
  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl">
      <div className="w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={image}
          alt="project"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
    </li>
  );
}

export default PortfolioCard;
