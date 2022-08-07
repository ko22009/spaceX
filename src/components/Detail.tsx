import Launch from "../store/types/launch";
import Moment from "moment";
import { Avatar } from "antd";

type DetailProps = {
  item: Launch;
};

const Detail = ({ item }: DetailProps) => {
  return (
    <>
      <h1>{item.name}</h1>
      <Avatar src={item.links.patch.small} />
      <b>{Moment(item.date_utc).format("D MMM YYYY")}</b>
      <br />
      <p>{item.details}</p>
    </>
  );
};

export default Detail;
