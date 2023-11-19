import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";

declare function require(path: string): any;

interface Item {
  content: string;
  name: string;
}

function App() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);

  React.useEffect(() => {
    const jsonData = {
      items: [
        {
          content:
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 28 28\"><path d=\"M13 11L10 16H15L12 21M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417\"/></svg>",
          name: "Cloud-Bolt",
        },
        {
          content:
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 28 28\"><path d=\"M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.5693 20.6254 14.5541 20 15.3275M12.5 12.9995L10.5 21.0008M8.5 11.9995L6.5 20.0008M16.5 12L14.5 20.0013\"/></svg>",
          name: "Cloud-Rain",
        },
      ],
    };

    setItems(jsonData.items);
  }, []); // Fetch or set your data when the component mounts

  const onSelectItem = (item: Item) => {
    setSelectedItem(item);
  };

  const onCreate = () => {
    if (selectedItem) {
      
      parent.postMessage(
        { pluginMessage: { type: "create-rectangles", values: [selectedItem] } },
        "*"
      );
    }
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <main>
      <header>
        <img src={require("./logo.svg")} alt="Logo" />
        <h2>Icon Creator</h2>
      </header>
      <section>
        <label>Select Icon:</label>
        <select onChange={(e) => onSelectItem(items.find((item) => item.name === e.target.value) || null)}>
          <option value="">-- Select an Icon --</option>
          {items.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {selectedItem && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: selectedItem.content }} />
          </div>
        )}
      </section>
      <footer>
        <button className="brand" onClick={onCreate} disabled={!selectedItem}>
          Create Icon
        </button>
        <button onClick={onCancel}>Cancel</button>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
