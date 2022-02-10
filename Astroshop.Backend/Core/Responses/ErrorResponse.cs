using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses
{
    public class ErrorResponse
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public string Body { get; set; }
        /// <summary>
        /// Status of response
        /// </summary>
        public ResponseStatus Status { get; set; }
    }
}
