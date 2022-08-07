import Moment from "moment";
import { Avatar, Col, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Launch from "../store/types/launch";
import { RootState } from "../store";

const Detail = () => {
  const params = useParams();
  const type = params.type;
  const id = params.id;
  const [item, setItem] = useState<Launch>({} as Launch);
  const storeLaunch = useSelector((state: RootState) => state.launch);

  useEffect(() => {
    if ("past" === type) {
      setItem(storeLaunch.past.find((item) => item.id == id));
    } else if ("future" === type) {
      setItem(storeLaunch.future.find((item) => item.id == id));
    } else if ("booking" === type) {
      setItem(storeLaunch.booking.find((item) => item.id == id));
    }
  }, [type, id]);

  if (!item?.id) {
    return (
      <Row justify="center">
        <Col span={12}>
          <h1 style={{ marginBottom: 0 }}>Not found</h1>
          <Link style={{ marginBottom: "12px", display: "block" }} to="/">
            go home
          </Link>
        </Col>
      </Row>
    );
  }

  return (
    <Row justify="center">
      <Col span={12}>
        <h1 style={{ marginBottom: 0 }}>{item.name}</h1>
        <Link style={{ marginBottom: "12px", display: "block" }} to="/">
          go home
        </Link>
        <Avatar src={item.links.patch.small} />
        <b>{Moment(item.date_utc).format("D MMM YYYY")}</b>
        <br />
        <p>{item.details}</p>
      </Col>
    </Row>
  );
};

export default Detail;
