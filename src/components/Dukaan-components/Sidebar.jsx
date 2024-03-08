export const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <div className="p-2">
            <img src="/1.png" className="w-20 h-20 rounded-md" />
          </div>
          <div className="">
            <p>Akshat's Store</p>
            <p>Visit Store</p>
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
};
