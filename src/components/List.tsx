import { Skeleton, List as ListAntd, Avatar } from "antd";
import Launch from "../store/types/launch";
import Moment from "moment";

type ListProps = {
  listData: Launch[];
  loading: boolean;
};

const List = ({ listData, loading }: ListProps) => (
  <ListAntd
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    renderItem={(item) => (
      <ListAntd.Item key={item.name}>
        <Skeleton loading={loading} active avatar>
          <ListAntd.Item.Meta
            avatar={<Avatar src={item.links.patch.small} />}
            title={item.name}
            description={
              <>
                <b>{Moment(item.date_utc).format("D MMM YYYY")}</b>
                <br />
                {item.details}
              </>
            }
          />
        </Skeleton>
      </ListAntd.Item>
    )}
  />
);

export default List;
