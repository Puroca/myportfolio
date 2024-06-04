const PortraitImage = ({image}:{image: string}) => {
  return (
      <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-[25rem] w-[16rem] bg-cover rounded-lg mx-auto"
      ></div>
  );
}

export default PortraitImage