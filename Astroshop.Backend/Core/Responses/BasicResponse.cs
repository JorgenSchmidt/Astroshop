﻿using Astroshop.Core.Enums;
using System.Collections.Generic;

namespace Astroshop.Core.Responses
{
    public class BasicResponse<T> where T : class
    {
        /// <summary>
        /// Body of response
        /// </summary>
        public List<T> Body { get; set; }
        /// <summary>
        /// Status of response
        /// </summary>
        public ResponseStatus Status { get; set; }
    }
}