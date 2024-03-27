type Props = {
  name: string;

  image: string;
};

const Service = ({ name, image }: Props) => {
  const overlayStyles = `absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-primary-500 text-center text-white opacity-0 transition-opacity duration-500`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[480px] hover:cursor-pointer">
      <img src={image} alt={`${name}`} className="h-full w-full object-cover" />
      <div className={`${overlayStyles} hover:opacity-90`}>
        <p className="text-2xl">{name}</p>
      </div>
    </li>
  );
};

export default Service;
