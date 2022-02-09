using Astroshop.Core.Responses.SpecialResponses;
using System.Threading.Tasks;

namespace Astroshop.Core.Interfaces
{
    public interface IUser
    {
        /// <summary>
        /// To register the user
        /// </summary>
        /// <returns>Status of responce + object of User for register </returns>
        public Task<AccountResponse> RegisterUser(object input);
        /// <summary>
        /// To login user
        /// </summary>
        /// <param name="input"></param>
        /// <returns>Status of responce + object of User for login </returns>
        public Task<AccountResponse> LoginUser (object input);
        /// <summary>
        /// To recover password of user
        /// </summary>
        /// <param name="input"></param>
        /// <returns>Status of responce + object of User for recover password </returns>
        public Task<AccountResponse> RecoverPassword (object input);
    }
}