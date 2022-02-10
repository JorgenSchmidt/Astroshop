using Astroshop.Core.Entities;
using Astroshop.Core.Enums;
using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Astroshop.Data.PostgreeSQL.Services
{
    public class ProductService : IProduct
    {
        private List<Product> ExampleOfData = new List<Product>() {
            new Product() { Name = "Product_1", Category = "Category", Content = "Content", ID = 1, Count = 5, Price = "400", },
            new Product() { Name = "Product_2", Category = "Category", Content = "Content", ID = 2, Count = 5, Price = "400", },
            new Product() { Name = "Product_3", Category = "Test", Content = "Content", ID = 3, Count = 0, Price = "400", },
            new Product() { Name = "Product_4", Category = "Category", Content = "Content", ID = 4, Count = 5, Price = "400", },
            new Product() {
                Name = "Product_5_LONGLONG",
                Category = "Long!",
                Content = "Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.Long.",
                ID = 5,
                Count = 0,
                Price = "4000",
            },
        };

        public async Task<BasicResponse<Product>> GetAll()
        {
            return new BasicResponse<Product>()
            {
                Body = ExampleOfData,
                Status = ResponseStatus.Ok
            };
        }

        public async Task<BasicResponse<Product>> GetById(int id)
        {
            return new BasicResponse<Product>()
            {
                Body = ExampleOfData
                    .Where(targ => targ.ID == id)
                    .Select(targ => targ)
                    .ToList(),
                Status = ResponseStatus.Ok
            };
        }

        public Task<int> AddProduct(object input)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteProduct(object input)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateProduct(object input)
        {
            throw new NotImplementedException();
        }
    }
}
