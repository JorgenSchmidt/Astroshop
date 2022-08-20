using Astroshop.Core.Entities;
using Astroshop.Core.Enums;
using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses;
using Astroshop.Services;
using Astroshop.Core.Responses.SpecialResponses;

using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using System.Text.Json;

namespace Astroshop.Data.PostgreeSQL.Services
{
    public class UserService : IUser
    {

        private readonly ILogger<UserService> _logger;

        public UserService(ILogger<UserService> logger)
        {
            _logger = logger;
        }

        public async Task<Response> TranslateUserToken(object input)
        {
            try
            {
                Request token = JsonSerializer.Deserialize<Request>(input.ToString());
                _logger.LogInformation("(S) TranslateUserToken: Response has been sent");
                return new SingleResponse<User>
                {
                    Body = await TokenService.TranslateToken(token.Body.ToString()),
                    Status = ResponseStatus.Ok
                };
            }
            catch (Exception ex)
            {
                _logger.LogError("(E) TranslateUserToken method: " + ex.ToString());
                return new StringResponse
                {
                    Body = await Task.Run(() => "Internal server error"),
                    Status = ResponseStatus.InternalErrorServer
                };
            }
        }

        public async Task<Response> RegisterUser(object input)
        {
            try
            {
                User user = JsonSerializer.Deserialize<User>(input.ToString());
                _logger.LogInformation("(S) LoginUser method: Response has been sent");
                user.LegalLevel = "user";
                return new StringResponse
                {
                    Body = await TokenService.GetToken(user),
                    Status = ResponseStatus.Ok
                };
            }
            catch (Exception ex)
            {
                _logger.LogError("(E) LoginUser method: " + ex.ToString());
                return new StringResponse
                {
                    Body = await Task.Run(() => "Internal server error"),
                    Status = ResponseStatus.InternalErrorServer
                };
            }
        }

        public async Task<Response> LoginUser(object input)
        {
            throw new System.NotImplementedException();
        }

        public Task<Response> RecoverPassword(object input)
        {
            throw new System.NotImplementedException();
        }

    }
}