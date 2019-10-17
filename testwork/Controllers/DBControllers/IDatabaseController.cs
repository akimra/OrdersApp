using System.Collections.Generic;
using System.Threading.Tasks;
using testwork.Model;

namespace testwork.Controllers.DBControllers
{
    // interface can be used by different classes,
    // works with different DBs, there implemented class
    // that can work with mssql server db
    public interface IDatabaseController
    {
        Task<int> PutOrder(Order order);
        List<Order> GetOrders();
        List<Order> GetOrders(string filter);
    }
}