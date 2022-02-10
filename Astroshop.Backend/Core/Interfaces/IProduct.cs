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
        public Task<Response> GetAll();
        /// <summary>
        /// To get target product for displaying in frontend. Get method.
        /// </summary>
        /// <param name="id">Product id</param>
        /// <returns></returns>
        public Task<Response> GetById(int id);
        /// <summary>
        /// To add product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce </returns>
        public Task<Response> AddProduct(object input);
        /// <summary>
        /// To update product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce</returns>
        public Task<Response> UpdateProduct(object input);
        /// <summary>
        /// To delete product and return execution status. Post method.
        /// </summary>
        /// <returns>Status of responce</returns>
        public Task<Response> DeleteProduct(object input);
    }
}