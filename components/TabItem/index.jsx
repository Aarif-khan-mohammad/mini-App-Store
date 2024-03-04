import "./index.css";

const TabItem = (props) => {
  const { tabDetails , isActive, clickTabItem } = props;
  const { displayText, tabId } = tabDetails;

  const onTabClick = () => {
    clickTabItem(tabId);
  }

  const Active = isActive ? "active" : "";
  
  return (
    <li className="tab-card">
      <button className={`tab-name ${Active} `} onClick ={onTabClick} >{displayText}</button>
    </li>
  );
};
export default TabItem;
