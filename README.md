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
The wizard component Will show steps in certain order. Steps can contains any othe components, html, whatever you want.
<img src="https://github.com/crahungit/BlazorComponents/blob/master/wizard.gif?raw=true" width="100%" />
