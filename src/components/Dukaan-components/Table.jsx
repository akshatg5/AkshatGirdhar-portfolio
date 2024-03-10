import { orderData } from "./orderData";

export const Table = () => {
  return (
    <div className="bg-white-500 px-3 pt-3 pb-2 rounded-lg grid gap-4">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-xm font-medium rounded uppercase text-black-400">
            <tr className="">
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Transaction ID</th>
              <th className="px-6 py-4 font-medium">Refund date</th>
              <th className="px-6 py-4 font-medium">Order amount</th>
            </tr>
          </thead>
          {orderData.map((order) => {
            return (
              <tbody>
                <tr className="bg-white border border-slate-200">
                  <th scope="row">#{order.id}</th>
                  <td className="px-6 py-4 flex items-center text-slate-800">
                    {order.status === "Successful" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    )}
                    {order.status === "Processing" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                    )}
                    {order.status === "Failed" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    )}
                    <p className="pl-2">{order.status}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-800">
                    {order.transactionID}
                  </td>
                  <td className="px-6 py-4 text-slate-800">
                    {order.refundDate}
                  </td>
                  <td className="px-6 py-4 text-slate-800">{order.amount}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
