import { Skeleton, List as ListAntd } from "antd";
import Launch from "../store/types/launch";
import ListItem from "./ListItem";

type ListProps = {
  listData: Launch[];
  loading: boolean;
};

const List = ({ listData, loading }: ListProps) => {
  return (
    <ListAntd
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <Skeleton key={item.name} loading={loading} active avatar>
          <ListItem item={item} />
        </Skeleton>
      )}
    />
  );
};

export default List;
