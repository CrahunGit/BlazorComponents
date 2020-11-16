# BlazorComponents
Useful blazor components

## Skeleton table component
```html
<SkeletonTable NumberOfColumns="4" IsLoading="isLoading">
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
![skeleton table demo](https://github.com/crahungit/BlazorComponents/blob/master/table.gif?raw=true)

## Skeleton cards
```html
<SkeletonCards IsLoading="isLoading">
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
![skeleton cards demo](https://github.com/crahungit/BlazorComponents/blob/master/cards.gif?raw=true)
