using Astroshop.Core.Entities;

namespace Astroshop.Core.Responses.SpecialResponses
{
    public class AccountResponse
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public User Body { get; set; }
        /// <summary>
        /// Status of response
        /// </summary>
        public int Status { get; set; }
    }
}