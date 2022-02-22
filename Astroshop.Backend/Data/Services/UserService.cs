using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses;
using System.Threading.Tasks;

namespace Astroshop.Data.PostgreeSQL.Services
{
    public class UserService : IUser
    {
        public Task<Response> LoginUser(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<Response> RecoverPassword(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<Response> RegisterUser(object input)
        {
            throw new System.NotImplementedException();
        }
    }
}
