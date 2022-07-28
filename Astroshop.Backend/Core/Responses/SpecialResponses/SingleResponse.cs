using Astroshop.Core.Enums;

namespace Astroshop.Core.Responses.SpecialResponses
{
    /// <summary>
    /// Для отправки данных с полем Body не представляющим из себя список объектов
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class SingleResponse<T> : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        
        public T Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}