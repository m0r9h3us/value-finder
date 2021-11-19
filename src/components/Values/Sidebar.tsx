import List from "./List";
import useValueContext from "../../hooks/useValueContext";

interface SidebarProps {
  sidebarIsVisible: boolean;
}

const Sidebar = ({ sidebarIsVisible }: SidebarProps) => {
  const valCTX = useValueContext();
  return (
    <div className="flex flex-col flex-grow pl-1 flex-none max-w-32">
      <List
        title="My Values"
        content={valCTX.selected}
        multiCol={false}
        onItemClick={valCTX.removeItem}
        navigation={false}
        background="bg-primary-500"
      ></List>
    </div>
  );
};

export default Sidebar;
