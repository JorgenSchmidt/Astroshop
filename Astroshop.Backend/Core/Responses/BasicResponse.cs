using System.Collections.Generic;

namespace Astroshop.Core.Responses
{
    public class BasicResponse<T> where T : class
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public List<T> Body { get; set; }
        /// <summary>
        /// Status of response
        /// </summary>
        public int Status { get; set; }
    }
}