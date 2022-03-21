using Astroshop.Core.Interfaces;

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WEB_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ShopController
    {

        private IProduct _service;

        public ShopController(IProduct service)
        {
            _service = service;
        }

        [HttpGet("get-all")]
        public async Task<object> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("get/{id}")]
        public async Task<object> Get(int id)
        {
            return await _service.GetById(id);
        }
    }
}