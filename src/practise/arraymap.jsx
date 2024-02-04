import "./Arraymap.css";
function Arraymap() {
  const fruits = [
    { name: "mango", color: "yellow", taste: "sour" },
    { name: "apple", color: "red", taste: "sweet" },
  ];

  return (
    <>
      <div className="arraytable">
        <table>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Color</th>
            <th>Taste</th>
          </tr>
          {fruits.map((fruit, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{fruit.name}</td>

              <td>{fruit.color}</td>

              <td>{fruit.taste}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
export default Arraymap;
