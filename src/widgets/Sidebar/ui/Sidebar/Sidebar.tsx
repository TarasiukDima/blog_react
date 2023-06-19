import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
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
    <div
      className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleSidebar}></button>
      Component
    </div>
  );
};

export default Sidebar;
