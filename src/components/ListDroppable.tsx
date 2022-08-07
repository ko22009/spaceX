import { useDrop } from "react-dnd";
import { ItemTypes, LaunchingType } from "../Constants";
import Launch from "../store/types/launch";
import { List as ListAntd, Skeleton } from "antd";
import ListItemDraggable from "./ListItemDraggable";

type ListProps = {
  listData: Launch[];
  type: LaunchingType;
  loading: boolean;
};

const ListDroppable = ({ listData, loading, type }: ListProps) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARDS,
      drop: () => ({
        type,
      }),
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );
  return (
    <div ref={drop} style={{ background: isOver ? "#e0e0e0" : "transparent" }}>
      <ListAntd
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <Skeleton key={item.name} loading={loading} active avatar>
            <ListItemDraggable type={type} item={item} />
          </Skeleton>
        )}
      />
    </div>
  );
};

export default ListDroppable;
