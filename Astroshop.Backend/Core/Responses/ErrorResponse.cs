using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses
{
    public class ErrorResponse : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public string Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}
