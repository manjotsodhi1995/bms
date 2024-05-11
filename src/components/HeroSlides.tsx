interface HeroSlidesProps{
    title: String,
    description: string,
    imageUrl:string,
}
function HeroSlides({ title, description, imageUrl }: HeroSlidesProps) {
  return (
    <div className="md:rounded-3xl">
      <div className="w-full md:rounded-3xl relative">
        <img src={imageUrl} alt="" className="w-full md:rounded-t-3xl" />
        <div className="bg-white p-4 rounded-3xl absolute bottom-[-2rem] z-20 w-full flex flex-col gap-1">
          <div className="flex justify-center font-medium text-[0.7rem] md:text-[1.1rem] xl:text-[1.9rem]">{title}</div>
          <div className="flex justify-center text-center text-[0.4rem] md:text-[0.7rem] xl:text-[1.7rem]">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides