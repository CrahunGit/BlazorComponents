using Microsoft.AspNetCore.Components;

namespace Components.Components.Wizard
{
    public class Step : ComponentBase
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
