import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-blue font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="12" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Websites" />
      </div>
      <p className="text-center">
        With 12 months of experience building dynamic and user-friendly web
        applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
