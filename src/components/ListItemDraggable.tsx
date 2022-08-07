import { useDrag } from "react-dnd";
import { ItemTypes, LaunchingType } from "../Constants";
import { Avatar, List as ListAntd } from "antd";
import Moment from "moment";
import Launch from "../store/types/launch";
import { bookingLaunch, unBookingLaunch } from "../store/slices/launch";
import { useDispatch } from "react-redux";

type ListItemProps = {
  item: Launch;
  type: LaunchingType;
};

type DropResult = {
  dropEffect: string;
  type: string;
};

const ListItemDraggable = ({ item, type }: ListItemProps) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARDS,
    item: { ...item, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(item, monitor) {
      const dropResult = monitor.getDropResult() as DropResult;
      if (!item || !dropResult?.type || dropResult.type === item.type) return;
      if (dropResult.type === "booking") {
        dispatch(bookingLaunch(item));
      } else {
        dispatch(unBookingLaunch(item));
      }
    },
  }));
  return (
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
      ref={drag}
    >
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
    </div>
  );
};

export default ListItemDraggable;
