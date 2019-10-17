using System.Collections.Generic;
using System.Threading.Tasks;
using testwork.Model;
using System.Linq;

namespace testwork.Controllers.DBControllers
{
    public class MSSQLController : IDatabaseController
    {
        private OrdersDbContext db;
        public MSSQLController(OrdersDbContext context)
        {
            db = context;
        }
        public async Task<int> PutOrder(Order order)
        {
            db.Orders.Add(order);
            return await db.SaveChangesAsync();
        }

        public List<Order> GetOrders()
        {
            List<Order> list = new List<Order>();
            list.AddRange(db.Orders);
            return list;
        }

        public List<Order> GetOrders(string filter)
        {
            var OrdersFiltered = (from order in db.Orders
                                  where order.Username.Contains(filter)
                                  select order).ToList();
            return OrdersFiltered;
        }
    }
}