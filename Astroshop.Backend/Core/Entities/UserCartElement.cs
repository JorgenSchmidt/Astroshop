using System.ComponentModel.DataAnnotations;

namespace Astroshop.Core.Entities
{
    public class UserCartElement
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public int CountOfProductInOrder { get; set; }
        public string ProductInfo { get; set; }
        public string PurchaseStatus { get; set; }
        public string OrderDate { get; set; }
    }
}