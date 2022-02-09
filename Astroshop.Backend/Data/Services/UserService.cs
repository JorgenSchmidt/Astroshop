using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses.SpecialResponses;
using System.Threading.Tasks;

namespace Astroshop.Data.PostgreeSQL.Services
{
    public class UserService : IUser
    {
        public Task<AccountResponse> LoginUser(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<AccountResponse> RecoverPassword(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<AccountResponse> RegisterUser(object input)
        {
            throw new System.NotImplementedException();
        }
    }
}
