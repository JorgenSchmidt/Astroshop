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

        public async Task<Response> GetAll()
        {
            try
            {
                return new GoodResponse<Product>
                {
                    Body = ExampleOfData,
                    Status = ResponseStatus.Ok
                };
            }
            catch (Exception ex)
            {
                return new ErrorResponse
                {
                    Body = ex.Message,
                    Status = ResponseStatus.InternalErrorServer
                };
            }
        }

        public async Task<Response> GetById(int id)
        {
            try
            {
                return new GoodResponse<Product>()
                {
                    Body = ExampleOfData
                        .Where(targ => targ.ID == id)
                        .Select(targ => targ)
                        .ToList(),
                    Status = ResponseStatus.Ok
                };
            }
            catch (Exception ex)
            {
                return new ErrorResponse
                {
                    Body = ex.Message,
                    Status = ResponseStatus.InternalErrorServer
                };
            }
        }

        public Task<Response> AddProduct(object input)
        {
            throw new NotImplementedException();
        }

        public Task<Response> DeleteProduct(object input)
        {
            throw new NotImplementedException();
        }

        public Task<Response> UpdateProduct(object input)
        {
            throw new NotImplementedException();
        }
    }
}
