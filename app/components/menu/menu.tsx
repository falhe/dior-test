import styles from "./menu.module.scss";
import { Filters } from "@/app/components/filters/filters";
import { Sort } from "@/app/components/sort/sort";

type ItemProps = {
  text: string;
  icon: React.ReactNode;
};

export const Menu = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <Sort />
    </div>
  );
};
