using Astroshop.Core.Responses;
using System.Threading.Tasks;

namespace Astroshop.Core.Interfaces
{
    public interface IUserCart
    {
        /// <summary>
        /// To register user cart
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public Task<Response> RegisterUserCart(object input);
        /// <summary>
        /// To get user cart
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public Task<Response> GetUserCart(object input);
        /// <summary>
        /// To change user cart (for example for cancel an unconfirmed order)
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public Task<Response> ChangeUserCart(object input);
        /// <summary>
        /// To add order to the user cart
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public Task<Response> AddOrder(object input);
    }
}