﻿using Astroshop.Core.Enums;
using System.Threading.Tasks;

namespace Astroshop.Core.Responses
{
    public class StringResponse : Response
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public string Body { get; set; }
        public override ResponseStatus Status { get; set; }
    }
}
