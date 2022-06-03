import "./Filter.css";
import Leftside from "./LeftSide/Leftside";
import ListOfTabs from "./ListOfTabs/ListOfTabs";
import RightSide from "./RightSide/RightSide";

const Accordino = () => {
    return (
        <div className="filter">
            <div>
                <Leftside />
            </div>
            <div>
                <RightSide />
                {/* <ListOfTabs></ListOfTabs> */}
            </div>
        </div>
    );
};

export default Accordino;
