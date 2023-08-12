import "./home.scss";
import TopBox from "../../components/topbox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/barChatBox/BarChartBox";
import { chartBoxProduct,chartBoxRevenue, chartBoxUser ,chartConversion, barChartBoxRevenue, baChartBoxVisit } from "../../data";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">
      <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox {...chartConversion} />
      </div>
      <div className="box box7"><BigChartBox {...BigChartBox}/></div>
      <div className="box box8">
        <BarChartBox {...baChartBoxVisit}/>
        </div>
      <div className="box box9">
      <BarChartBox {...barChartBoxRevenue}/>
      </div>
    </div>
  );
};

export default Home;
