export default function CardItem({ date, location }: { date: string; location: string }) {
  return (
    <div className="flex flex-row justify-between gap-8 ">
      <p className="text-dark-gray text-sm md:text-base">{date}</p>
      <p className="text-dark-gray text-sm md:text-base">{location}</p>
    </div>
  );
}
