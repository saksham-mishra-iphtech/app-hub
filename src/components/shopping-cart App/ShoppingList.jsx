import { useSelector } from "react-redux";
import { Droppable } from "@hello-pangea/dnd";

const ShoppingList = () => {
  const shoppingList = useSelector(state => state.recipe.shoppingList);

  return (
    <Droppable droppableId="shoppingList">
      {(provided) => (
        <div
          className="border p-4 m-4 bg-green-100 w-64 h-full rounded shadow"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2 className="text-xl font-bold mb-2">🛒 Shopping List</h2>
          {shoppingList.map((item, index) => (
            <div key={index} className="p-1 text-sm bg-white rounded shadow mb-1">{item}</div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ShoppingList;
