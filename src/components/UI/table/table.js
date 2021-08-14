import { DATA_DUMMY } from "../../constants";
import SearchBox from "../search/search";
import style from "./table.module.scss";

const TableOfContent = (props) => {
  const extractingData = () => {
    return DATA_DUMMY.map((item) => {
      return (
        <tr key={`${item.id}_table_item_${Math.trunc(Math.random() * 1000)}`}>
          <td>{item.id}</td>
          <td className={style.textToLeft}>{item.stor}</td>
          <td className={style.textToLeft}>{item.bType}</td>
          <td>{item.branchs}</td>
          <td>{item.sDate}</td>
          <td>{item.sStatus}</td>
        </tr>
      );
    });
  };

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Store Name</th>
          <th scope="col">Business Type</th>
          <th scope="col"># of Branches</th>
          <th scope="col">Start Data</th>
          <th scope="col">Subscription Status</th>
        </tr>
      </thead>
      <tbody>{extractingData()}</tbody>
    </table>
  );
};

export default TableOfContent;
