﻿using System;
using System.Collections;
using System.Collections.Generic;
using StrawberryShake;

namespace StrawberryShake.Client.StarWarsQuery
{
    [System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public class GetHuman
        : IGetHuman
    {
        public GetHuman(
            IHuman? human)
        {
            Human = human;
        }

        public IHuman? Human { get; }
    }
}