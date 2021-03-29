# BlazorComponents
Useful blazor components

## Installation
You can install package from nuget

```
<PackageReference Include="CrahunBlazorComponents" Version="1.1.2" />
```

## Add bootstrap 4 Css
This library relies on bootstrap 4 so if need it you can link it from the library


```html
<link href="_content/CrahunBlazorComponents/bootstrap/bootstrap.min.css" rel="stylesheet" />
```

## Skeleton table component
```html
<SkeletonTable NumberOfColumns="4" IsLoading="isLoading" ShouldAnimate="true">
    <ChildContent>
        <tr>
            <td>
                Value1
            </td>
            <td>
                Value2
            </td>
        </tr>
    </ChildContent>
    <Head>
        <tr>
            <th>
                Column1
            </th>
            <th>
                Column2
            </th>
        </tr>
    </Head>
</SkeletonTable>
```
<img src="https://github.com/crahungit/BlazorComponents/blob/master/table.gif?raw=true" width="100%" />

\
&nbsp;
## Skeleton cards
```html
<SkeletonCards IsLoading="isLoading" ShouldAnimate="true">
    <div class="col-sm-4">
        <div class="card">
            <div class="card-header" data-simplebar>
                <h3 class="card-title">Title</h3>
            </div>
            <div class="card-body" data-simplebar>
                This is the body
            </div>
            <div class="card-footer text-right">
                This is the footer
            </div>
        </div>
    </div>
</SkeletonCards>
```
<img src="https://github.com/crahungit/BlazorComponents/blob/master/cards.gif?raw=true" width="100%" />

\
&nbsp;
## Wizard Component
The wizard component Will show steps in certain order. Steps can contains any other components, html or whatever you want.
This component is based on [creative Tim](https://www.creative-tim.com) jquery wizard.
<img src="https://github.com/crahungit/BlazorComponents/blob/master/wizard.gif?raw=true" width="100%" />

### Usage
```html
<Wizard Title="Wizard" Theme="Theme.Orange">
    <Step Name="Step 1">
        <div>Hi step 1</div>
    </Step>
    <Step Name="Step 2">
        <div>Hi step 2</div>
    </Step>
    <Step>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Name</td>
                </tr>
            </tbody>
        </table>
    </Step>
    <Step Name="Step 3">
        <div>Adios paso 4</div>
    </Step>
    <Step>
        <div>Hi step 3</div>
    </Step>
</Wizard>
```

### Available parameters and customizations
First you can customize the wizard colors with de Theme enum
```csharp
public enum Theme
{
    Purple,
    Green,
    Blue,
    Orange,
    Red
}
```

You can customize the buttons meaning and color with the Buttons enum
```csharp
public enum Buttons
{
    Default,
    Simple,
    Primary,
    Info,
    Success,
    Warning,
    Danger
}
```
### Callback events on buttons/tabs
```csharp
[Parameter]
public EventCallback OnPrevious { get; set; }

[Parameter]
public EventCallback OnNext { get; set; }

[Parameter]
public EventCallback OnFinished { get; set; }

[Parameter]
public EventCallback<int> OnSelectedStep { get; set; }
```
### Buttons appearence customization
```csharp
[Parameter]
public Buttons PreviousButtonClass { get; set; } = Buttons.Default;

[Parameter]
public Buttons NextButtonClass { get; set; } = Buttons.Danger;

[Parameter]
public Buttons FinishButtonClass { get; set; } = Buttons.Danger;

[Parameter]
public string NextButtonText { get; set; } = "Next";

[Parameter]
public string PreviousButtonText { get; set; } = "Previous";

[Parameter]
public string FinishedButtonText { get; set; } = "Finished";
```
### Available public methods
```chsarp
IsFirstStep()
IsLastStep()
SetActivePage(int currentIndex)
NextPage()
PreviousPage()
```
