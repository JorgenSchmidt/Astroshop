using Astroshop.Core.Enums;
using System.Threading.Tasks;

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