import { fetchFutureLaunches, fetchPastLaunches } from "./store/actions/launch";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { useEffect } from "react";
import {
  getBookingLaunch,
  getFutureLaunches,
  getLoading,
  getPastLaunches,
} from "./store/slices/launch";
import List from "./components/List";
import Card from "./components/Card";
import { Col, Row } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import ListDroppable from "./components/ListDroppable";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPastLaunches());
    dispatch(fetchFutureLaunches());
  }, []);
  const loading = useSelector(getLoading);
  const pastLaunches = useSelector(getPastLaunches);
  const futureLaunches = useSelector(getFutureLaunches);
  const bookingLaunches = useSelector(getBookingLaunch);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Explore the space <RocketOutlined />
      </h1>
      <Row justify="center">
        <Col span={5}>
          <Card title="PAST LAUNCHES">
            <List listData={pastLaunches} loading={loading} />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="LAUNCHES">
            <ListDroppable
              listData={futureLaunches}
              type={"future"}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="MY LAUNCHES">
            <ListDroppable
              listData={bookingLaunches}
              type={"booking"}
              loading={loading}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
