using Astroshop.Core.Interfaces;

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WEB_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController
    {
        private IUser _service;

        public UserController(IUser service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<object> Register(object input) 
        {
            return await _service.RegisterUser(input);
        }

        [HttpPost("login")]
        public async Task<object> Login(object input)
        {
            return await _service.LoginUser(input);
        }
    }
}
