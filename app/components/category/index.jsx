import {
  categoryIcon01,
  categoryIcon02,
  categoryIcon03,
  categoryIcon04,
  categoryIcon05,
  categoryIcon06,
} from "@/utils/images";
import CategoryItem from "./item";

export default function Category() {
  return (
    <>
      <div
        data-w-id="ad0f3a4f-87ce-51d5-a1a9-dd78da59a6f6"
        className="w-layout-grid category-grid"
      >
        <CategoryItem
          title="Peace of Mind"
          desc="Removes your data from databases that collect, trade, sell, or
            publish it"
          img={categoryIcon03}
          color=""
        />
        <CategoryItem
          title="Privacy"
          desc="Keeps strangers from buying your personal information on people
          search sites."
          img={categoryIcon02}
          color="pink"
        />
        <CategoryItem
          title="Scans and Deletions"
          desc="Keeps your data off the market by regularly resending opt-out
          requests to a growing list of data brokers"
          img={categoryIcon05}
          color="yellow"
        />
        <CategoryItem
          title="People, Process, Technology"
          desc="HideMe experts find and remove your personal information."
          img={categoryIcon01}
          color="green"
        />
        <CategoryItem
          title="Reporting"
          desc="Receive a detailed HideMe report in 7 days."
          img={categoryIcon04}
          color="blue"
        />
        <CategoryItem
          title="Dedicated Support"
          desc="We&#x27;ve got your back on questions about data removals, security,
          and privacy settings."
          img={categoryIcon06}
          color="red"
        />
      </div>
    </>
  );
}
