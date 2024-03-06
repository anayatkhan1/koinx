/* eslint-disable react/no-unescaped-entities */

const Performance = () => {
    const toggleLinks = [
        {
            id: 1,
            title: "Overview",
        },
        {
            id: 2,
            title: "Fundamentals",
        },
        {
            id: 3,
            title: "News Insights",
        },
        {
            id: 4,
            title: "Sentiments",
        },
        {
            id: 5,
            title: "Team",
        },
        {
            id: 6,
            title: "Technicals",
        },
        {
            id: 7,
            title: "Tokenomics",
        },
    ] as const;

    const funds = [
        {
            id: 1,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 2,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 3,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 4,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 5,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 6,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 7,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 8,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 9,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
        {
            id: 10,
            title: "Bitcoin Price",
            value: "$16, 930.022",
        },
    ] as const;

    return (
        <div className="max-w-5xl p-12">
            <div className="flex max-w-4xl items-start justify-between p-3 ">
                {toggleLinks.map(item => (
                    <div className="font-medium" key={item.id}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className="mt-6 rounded-lg bg-white p-5">
                <h1 className="p-2 text-2xl font-semibold">Performance</h1>
                <div className="grid grid-cols-3 items-center gap-9 p-2">
                    <div className="">
                        <p>Today's Low</p>
                        <p>$6,930.22</p>
                    </div>
                    <div className="mb-1 h-2 overflow-hidden rounded-lg bg-gray-200">
                        <div className="h-2 w-[100%] animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                    </div>
                    <div className="">
                        <p>Today's Low</p>
                        <p>$6,930.22</p>
                    </div>
                    <div className="">
                        <p>Today's Low</p>
                        <p>$6,930.22</p>
                    </div>
                    <div className="mb-1 h-2 overflow-hidden rounded-lg bg-gray-200">
                        <div className="h-2 w-[100%]  animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                    </div>
                    <div className="">
                        <p>Today's Low</p>
                        <p>$6,930.22</p>
                    </div>
                </div>

                <div className="p-5">
                    <h1 className="text-2xl font-semibold">Fundamentals</h1>
                    <div className="grid grid-cols-2 items-center gap-12  p-2">
                        {funds.map(fund => (
                            <div className="border-b-2" key={fund.id}>
                                <div className="flex justify-between p-2">
                                    <p className="text-gray-400">
                                        {fund.title}
                                    </p>
                                    <p>{fund.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
