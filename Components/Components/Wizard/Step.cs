using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Components.Components.Wizard
{
    public class Step: ComponentBase
    {
        [Parameter]
        public string Name { get; set; }

        [Parameter]
        public RenderFragment ChildContent { get; set; }

        [CascadingParameter(Name = "Parent")]
        public Wizard Parent { get; set; }

        protected override void OnInitialized()
        {
            Parent.AddStep(this);
        }
    }
}
