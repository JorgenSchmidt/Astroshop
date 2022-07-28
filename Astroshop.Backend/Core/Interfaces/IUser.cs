using Astroshop.Core.Responses;
using System.Threading.Tasks;

namespace Astroshop.Core.Interfaces
{
    public interface IUser
    {
        /// <summary>
        /// To translate the usertoken
        /// </summary>
        /// <returns>Status of responce + translated token </returns>
        public Task<Response> TranslateUserToken(object input);
        /// <summary>
        /// To register the user
        /// </summary>
        /// <returns>Status of responce + object of User for register </returns>
        public Task<Response> RegisterUser(object input);
        /// <summary>
        /// To login user
        /// </summary>
        /// <param name="input"></param>
        /// <returns>Status of responce + object of User for login </returns>
        public Task<Response> LoginUser (object input);
        /// <summary>
        /// To recover password of user
        /// </summary>
        /// <param name="input"></param>
        /// <returns>Status of responce + object of User for recover password </returns>
        public Task<Response> RecoverPassword (object input);
    }
}