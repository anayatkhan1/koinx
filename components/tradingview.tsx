"use client";

import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
    () => import("react-ts-tradingview-widgets").then(w => w.SymbolOverview),
    {
        ssr: false,
    }
);

const TradingView = () => {
    return (
        <SymbolOverviewNoSSR
            symbols={[["COINBASE:BTCUSD|1D"]]}
            colorTheme="light"
            hideDateRanges={false}
            hideMarketStatus={false}
            width="750"
            height="600"
            chartType="area"
            scalePosition="left"
            gridLineColor=""
            lineColor="rgba(31, 156, 346, 1)"
            topColor="rgba(187, 217, 251, 1)"
            bottomColor="rgba(255, 255, 255, 1)"
            dateFormat="MMM dd"
            timeHoursFormat="12-hours"
            fontSize="13"
        />
    );
};

export default TradingView;
