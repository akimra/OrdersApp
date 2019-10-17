using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using testwork.Model;
using testwork.Controllers.DBControllers;

namespace testwork.Controllers
{

    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private IDatabaseController dbcontrol;
        //private OrdersDbContext db;
        public OrdersController(OrdersDbContext context)
        {
            //db = context;
            dbcontrol = new MSSQLController(context);
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            List<Order> list = dbcontrol.GetOrders();
            if (!list.Any())
            {
                return NotFound();
            }
            return new ObjectResult(list);
        }
        
        [HttpGet("{filter}")]
        public IActionResult Get(string filter)
        {
            List<Order> list = dbcontrol.GetOrders(filter);
            if (!list.Any())
            {
                return NotFound();
            }
            return new ObjectResult(list);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Order ord)
        {
            //Order order = JsonConvert.DeserializeObject<Order>(ord.ToString(), new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd" });
            if (await dbcontrol.PutOrder(ord) > 0)
            {
                return new OkResult();
            }
            else
            {
                return new BadRequestResult();
            }
            
        }
    }
}