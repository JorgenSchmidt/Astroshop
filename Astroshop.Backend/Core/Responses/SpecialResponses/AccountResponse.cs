using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses.SpecialResponses
{
    public class AccountResponse : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public override ResponseStatus Status { get; set; }
    }
}