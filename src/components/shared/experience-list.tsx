export function ExperienceList() {
  const experiences = [
    {
      jobTitle: "Coding Instructor",
      companyName: "Under the GUI",
      dateStart: "2020",
      dateEnd: "2021",
      location: "Vancouver, Canada",
      jobItems: [
        "Programming and game development for kids and teens, fostering their creativity and passion for technology",
      ],
    },
  ];

  return (
    <div className="card space-y-4">
      <ul>
        {experiences.map((experience) => {
          const {
            jobTitle,
            companyName,
            dateStart,
            dateEnd,
            location,
            jobItems,
          } = experience;

          return (
            <li key={jobTitle + companyName} className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl">{jobTitle}</h3>
                <div className="flex justify-between gap-4 text-stone-400">
                  <div className="flex gap-4">
                    <span>{companyName}</span>
                    <span>{location}</span>
                  </div>
                  <div className="flex gap-4">
                    <span>{dateStart}</span>
                    <span>{dateEnd}</span>
                  </div>
                </div>
              </div>

              <ul className="list-item">
                {jobItems.map((jobItem) => {
                  return (
                    <li key={jobItem}>
                      <p>{jobItem}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
