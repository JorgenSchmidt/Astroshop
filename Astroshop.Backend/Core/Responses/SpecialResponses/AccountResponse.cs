using Astroshop.Core.Entities;
using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses.SpecialResponses
{
    public class AccountResponse : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public User Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}