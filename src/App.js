import "./styles.css";
import Header from "./components/Header";
import ItemInput from "./components/atoms/ItemInput";
import ItemList from "./components/ItemList";
import ToggleButton from "./components/atoms/ToggleButton";
import Filter from "./components/Filter";

export default function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <ItemInput />
                <ItemList />
                <ToggleButton />
                <Filter />
            </div>
        </div>
    );
}
