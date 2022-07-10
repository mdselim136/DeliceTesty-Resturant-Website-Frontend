import { Container, Row } from "react-bootstrap";
import Content from "../../Shared/Content/Content";
import MainFoodSingle from "./MainFoodSingle";

const MainFoodMenu = () => {
  const { food } = Content();

  return (
    <>
      <div className="main-food-menu">
        <h1 className="littleabout_title pt-5">Our Food</h1>
        <h4 className="littleabout_para text-lowercase">
          As you like , As your wish
        </h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <Container>
          <Row>
            {food.map((d) => (
              <MainFoodSingle data={d} key={d.foodname} />
            ))}
          </Row>
          <div className="text-center mb-5">
            <button className="border-0 mt-3 item_button">
              More Food Coming Soon
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainFoodMenu;
