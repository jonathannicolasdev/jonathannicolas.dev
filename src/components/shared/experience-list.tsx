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
                <div className="text-sm lg:text-base flex flex-wrap justify-between gap-2 lg:gap-4 text-stone-400">
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
              <div className="prose prose-stone prose-ul:text-sm">
                <ul>
                  {jobItems.map((jobItem) => {
                    return (
                      <li key={jobItem}>
                        <p>{jobItem}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
