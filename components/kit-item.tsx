

export default function KitItem({ image, text }: { image: string, text: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[200px] h-[300px] flex justify-center items-center">
        <img
          className="w-full "
          src={image}
          alt=""
        // width={500}
        // height={500}
        />
      </div>
      <p className="text-muted-foreground md:text-xl text-center">
        {text}
      </p>
    </div>
  )
}

