import Navbar from "@/components/navbar";
import {
    Chart,
    Performance,
    Sentiment,
    About,
    Token,
    Team,
    Coins,
} from "@/components/index";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200">
                <Chart />
                <Performance />
                <Sentiment />
                <About />
                <Token />
                <Team />
                <Coins />
            </div>
        </>
    );
}
