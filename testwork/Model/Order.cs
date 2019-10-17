using System;

namespace testwork.Model
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime DateBirth { get; set; }
        public string Username { get; set; }
        public string Phone { get; set; }
        public string Product { get; set; }
        public string ColorPhone { get; set; }
        public bool Headset { get; set; }
        public bool Charge { get; set; }
    }
}