using Astroshop.Core.Entities;
using Astroshop.Core.Responses;
using System.Threading.Tasks;

namespace Astroshop.Core.Interfaces
{
    public interface IProduct
    {
        /// <summary>
        /// To get all list of products. Get method.
        /// </summary>
        /// <returns> Body (as list of Product objects) and status of request </returns>
        public Task<BasicResponse<Product>> GetAll();
        /// <summary>
        /// To get target product for displaying in frontend. Get method.
        /// </summary>
        /// <param name="id">Product id</param>
        /// <returns></returns>
        public Task<BasicResponse<Product>> GetById(int id);
        /// <summary>
        /// To add product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce </returns>
        public Task<int> AddProduct(object input);
        /// <summary>
        /// To update product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce</returns>
        public Task<int> UpdateProduct(object input);
        /// <summary>
        /// To delete product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce</returns>
        public Task<int> DeleteProduct(object input);
    }
}