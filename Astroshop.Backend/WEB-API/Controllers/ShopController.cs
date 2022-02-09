using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using Astroshop.Data.PostgreeSQL.Services;
using Astroshop.Core.Interfaces;
using Astroshop.Core.Responses;
using Astroshop.Core.Entities;

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
        public Task<BasicResponse<Product>> GetAll()
        {
            return _service.GetAll();
        }
    }
}
