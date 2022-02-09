using System.Threading.Tasks;
using System.Collections.Generic;

using Astroshop.Core.Entities;
using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses;

namespace Astroshop.Data.PostgreeSQL.Services
{
    public class ProductService : IProduct
    {
        public async Task<BasicResponse<Product>> GetAll()
        {
            return new BasicResponse<Product>()
            {
                Body = new List<Product>() { 
                    new Product() { Name = "Product_1", Category = "Category", Content = "Content", ID = 1, Price = "400", RefTo = "ref-1" },
                    new Product() { Name = "Product_2", Category = "Category", Content = "Content", ID = 2, Price = "400", RefTo = "ref-2" },
                    new Product() { Name = "Product_3", Category = "Test", Content = "Content", ID = 2, Price = "400", RefTo = "ref-3" },
                    new Product() { Name = "Product_4", Category = "Category", Content = "Content", ID = 2, Price = "400", RefTo = "ref-4" },
                },
                Status = 200
            };
        }

        public Task<BasicResponse<Product>> GetById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<int> AddProduct(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<int> DeleteProduct(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<int> UpdateProduct(object input)
        {
            throw new System.NotImplementedException();
        }
    }
}
