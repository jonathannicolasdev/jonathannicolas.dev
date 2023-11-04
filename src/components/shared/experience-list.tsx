import { Icon } from "@iconify/react";

import { dataExperiences } from "../../data/experiences";

export function ExperienceList() {
  return (
    <div className="card">
      <ul className="space-y-8">
        {dataExperiences.map((experience) => {
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
                    <span className="icon-text">
                      <Icon icon="tabler:briefcase" /> {companyName}
                    </span>
                    <span className="icon-text">
                      <Icon icon="tabler:map-pin" /> {location}
                    </span>
                  </div>
                  <div className="icon-text">
                    <Icon icon="tabler:calendar" /> {dateStart} — {dateEnd}
                  </div>
                </div>
              </div>

              <ul className="list-inside list-disc space-y-2 text-sm">
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
