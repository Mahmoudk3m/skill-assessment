import CardItem from "./CardItem";

export default function Card({ selectedOption }: { selectedOption: number }) {
  return (
    <div className="card w-full flex flex-col p-4 sm:ml-2 sm:mt-10 md:mt-20 md:ml-4">
      <p className="text-steel-blue font-bold text-xl md:text-4xl uppercase oswald">Schedule</p>
      {selectedOption === 0 ? (
        <>
          <CardItem date="28Nov2016" location="Vestibulum viverra" />
          <CardItem date="17Dec2016" location="Vestibulum viverra" />
          <CardItem date="2Nov2016" location="Vestibulum viverra" />
          <CardItem date="18Nov2016" location="Vestibulum viverra" />
        </>
      ) : (
        <>
          <CardItem date="11Nov2016" location="Vestibulum viverra" />
          <CardItem date="18Dec2016" location="Vestibulum viverra" />
          <CardItem date="8Jan2016" location="Vestibulum viverra" />
          <CardItem date="18Nov2016" location="Vestibulum viverra" />
        </>
      )}
    </div>
  );
}
