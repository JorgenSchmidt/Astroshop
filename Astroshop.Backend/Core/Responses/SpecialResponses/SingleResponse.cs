using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses.SpecialResponses
{
    public class SingleResponse<T> : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        
        public T Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}