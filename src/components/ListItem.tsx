import { Avatar, List as ListAntd } from "antd";
import Moment from "moment";
import Launch from "../store/types/launch";
import { Link } from "react-router-dom";

type ListItemProps = {
  item: Launch;
};

const ListItem = ({ item }: ListItemProps) => {
  return (
    <div>
      <ListAntd.Item.Meta
        avatar={<Avatar src={item.links.patch.small} />}
        title={
          <Link style={{ color: "#1890ff" }} to={`/past/${item.id}`}>
            {item.name}
          </Link>
        }
        description={
          <>
            <b>{Moment(item.date_utc).format("D MMM YYYY")}</b>
            <br />
            {item.details}
          </>
        }
      />
    </div>
  );
};

export default ListItem;
