import History from "./History";
import { items } from "./data";

const Histories = () => {
  return (
    <div className="h-full transition-all custom-scrollbar overflow-y-scroll">
      {items?.map((item, index) => (
        <History
          key={index}
          id={item.id}
          avatar={item.avatar}
          his_name={item.his_name}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Histories;
