import { getData } from "@/app/actions";
import TradingView from "./tradingview";

const Chart = async () => {
    // const data = await getData();
    // console.log(data);
    return (
        <div className="rounded-lg p-10">
            {/* <div className="absolute p-2">{data.bitcoin.inr}</div> */}
            <TradingView />
        </div>
    );
};

export default Chart;
