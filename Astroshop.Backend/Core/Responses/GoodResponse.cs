using Astroshop.Core.Enums;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Astroshop.Core.Responses
{
    public class GoodResponse<T> : Response where T : class 
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public List<T> Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}