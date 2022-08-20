using Astroshop.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WEB_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserCartController
    {
        private IUserCart _service;

        public UserCartController (IUserCart service)
        {
            _service = service;
        }

        [HttpPost("get")]
        public async Task<object> GetUserCart(object input)
        {
            return await _service.GetUserCart(input);
        }

        [HttpPost("register")]
        public async Task<object> RegisterUserCart(object input)
        {
            return await _service.RegisterUserCart(input);
        }

        [HttpPost("addorder")]
        public async Task<object> AddOrder(object input)
        {
            return await _service.AddOrder(input);
        }

        [HttpPost("change")]
        public async Task<object> ChangeUserCart(object input)
        {
            return await _service.ChangeUserCart(input);
        }

    }
}