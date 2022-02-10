using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses
{
    public abstract class Response 
    {
        /// <summary>
        /// Status of response
        /// </summary>
        virtual public ResponseStatus Status { get; set; }
    }
}