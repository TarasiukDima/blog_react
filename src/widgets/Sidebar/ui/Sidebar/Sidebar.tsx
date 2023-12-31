import { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <aside
      className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleSidebar}>Component</button>
    </aside>
  );
};

export { Sidebar };
