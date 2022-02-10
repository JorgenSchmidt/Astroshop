using System.ComponentModel.DataAnnotations;

namespace Astroshop.Core.Entities
{
    public class Product
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Content { get; set; }
        public string Price { get; set; }
        public int Count { get; set; }
    }
}